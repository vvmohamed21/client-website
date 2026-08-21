/**
 * Site içeriğini API veya localStorage'dan yükler, sayfaya uygular.
 */
(function () {
  const PAGE_HERO_SELECTORS = {
    home: '.home-hero',
    services: '.services-hero',
    portfolio: '.portfolio-hero',
    contact: '.contact-hero',
    ai: '.ai-hero',
    insurance: '.insurance-hero'
  };

  const PAGE_ID_MAP = {
    home: 'index',
    services: 'services',
    portfolio: 'portfolio',
    contact: 'contact',
    ai: 'ai-brief',
    insurance: 'sigorta'
  };

  const DEFAULT_IMAGES = {
    index: {
      heroBackground: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=82',
      experienceBackground: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=80'
    },
    services: {
      heroBackground: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80'
    },
    portfolio: {
      heroBackground: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=80',
      compareBefore: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1400&q=80',
      compareAfter: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=80'
    },
    contact: {
      heroBackground: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80'
    },
    'ai-brief': {
      heroBackground: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=82'
    },
    sigorta: {
      heroBackground: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80'
    }
  };

  const DEFAULT_PROJECTS = [
    {
      id: 1,
      order: 1,
      type: 'Villa',
      title: 'Ege Light House',
      description: 'Doğal taş, açık mutfak, gölgeli teras ve deniz rüzgarına göre planlanan cephe.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      beforeImage: '',
      afterImage: ''
    },
    {
      id: 2,
      order: 2,
      type: 'Tadilat',
      title: 'Urban Renewal Flat',
      description: 'Kısa süreli uygulama, akustik iyileştirme ve saklı depolama çözümleri.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      beforeImage: '',
      afterImage: ''
    },
    {
      id: 3,
      order: 3,
      type: 'Ticari',
      title: 'North Clinic Studio',
      description: 'Hasta akışı, hijyenik yüzeyler ve premium marka algısı birlikte kurgulandı.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
      beforeImage: '',
      afterImage: ''
    }
  ];

  window.siteContentOverrides = null;

  async function loadSiteContent() {
    try {
      const response = await fetch('/api/content');
      if (response.ok) {
        window.siteContentOverrides = await response.json();
        localStorage.setItem('adminSiteData', JSON.stringify(window.siteContentOverrides));
        return window.siteContentOverrides;
      }
    } catch {
      // API yok — localStorage kullan
    }

    const saved = localStorage.getItem('adminSiteData');
    window.siteContentOverrides = saved ? JSON.parse(saved) : null;
    return window.siteContentOverrides;
  }

  function getTextOverridesFlat() {
    const flat = {};
    const texts = window.siteContentOverrides?.texts || {};
    Object.values(texts).forEach((pageTexts) => {
      Object.entries(pageTexts).forEach(([key, value]) => {
        if (value) flat[key] = value;
      });
    });
    return flat;
  }

  function applyTextOverrides() {
    const overrides = getTextOverridesFlat();
    if (!Object.keys(overrides).length) return;

    if (window.translations?.tr) {
      Object.assign(window.translations.tr, overrides);
    }
    if (window.translations?.en) {
      Object.assign(window.translations.en, overrides);
    }

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (overrides[key]) el.textContent = overrides[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (overrides[key]) el.setAttribute('placeholder', overrides[key]);
    });

    const emailEl = document.querySelector('[data-contact="email"]');
    const phoneEl = document.querySelector('[data-contact="phone"]');
    const addressEl = document.querySelector('[data-contact="address"]');
    if (overrides.contactEmail && emailEl) {
      emailEl.textContent = overrides.contactEmail;
      if (emailEl.tagName === 'A') emailEl.href = `mailto:${overrides.contactEmail}`;
    }
    if (overrides.contactPhone && phoneEl) {
      phoneEl.textContent = overrides.contactPhone;
      if (phoneEl.tagName === 'A') {
        const digits = overrides.contactPhone.replace(/\D/g, '');
        phoneEl.href = `https://wa.me/${digits}`;
      }
    }
    if (overrides.contactAddress && addressEl) addressEl.textContent = overrides.contactAddress;
  }

  function applyHeroBackground(selector, url, gradient) {
    const el = document.querySelector(selector);
    if (!el || !url) return;
    el.style.backgroundImage = `${gradient}, url("${url}")`;
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
  }

  function applyImageOverrides() {
    const page = document.body.dataset.page;
    const pageId = PAGE_ID_MAP[page];
    if (!pageId) return;

    const images = {
      ...(DEFAULT_IMAGES[pageId] || {}),
      ...(window.siteContentOverrides?.images?.[pageId] || {})
    };

    const heroSelector = PAGE_HERO_SELECTORS[page];
    if (heroSelector && images.heroBackground) {
      const gradients = {
        home: 'linear-gradient(135deg, rgba(15, 14, 12, 0.88) 0%, rgba(15, 14, 12, 0.55) 50%, rgba(15, 14, 12, 0.25) 100%)',
        services: 'linear-gradient(135deg, rgba(15, 14, 12, 0.9), rgba(15, 14, 12, 0.5))',
        portfolio: 'linear-gradient(135deg, rgba(15, 14, 12, 0.9), rgba(15, 14, 12, 0.45))',
        contact: 'linear-gradient(135deg, rgba(15, 14, 12, 0.92), rgba(11, 30, 54, 0.2))',
        ai: 'linear-gradient(135deg, rgba(15, 14, 12, 0.92), rgba(11, 30, 54, 0.3))',
        insurance: 'linear-gradient(90deg, rgba(11, 30, 54, 0.92), rgba(11, 30, 54, 0.65))'
      };
      applyHeroBackground(heroSelector, images.heroBackground, gradients[page] || gradients.home);
    }

    if (pageId === 'index' && images.experienceBackground) {
      applyHeroBackground(
        '.experience-band',
        images.experienceBackground,
        'linear-gradient(90deg, rgba(11, 30, 54, 0.95), rgba(11, 30, 54, 0.75))'
      );
    }

    if (pageId === 'portfolio') {
      const beforeImg = document.querySelector('.compare-image.before img');
      const afterImg = document.querySelector('.compare-image.after img');
      if (beforeImg && images.compareBefore) beforeImg.src = images.compareBefore;
      if (afterImg && images.compareAfter) afterImg.src = images.compareAfter;
    }
  }

  function renderProjects() {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;

    const overrides = window.siteContentOverrides;
    const dataProjects = overrides?.projects;
    const projects =
      Array.isArray(dataProjects) && dataProjects.length ? dataProjects : overrides ? [] : DEFAULT_PROJECTS;
    const sorted = [...projects].sort((a, b) => (Number(a.order) || 0) - (Number(b.order) || 0));

    if (!sorted.length) {
      grid.innerHTML = '<p class="empty-projects">Henüz proje eklenmedi.</p>';
      return;
    }

    grid.innerHTML = sorted
      .map(
        (project) => `
      <article class="project-card" data-order="${project.order}">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
        <div>
          <span>${project.type}</span>
          <h2>${project.title}</h2>
          <p>${project.description}</p>
        </div>
      </article>
    `
      )
      .join('');
  }

  window.initSiteContent = async function initSiteContent() {
    await loadSiteContent();
    applyTextOverrides();
    applyImageOverrides();
    renderProjects();
  };

})();
