const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { URL } = require('url');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, 'data');
const CONTENT_FILE = path.join(DATA_DIR, 'site-content.json');
const AUTH_FILE = path.join(DATA_DIR, 'admin-auth.json');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const sessions = new Map();
const SESSION_MAX_AGE = 1000 * 60 * 60 * 8;

function hashPassword(password, salt) {
  return crypto.scryptSync(password, salt, 64).toString('hex');
}

function verifyPassword(password, salt, storedHash) {
  const hash = hashPassword(password, salt);
  try {
    return crypto.timingSafeEqual(Buffer.from(hash, 'hex'), Buffer.from(storedHash, 'hex'));
  } catch {
    return false;
  }
}

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return fallback;
  }
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 2_000_000) {
        reject(new Error('Body too large'));
        req.destroy();
      }
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

function parseCookies(req) {
  const header = req.headers.cookie || '';
  return Object.fromEntries(
    header.split(';').map((part) => {
      const [key, ...rest] = part.trim().split('=');
      return [key, decodeURIComponent(rest.join('=') || '')];
    }).filter(([key]) => key)
  );
}

function createSession(username) {
  const token = crypto.randomBytes(32).toString('hex');
  sessions.set(token, { username, createdAt: Date.now() });
  return token;
}

function getSession(req) {
  const cookies = parseCookies(req);
  const token = cookies.admin_session;
  if (!token || !sessions.has(token)) return null;
  const session = sessions.get(token);
  if (Date.now() - session.createdAt > SESSION_MAX_AGE) {
    sessions.delete(token);
    return null;
  }
  return session;
}

function setSessionCookie(res, token) {
  res.setHeader(
    'Set-Cookie',
    `admin_session=${token}; HttpOnly; Path=/; SameSite=Strict; Max-Age=${SESSION_MAX_AGE / 1000}`
  );
}

function clearSessionCookie(res) {
  res.setHeader('Set-Cookie', 'admin_session=; HttpOnly; Path=/; SameSite=Strict; Max-Age=0');
}

function sendJson(res, status, payload) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(err.code === 'ENOENT' ? 404 : 500, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(err.code === 'ENOENT' ? '<h1>404 Not Found</h1>' : 'Server error');
      return;
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });
    res.end(content);
  });
}

function redirect(res, location) {
  res.writeHead(302, { Location: location });
  res.end();
}

async function handleApi(req, res, pathname) {
  if (pathname === '/api/content' && req.method === 'GET') {
    const content = readJson(CONTENT_FILE, { texts: {}, images: {}, projects: [] });
    return sendJson(res, 200, content);
  }

  if (pathname === '/api/admin/login' && req.method === 'POST') {
    const body = await parseBody(req);
    const auth = readJson(AUTH_FILE, null);
    if (!auth || !body.username || !body.password) {
      return sendJson(res, 400, { ok: false, error: 'Eksik bilgi' });
    }
    const valid = verifyPassword(body.password, auth.salt, auth.passwordHash);
    if (body.username !== auth.username || !valid) {
      return sendJson(res, 401, { ok: false, error: 'Kullanıcı adı veya şifre hatalı' });
    }
    const token = createSession(body.username);
    setSessionCookie(res, token);
    return sendJson(res, 200, { ok: true, username: auth.username });
  }

  if (pathname === '/api/admin/logout' && req.method === 'POST') {
    const cookies = parseCookies(req);
    if (cookies.admin_session) sessions.delete(cookies.admin_session);
    clearSessionCookie(res);
    return sendJson(res, 200, { ok: true });
  }

  if (pathname === '/api/admin/check' && req.method === 'GET') {
    const session = getSession(req);
    if (!session) return sendJson(res, 401, { ok: false });
    return sendJson(res, 200, { ok: true, username: session.username });
  }

  if (pathname === '/api/admin/credentials' && req.method === 'PUT') {
    const session = getSession(req);
    if (!session) return sendJson(res, 401, { ok: false, error: 'Oturum gerekli' });

    const body = await parseBody(req);
    const auth = readJson(AUTH_FILE, null);
    if (!auth) return sendJson(res, 500, { ok: false, error: 'Kimlik dosyası bulunamadı' });

    const currentValid = verifyPassword(body.currentPassword || '', auth.salt, auth.passwordHash);
    if (!currentValid) {
      return sendJson(res, 401, { ok: false, error: 'Mevcut şifre hatalı' });
    }

    if (!body.newUsername || !body.newPassword) {
      return sendJson(res, 400, { ok: false, error: 'Yeni kullanıcı adı ve şifre gerekli' });
    }

    if (body.newPassword !== body.confirmPassword) {
      return sendJson(res, 400, { ok: false, error: 'Şifreler eşleşmiyor' });
    }

    auth.username = body.newUsername.trim();
    auth.passwordHash = hashPassword(body.newPassword, auth.salt);
    writeJson(AUTH_FILE, auth);
    return sendJson(res, 200, { ok: true, username: auth.username });
  }

  if (pathname === '/api/content' && req.method === 'PUT') {
    const session = getSession(req);
    if (!session) return sendJson(res, 401, { ok: false, error: 'Oturum gerekli' });

    const body = await parseBody(req);
    if (!body || typeof body !== 'object') {
      return sendJson(res, 400, { ok: false, error: 'Geçersiz içerik' });
    }

    const content = {
      texts: body.texts || {},
      images: body.images || {},
      projects: Array.isArray(body.projects) ? body.projects : []
    };

    content.projects.sort((a, b) => (a.order || 0) - (b.order || 0));
    writeJson(CONTENT_FILE, content);
    return sendJson(res, 200, { ok: true });
  }

  sendJson(res, 404, { ok: false, error: 'Not found' });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = decodeURIComponent(url.pathname);

  if (pathname.startsWith('/api/')) {
    try {
      await handleApi(req, res, pathname);
    } catch (error) {
      sendJson(res, 500, { ok: false, error: error.message || 'Server error' });
    }
    return;
  }

  if (pathname === '/admin.html') {
    const session = getSession(req);
    if (!session) {
      return redirect(res, '/admin-login.html');
    }
    return serveFile(res, path.join(ROOT, 'admin.html'));
  }

  if (pathname === '/admin-login.html') {
    const session = getSession(req);
    if (session) {
      return redirect(res, '/admin.html');
    }
    return serveFile(res, path.join(ROOT, 'admin-login.html'));
  }

  let filePath = path.join(ROOT, pathname === '/' ? 'index.html' : pathname);

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  if (pathname.startsWith('/data/')) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  serveFile(res, filePath);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Admin login: http://localhost:${PORT}/admin-login.html`);
  console.log(`Default credentials: admin / Anka2026!`);
});
