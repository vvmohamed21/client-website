/**
 * Regression suite: branding, favicon, admin content pipeline, auth flow.
 * Run: node tests/run-tests.js
 */
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

const ROOT = path.join(__dirname, '..');
const PORT = 3123;
const BASE = `http://localhost:${PORT}`;
const CONTENT_FILE = path.join(ROOT, 'data', 'site-content.json');

let passed = 0;
let failed = 0;
const failures = [];

function check(name, condition, detail) {
  if (condition) {
    passed++;
    console.log(`  PASS  ${name}`);
  } else {
    failed++;
    failures.push({ name, detail });
    console.log(`  FAIL  ${name}${detail ? ` -> ${detail}` : ''}`);
  }
}

function request(method, urlPath, { body, cookie } = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      `${BASE}${urlPath}`,
      {
        method,
        headers: {
          ...(body ? { 'Content-Type': 'application/json' } : {}),
          ...(cookie ? { Cookie: cookie } : {})
        }
      },
      (res) => {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          const buf = Buffer.concat(chunks);
          resolve({ status: res.statusCode, headers: res.headers, buf, body: buf.toString('utf8') });
        });
      }
    );
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function waitForServer(proc, tries = 40) {
  for (let i = 0; i < tries; i++) {
    try {
      await request('GET', '/favicon.svg');
      return true;
    } catch {
      await new Promise((r) => setTimeout(r, 250));
    }
  }
  proc.kill();
  throw new Error('Server did not start');
}

async function getAdminCookie() {
  const login = await request('POST', '/api/admin/login', { body: { username: 'admin', password: 'Anka2026!' } });
  return login.headers['set-cookie'][0].split(';')[0];
}

async function main() {
  const originalContent = fs.readFileSync(CONTENT_FILE, 'utf8');
  const server = spawn(process.execPath, ['server.js'], {
    cwd: ROOT,
    env: { ...process.env, PORT: String(PORT) },
    stdio: 'ignore'
  });

  try {
    await waitForServer(server);

    console.log('\n[1] Branding — site name is AVETO only');
    const pages = [
      '/index.html',
      '/services.html',
      '/portfolio.html',
      '/contact.html',
      '/ai-brief.html',
      '/sigorta.html',
      '/admin-login.html'
    ];
    const bodies = {};
    for (const page of pages) {
      const res = await request('GET', page);
      bodies[page] = res.body;
      check(`${page} has no "Anka Build Studio"`, !res.body.includes('Anka Build Studio'));
    }
    check('index title is exactly AVETO', /<title>AVETO<\/title>/.test(bodies['/index.html']));
    check('index hero shows AVEETO brand h1', /<h1>AVETO<\/h1>/.test(bodies['/index.html']));
    check('contact title uses AVETO', /<title>Contact \| AVETO<\/title>/.test(bodies['/contact.html']));
    check('admin-login title uses AVETO', /Yönetim Girişi \| AVETO/.test(bodies['/admin-login.html']));
    for (const page of ['/index.html', '/contact.html', '/sigorta.html']) {
      check(`${page} footer says © 2026 AVETO`, bodies[page].includes('© 2026 AVETO'));
    }

    console.log('\n[2] Favicon — clear branded icon on every page');
    const favRes = await request('GET', '/favicon.svg');
    check('favicon.svg served', favRes.status === 200 && favRes.headers['content-type'].includes('image/svg+xml'));
    for (const page of pages.concat(['/admin.html'])) {
      const html =
        bodies[page] || (await request('GET', page, { cookie: await getAdminCookie() })).body;
      check(
        `${page} full icon chain (ico+svg+png+apple)`,
        html.includes('href="favicon.ico"') &&
          html.includes('href="favicon.svg"') &&
          html.includes('href="favicon-192.png"') &&
          html.includes('rel="apple-touch-icon"')
      );
      check(`${page} no jpeg favicon`, !html.includes('rel="icon" type="image/jpeg" href="imgn09.jpeg"'));
    }

    console.log('\n[3] Admin content pipeline wired on all public pages');
    for (const page of ['/index.html', '/services.html', '/portfolio.html', '/contact.html', '/ai-brief.html', '/sigorta.html']) {
      check(`${page} loads content.js`, bodies[page].includes('<script src="content.js"></script>'));
    }
    const appJs = (await request('GET', '/app.js')).body;
    check('app.js exposes window.translations', appJs.includes('window.translations = translations'));
    check('app.js calls initSiteContent', appJs.includes('initSiteContent'));

    console.log('\n[4] Visual consistency tokens');
    const css = (await request('GET', '/styles.css')).body;
    check('color-scheme is light', /color-scheme:\s*light/.test(css));
    check('nav-toggle uses primary color', /\.nav-toggle span\s*{[^}]*var\(--primary-color\)/.test(css));

    console.log('\n[5] Admin auth flow (no database — JSON file + sessions)');
    const wrong = await request('POST', '/api/admin/login', { body: { username: 'admin', password: 'nope' } });
    check('wrong password rejected 401', wrong.status === 401);

    const login = await request('POST', '/api/admin/login', { body: { username: 'admin', password: 'Anka2026!' } });
    check('valid login 200', login.status === 200);
    const setCookie = login.headers['set-cookie'] && login.headers['set-cookie'][0];
    check('session cookie issued', Boolean(setCookie && setCookie.includes('admin_session=')));
    const cookie = setCookie ? setCookie.split(';')[0] : '';

    const adminNoAuth = await request('GET', '/admin.html');
    check('/admin.html redirects to login when anonymous', adminNoAuth.status === 302 && adminNoAuth.headers.location === '/admin-login.html');
    const adminAuthed = await request('GET', '/admin.html', { cookie });
    check('/admin.html serves panel when authed', adminAuthed.status === 200);
    check('admin panel branded AVETO', adminAuthed.body.includes('| AVETO'));

    const dataNoAuth = await request('PUT', '/api/content', { body: {} });
    check('content PUT requires session', dataNoAuth.status === 401);

    console.log('\n[6] Content edit round-trip (admin edits appear on site)');
    const before = await request('GET', '/api/content');
    const content = JSON.parse(before.body);
    content.texts.index = content.texts.index || {};
    const savedEyebrow = content.texts.index.homeEyebrow;
    content.texts.index.homeEyebrow = 'REGRESSION_TEST_VALUE';
    const put = await request('PUT', '/api/content', { body: content, cookie });
    check('content PUT persists 200', put.status === 200);
    const after = JSON.parse((await request('GET', '/api/content')).body);
    check('edited text readable from public API', after.texts.index.homeEyebrow === 'REGRESSION_TEST_VALUE');

    const homeAfterEdit = await request('GET', '/index.html');
    void homeAfterEdit;
    const contentJs = (await request('GET', '/content.js')).body;
    check('content.js applies overrides to DOM', contentJs.includes('applyTextOverrides'));

    console.log('\n[7] Branded binary icons replace legacy files');
    const ico = await request('GET', '/favicon.ico');
    check(
      'favicon.ico is valid ICO (magic 00 00 01 00)',
      ico.status === 200 && ico.buf.slice(0, 4).equals(Buffer.from([0x00, 0x00, 0x01, 0x00]))
    );
    for (const file of ['favicon-32.png', 'favicon-192.png', 'favicon-512.png', 'apple-touch-icon.png']) {
      const png = await request('GET', `/${file}`);
      check(
        `${file} is valid PNG`,
        png.status === 200 && png.buf.slice(0, 4).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47]))
      );
    }

    console.log('\n[8] Portfolio renders projects dynamically from data');
    const portfolioHtml = bodies['/portfolio.html'];
    check('portfolio has #projectGrid container', portfolioHtml.includes('id="projectGrid"'));
    check('portfolio has no hardcoded static project cards', !portfolioHtml.includes('Ege Light House'));
    const contentJsBody = (await request('GET', '/content.js')).body;
    check('content.js ships DEFAULT_PROJECTS fallback', contentJsBody.includes('DEFAULT_PROJECTS'));
    check('admin validates projects before save', (await request('GET', '/admin.js')).body.includes('validateProjectChanges'));

    console.log('\n[9] Cache policy — no stale pages/icons on navigation');
    for (const asset of ['/', '/styles.css', '/favicon.svg', '/favicon.ico']) {
      const res = await request('GET', asset);
      check(`${asset} served with no-cache`, res.headers['cache-control'] === 'no-cache');
    }

    console.log('\n[10] Mobile readiness');
    for (const page of pages) {
      const html = bodies[page];
      check(`${page} has viewport meta`, html.includes('content="width=device-width, initial-scale=1"'));
      check(`${page} has theme-color`, html.includes('name="theme-color"'));
    }
    const cssBody = css;
    check('html has text-size-adjust (no iOS inflation)', /text-size-adjust:\s*100%/.test(cssBody));
    check('hero has vh fallback before svh', cssBody.includes('min-height: calc(100vh - 76px)'));
    check('page-hero has svh fallback', /min-height:\s*52vh/.test(cssBody));
    check('mobile menu caps height', /\.nav-links\s*{[^}]*max-height/.test(cssBody));
    check('compare-slider has aspect-ratio fallback', /\.compare-slider\s*{[^}]*min-height:\s*240px/.test(cssBody));
    check('login inputs 16px (no iOS zoom)', (await request('GET', '/admin-login.html')).body.includes('font-size: 16px'));
    check('admin inputs 16px (no iOS zoom)', adminAuthed.body.includes('font-size: 16px'));
    check('logout button flows statically on phones', adminAuthed.body.includes('.logout-btn { position: static'));
  } finally {
    server.kill();
    fs.writeFileSync(CONTENT_FILE, originalContent, 'utf8');
  }

  console.log(`\nResult: ${passed} passed, ${failed} failed`);
  if (failed) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Test runner crashed:', err.message);
  process.exit(1);
});
