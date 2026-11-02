/**
 * Nagrik Sewa — Main Application Logic
 * नागरिक सेवा — मुख्य अनुप्रयोग तर्क
 */

'use strict';

// ─── Language Strings ────────────────────────────────────────────────────────

const STRINGS = {
  en: {
    heroTitle: 'Your Government Services, Digitally.',
    heroSub: 'Apply for certificates, track applications, and access public services — anytime, anywhere.',
    searchPlaceholder: 'Search for a service (e.g. Citizenship, Passport)…',
    searchBtn: 'Search',
    popularServices: 'Popular Services',
    announcements: 'Announcements',
    viewAll: 'View All',
    services: ['Citizenship', 'Passport', 'Land Records', 'Tax / Revenue', 'Health', 'Education'],
    serviceDescs: [
      'Apply for or renew your citizenship certificate',
      'New passport & renewal applications',
      'Land ownership certificates & surveys',
      'Tax registration, filing & clearance',
      'Health registrations & public health schemes',
      'Scholarship & academic certificate verification',
    ],
    navHome: 'Home',
    navCatalog: 'Services',
    navApply: 'Apply',
    navStatus: 'Track Status',
    navComponents: 'Components',
    loginBtn: 'Login / Register',
    formTitle: 'Citizenship Certificate Application',
    steps: ['Personal Info', 'Family Details', 'Documents', 'Review'],
    nextBtn: 'Next →',
    prevBtn: '← Back',
    saveBtn: 'Save Draft',
    submitBtn: 'Submit Application',
    trackTitle: 'Track Your Application',
    trackLabel: 'Application ID or NID Number',
    trackBtn: 'Track',
    trackPlaceholder: 'e.g. APP-2024-001234 or 12-34-56-78901',
    statusLabels: ['Submitted', 'Under Review', 'Verification', 'Approved'],
    downloadBtn: 'Download Certificate',
    componentTitle: 'Component Library',
    required: 'required',
    errorRequired: 'This field is required.',
    errorFormat: 'Please enter a valid format.',
    savedDraft: '✓ Draft saved successfully.',
  },
  np: {
    heroTitle: 'सरकारी सेवाहरू, डिजिटल रूपमा।',
    heroSub: 'प्रमाणपत्रका लागि आवेदन दिनुस्, स्थिति ट्र्याक गर्नुस् — जुनसुकै बेला, जहाँबाट पनि।',
    searchPlaceholder: 'सेवा खोज्नुस् (जस्तै नागरिकता, राहदानी)…',
    searchBtn: 'खोज्नुस्',
    popularServices: 'लोकप्रिय सेवाहरू',
    announcements: 'सूचनाहरू',
    viewAll: 'सबै हेर्नुस्',
    services: ['नागरिकता', 'राहदानी', 'जग्गा दर्ता', 'कर / राजस्व', 'स्वास्थ्य', 'शिक्षा'],
    serviceDescs: [
      'नागरिकता प्रमाणपत्रका लागि आवेदन दिनुस् वा नवीकरण गर्नुस्',
      'नयाँ राहदानी र नवीकरण आवेदन',
      'जग्गा स्वामित्व प्रमाणपत्र र सर्वेक्षण',
      'कर दर्ता, दाखिला र छुट',
      'स्वास्थ्य दर्ता र सार्वजनिक स्वास्थ्य योजनाहरू',
      'छात्रवृत्ति र शैक्षिक प्रमाणपत्र प्रमाणीकरण',
    ],
    navHome: 'गृहपृष्ठ',
    navCatalog: 'सेवाहरू',
    navApply: 'आवेदन',
    navStatus: 'स्थिति ट्र्याक',
    navComponents: 'कम्पोनेन्ट',
    loginBtn: 'लगिन / दर्ता',
    formTitle: 'नागरिकता प्रमाणपत्र आवेदन',
    steps: ['व्यक्तिगत विवरण', 'पारिवारिक विवरण', 'कागजातहरू', 'समीक्षा'],
    nextBtn: 'अर्को →',
    prevBtn: '← पछाडि',
    saveBtn: 'मस्यौदा सुरक्षित',
    submitBtn: 'आवेदन पेश गर्नुस्',
    trackTitle: 'आवेदन ट्र्याक गर्नुस्',
    trackLabel: 'आवेदन आईडी वा राष्ट्रिय परिचयपत्र नम्बर',
    trackBtn: 'ट्र्याक गर्नुस्',
    trackPlaceholder: 'जस्तै APP-2024-001234 वा १२-३४-५६-७८९०१',
    statusLabels: ['पेश गरियो', 'समीक्षाधीन', 'प्रमाणीकरण', 'स्वीकृत'],
    downloadBtn: 'प्रमाणपत्र डाउनलोड',
    componentTitle: 'कम्पोनेन्ट लाइब्रेरी',
    required: 'आवश्यक',
    errorRequired: 'यो फिल्ड आवश्यक छ।',
    errorFormat: 'कृपया मान्य ढाँचा प्रविष्ट गर्नुस्।',
    savedDraft: '✓ मस्यौदा सफलतापूर्वक सुरक्षित भयो।',
  },
};

// ─── App State ────────────────────────────────────────────────────────────────

const state = {
  lang: localStorage.getItem('ns_lang') || 'en',
  fontSize: parseInt(localStorage.getItem('ns_fontSize') || '16'),
  highContrast: localStorage.getItem('ns_hc') === 'true',
  currentPage: 'home',
  formStep: 1,
  formData: JSON.parse(localStorage.getItem('ns_draft') || '{}'),
};

const t = () => STRINGS[state.lang];

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  applySettings();
  bindNav();
  bindAccessibility();
  renderPage('home');
  bindSearchOnHome();
});

function applySettings() {
  document.documentElement.style.fontSize = state.fontSize + 'px';
  document.body.classList.toggle('high-contrast', state.highContrast);
  document.documentElement.lang = state.lang === 'np' ? 'ne' : 'en';
  const hcBtn = document.getElementById('hc-toggle');
  if (hcBtn) hcBtn.setAttribute('aria-pressed', String(state.highContrast));
}

// ─── Navigation ───────────────────────────────────────────────────────────────

function bindNav() {
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(el.dataset.page);
    });
  });
}

function navigateTo(page) {
  state.currentPage = page;
  state.formStep = 1;
  renderPage(page);
  // update active nav
  document.querySelectorAll('[data-page]').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
    el.setAttribute('aria-current', el.dataset.page === page ? 'page' : 'false');
  });
  // scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── Page Renderer ────────────────────────────────────────────────────────────

function renderPage(page) {
  const main = document.getElementById('main-content');
  updateNavLabels();

  const pages = {
    home: renderHome,
    catalog: renderCatalog,
    apply: renderApply,
    status: renderStatus,
    components: renderComponents,
  };

  main.innerHTML = '';
  (pages[page] || renderHome)();
  bindNav(); // re-bind any newly rendered [data-page] elements
  // announce page change to screen readers
  const liveRegion = document.getElementById('sr-live');
  if (liveRegion) liveRegion.textContent = `Navigated to ${page} page`;
}

function updateNavLabels() {
  const s = t();
  const map = { home: s.navHome, catalog: s.navCatalog, apply: s.navApply, status: s.navStatus, components: s.navComponents };
  Object.entries(map).forEach(([page, label]) => {
    document.querySelectorAll(`[data-page="${page}"]`).forEach(el => { el.textContent = label; });
  });
  const loginBtn = document.getElementById('login-btn');
  if (loginBtn) loginBtn.textContent = s.loginBtn;
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────

function renderHome() {
  const s = t();
  const icons = ['👤', '📘', '🏡', '💼', '🏥', '🎓'];
  const ministerTags = ['Home Ministry', 'Foreign Affairs', 'Land Management', 'Revenue', 'Health Ministry', 'Education Ministry'];
  const times = ['3–5 days', '7–14 days', '5–7 days', '1–3 days', '2–4 days', '3–7 days'];

  const main = document.getElementById('main-content');
  main.innerHTML = `
    <!-- Hero -->
    <section class="hero" aria-labelledby="hero-title">
      <div class="container">
        <div class="hero__content">
          <span class="hero__badge">🇳🇵 सरकारी पोर्टल · Government of Nepal</span>
          <h1 id="hero-title" class="hero__title">${s.heroTitle}</h1>
          <p class="hero__sub">${s.heroSub}</p>
          <form class="hero__search" role="search" aria-label="Search services" onsubmit="handleSearch(event)">
            <label for="search-input" class="sr-only">Search government services</label>
            <input
              id="search-input"
              class="search-input"
              type="search"
              placeholder="${s.searchPlaceholder}"
              aria-label="${s.searchPlaceholder}"
              autocomplete="off"
            />
            <button type="submit" class="btn btn--primary search-btn" aria-label="${s.searchBtn}">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <span>${s.searchBtn}</span>
            </button>
          </form>
        </div>
        <div class="hero__illustration" aria-hidden="true">
          <svg width="220" height="180" viewBox="0 0 220 180">
            <rect x="20" y="40" width="180" height="120" rx="8" fill="#f8f0f0" stroke="#8B0000" stroke-width="2"/>
            <rect x="40" y="60" width="60" height="8" rx="4" fill="#8B0000" opacity=".6"/>
            <rect x="40" y="76" width="100" height="6" rx="3" fill="#ccc"/>
            <rect x="40" y="90" width="80" height="6" rx="3" fill="#ccc"/>
            <rect x="40" y="110" width="50" height="20" rx="4" fill="#8B0000"/>
            <rect x="100" y="110" width="50" height="20" rx="4" fill="#D4A017"/>
            <circle cx="170" cy="40" r="18" fill="#8B0000"/>
            <text x="162" y="46" font-size="14" fill="white">🇳🇵</text>
          </svg>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <div class="stats-bar" role="region" aria-label="Portal statistics">
      <div class="container stats-bar__inner">
        <div class="stat-item"><strong>1,24,500+</strong><span>Applications This Month</span></div>
        <div class="stat-item"><strong>38</strong><span>Government Services</span></div>
        <div class="stat-item"><strong>77</strong><span>Districts Covered</span></div>
        <div class="stat-item"><strong>98.2%</strong><span>Uptime</span></div>
      </div>
    </div>

    <!-- Service Cards -->
    <section class="services-section" aria-labelledby="services-heading">
      <div class="container">
        <div class="section-header">
          <h2 id="services-heading" class="section-title">${s.popularServices}</h2>
          <a href="#" class="link-action" data-page="catalog" role="button">${s.viewAll} →</a>
        </div>
        <div class="services-grid" role="list">
          ${s.services.map((svc, i) => `
            <article class="service-card" role="listitem" tabindex="0"
              aria-label="${svc} service"
              onclick="navigateTo('apply')"
              onkeydown="if(event.key==='Enter'||event.key===' ')navigateTo('apply')">
              <div class="service-card__icon" aria-hidden="true">${icons[i]}</div>
              <h3 class="service-card__title">${svc}</h3>
              <p class="service-card__desc">${s.serviceDescs[i]}</p>
              <div class="service-card__meta">
                <span class="badge badge--neutral">${ministerTags[i]}</span>
                <span class="service-card__time">⏱ ${times[i]}</span>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Announcements -->
    <section class="announcements-section" aria-labelledby="ann-heading">
      <div class="container">
        <div class="section-header">
          <h2 id="ann-heading" class="section-title">${s.announcements}</h2>
          <a href="#" class="link-action">सबै हेर्नुस् / View All →</a>
        </div>
        <div class="announcements-list">
          ${[
            { date: '2081-07-15', title: 'New digital citizenship process effective from Marg 1, 2081', tag: 'Important' },
            { date: '2081-07-10', title: 'Passport renewal fee revised — Check updated schedule', tag: 'Notice' },
            { date: '2081-07-05', title: 'System maintenance scheduled Sunday 2:00–4:00 AM', tag: 'Maintenance' },
            { date: '2081-06-28', title: 'Land records digitisation complete for Bagmati Province', tag: 'Update' },
          ].map(a => `
            <div class="announcement-item" role="article">
              <div class="announcement-item__left">
                <span class="badge badge--${a.tag === 'Important' ? 'danger' : a.tag === 'Maintenance' ? 'warning' : 'info'}">${a.tag}</span>
                <span class="announcement-item__date">${a.date}</span>
              </div>
              <p class="announcement-item__title">${a.title}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
  bindNav();
}

function bindSearchOnHome() {
  document.addEventListener('submit', e => {
    if (e.target.closest('.hero__search')) {
      e.preventDefault();
      navigateTo('catalog');
    }
  });
}

function handleSearch(e) {
  e.preventDefault();
  navigateTo('catalog');
}

// ─── CATALOG PAGE ─────────────────────────────────────────────────────────────

function renderCatalog() {
  const s = t();
  const allServices = [
    { icon: '👤', name: 'Citizenship Certificate', np: 'नागरिकता प्रमाणपत्र', ministry: 'Home Ministry', time: '3–5 days', docs: 3, tag: 'identity' },
    { icon: '📘', name: 'Passport (New)', np: 'राहदानी (नयाँ)', ministry: 'Foreign Affairs', time: '7–14 days', docs: 5, tag: 'travel' },
    { icon: '📘', name: 'Passport Renewal', np: 'राहदानी नवीकरण', ministry: 'Foreign Affairs', time: '5–10 days', docs: 3, tag: 'travel' },
    { icon: '🏡', name: 'Land Ownership Certificate', np: 'जग्गा स्वामित्व प्रमाणपत्र', ministry: 'Land Management', time: '5–7 days', docs: 6, tag: 'land' },
    { icon: '🏡', name: 'Land Survey Request', np: 'जग्गा सर्वेक्षण अनुरोध', ministry: 'Land Management', time: '14–30 days', docs: 4, tag: 'land' },
    { icon: '💼', name: 'Tax Registration (PAN)', np: 'कर दर्ता (स्थायी लेखा नम्बर)', ministry: 'Revenue Department', time: '1–3 days', docs: 2, tag: 'tax' },
    { icon: '💼', name: 'Income Tax Filing', np: 'आयकर दाखिला', ministry: 'Revenue Department', time: 'Same Day', docs: 3, tag: 'tax' },
    { icon: '🏥', name: 'Health Insurance Registration', np: 'स्वास्थ्य बिमा दर्ता', ministry: 'Health Ministry', time: '2–4 days', docs: 3, tag: 'health' },
    { icon: '🎓', name: 'Scholarship Application', np: 'छात्रवृत्ति आवेदन', ministry: 'Education Ministry', time: '3–7 days', docs: 5, tag: 'education' },
    { icon: '🎓', name: 'Certificate Equivalence', np: 'प्रमाणपत्र समकक्षता', ministry: 'Education Ministry', time: '7–14 days', docs: 4, tag: 'education' },
    { icon: '🚗', name: 'Vehicle Registration', np: 'सवारी साधन दर्ता', ministry: 'Transport Management', time: '3–5 days', docs: 4, tag: 'transport' },
    { icon: '🏢', name: 'Business Registration', np: 'व्यवसाय दर्ता', ministry: 'Commerce Ministry', time: '5–7 days', docs: 5, tag: 'business' },
  ];

  const filters = [
    { key: 'all', label: 'All Services / सबै सेवा' },
    { key: 'identity', label: 'Identity' },
    { key: 'travel', label: 'Travel' },
    { key: 'land', label: 'Land' },
    { key: 'tax', label: 'Tax' },
    { key: 'health', label: 'Health' },
    { key: 'education', label: 'Education' },
    { key: 'transport', label: 'Transport' },
    { key: 'business', label: 'Business' },
  ];

  const main = document.getElementById('main-content');
  main.innerHTML = `
    <section class="page-section catalog-section" aria-labelledby="catalog-heading">
      <div class="container">
        <h1 id="catalog-heading" class="page-title">Service Catalog <span class="np-text">· सेवा सूची</span></h1>
        <p class="page-subtitle">Browse all available government services. Click to start your application.</p>

        <!-- Filter Tabs -->
        <div class="filter-tabs" role="tablist" aria-label="Filter services by category">
          ${filters.map((f, i) => `
            <button
              class="filter-tab${i === 0 ? ' filter-tab--active' : ''}"
              role="tab"
              aria-selected="${i === 0}"
              data-filter="${f.key}"
              onclick="filterCatalog('${f.key}', this)"
            >${f.label}</button>
          `).join('')}
        </div>

        <!-- Service Grid -->
        <div class="catalog-grid" id="catalog-grid" role="list" aria-live="polite" aria-label="Filtered service list">
          ${allServices.map(svc => `
            <article class="catalog-card" role="listitem" data-tag="${svc.tag}" tabindex="0"
              onclick="navigateTo('apply')"
              onkeydown="if(event.key==='Enter'||event.key===' ')navigateTo('apply')"
              aria-label="${svc.name} — ${svc.ministry}">
              <div class="catalog-card__header">
                <span class="catalog-card__icon" aria-hidden="true">${svc.icon}</span>
                <span class="badge badge--primary">${svc.ministry}</span>
              </div>
              <h3 class="catalog-card__title">${svc.name}</h3>
              <p class="catalog-card__np">${svc.np}</p>
              <div class="catalog-card__footer">
                <span class="catalog-meta"><svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${svc.time}</span>
                <span class="catalog-meta"><svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> ${svc.docs} documents</span>
              </div>
              <button class="btn btn--primary btn--sm catalog-card__cta" tabindex="-1" aria-hidden="true">Apply Now</button>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function filterCatalog(tag, btn) {
  // Update active tab
  document.querySelectorAll('.filter-tab').forEach(t => {
    t.classList.remove('filter-tab--active');
    t.setAttribute('aria-selected', 'false');
  });
  btn.classList.add('filter-tab--active');
  btn.setAttribute('aria-selected', 'true');

  // Filter cards
  document.querySelectorAll('.catalog-card').forEach(card => {
    const show = tag === 'all' || card.dataset.tag === tag;
    card.style.display = show ? '' : 'none';
  });
}

// ─── APPLICATION FORM ─────────────────────────────────────────────────────────

function renderApply() {
  const s = t();
  const main = document.getElementById('main-content');

  main.innerHTML = `
    <section class="page-section apply-section" aria-labelledby="apply-heading">
      <div class="container container--narrow">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="#" data-page="home" class="breadcrumb__link">Home</a>
          <span aria-hidden="true"> › </span>
          <a href="#" data-page="catalog" class="breadcrumb__link">Services</a>
          <span aria-hidden="true"> › </span>
          <span class="breadcrumb__current" aria-current="page">Citizenship Certificate</span>
        </nav>
        <h1 id="apply-heading" class="page-title">${s.formTitle}</h1>

        <!-- Step Progress -->
        <div class="step-progress" role="list" aria-label="Application steps">
          ${s.steps.map((step, i) => `
            <div class="step-item ${i + 1 === state.formStep ? 'step-item--active' : i + 1 < state.formStep ? 'step-item--done' : ''}"
              role="listitem" aria-label="Step ${i + 1}: ${step}${i + 1 === state.formStep ? ' — current' : i + 1 < state.formStep ? ' — completed' : ''}">
              <div class="step-item__circle" aria-hidden="true">
                ${i + 1 < state.formStep ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>' : i + 1}
              </div>
              <span class="step-item__label">${step}</span>
            </div>
            ${i < s.steps.length - 1 ? '<div class="step-connector" aria-hidden="true"></div>' : ''}
          `).join('')}
        </div>

        <!-- Form Body -->
        <div class="form-card" id="form-card">
          ${renderFormStep(state.formStep)}
        </div>

        <!-- Draft saved toast -->
        <div id="draft-toast" class="toast" role="status" aria-live="polite" aria-atomic="true"></div>
      </div>
    </section>
  `;
  bindNav();
  bindFormActions();
}

function renderFormStep(step) {
  const s = t();
  const saved = state.formData;

  const steps = [
    // Step 1: Personal Info
    `<h2 class="form-step-title">Step 1: Personal Information <span class="np-text">/ व्यक्तिगत विवरण</span></h2>
    <div class="form-grid">
      <div class="form-group form-group--full">
        <label class="form-label" for="full-name">Full Name (नाम थर) <span class="form-required" aria-label="${s.required}">*</span></label>
        <input class="form-input" id="full-name" name="full-name" type="text" autocomplete="name"
          placeholder="As per citizenship document / नागरिकता अनुसार"
          value="${saved['full-name'] || ''}" aria-required="true" aria-describedby="full-name-hint full-name-error"/>
        <p class="form-hint" id="full-name-hint">Enter your full name exactly as it appears on your citizenship certificate.</p>
        <p class="form-error" id="full-name-error" role="alert" aria-live="assertive"></p>
      </div>
      <div class="form-group">
        <label class="form-label" for="dob">Date of Birth <span class="np-text">(जन्म मिति)</span> <span class="form-required" aria-label="${s.required}">*</span></label>
        <input class="form-input" id="dob" name="dob" type="date" autocomplete="bday"
          value="${saved['dob'] || ''}" aria-required="true" aria-describedby="dob-error"/>
        <p class="form-error" id="dob-error" role="alert" aria-live="assertive"></p>
      </div>
      <div class="form-group">
        <label class="form-label" for="gender">Gender <span class="np-text">(लिङ्ग)</span> <span class="form-required" aria-label="${s.required}">*</span></label>
        <select class="form-select" id="gender" name="gender" aria-required="true" aria-describedby="gender-error">
          <option value="" disabled ${!saved['gender'] ? 'selected' : ''}>Select / छान्नुस्…</option>
          <option value="male" ${saved['gender'] === 'male' ? 'selected' : ''}>Male / पुरुष</option>
          <option value="female" ${saved['gender'] === 'female' ? 'selected' : ''}>Female / महिला</option>
          <option value="other" ${saved['gender'] === 'other' ? 'selected' : ''}>Other / अन्य</option>
        </select>
        <p class="form-error" id="gender-error" role="alert" aria-live="assertive"></p>
      </div>
      <div class="form-group">
        <label class="form-label" for="phone">Mobile Number <span class="np-text">(मोबाइल नम्बर)</span> <span class="form-required" aria-label="${s.required}">*</span></label>
        <input class="form-input" id="phone" name="phone" type="tel" autocomplete="tel"
          placeholder="98XXXXXXXX" value="${saved['phone'] || ''}" aria-required="true" aria-describedby="phone-hint phone-error"/>
        <p class="form-hint" id="phone-hint">Nepal mobile number (10 digits starting with 98)</p>
        <p class="form-error" id="phone-error" role="alert" aria-live="assertive"></p>
      </div>
      <div class="form-group form-group--full">
        <label class="form-label" for="address">Permanent Address <span class="np-text">(स्थायी ठेगाना)</span> <span class="form-required" aria-label="${s.required}">*</span></label>
        <input class="form-input" id="address" name="address" type="text"
          placeholder="Ward No., Municipality/VDC, District, Province"
          value="${saved['address'] || ''}" aria-required="true" aria-describedby="address-error"/>
        <p class="form-error" id="address-error" role="alert" aria-live="assertive"></p>
      </div>
      <div class="form-group">
        <label class="form-label" for="district">District <span class="np-text">(जिल्ला)</span> <span class="form-required" aria-label="${s.required}">*</span></label>
        <select class="form-select" id="district" name="district" aria-required="true">
          <option value="" disabled ${!saved['district'] ? 'selected' : ''}>Select District…</option>
          ${['Kathmandu','Lalitpur','Bhaktapur','Kavre','Sindhupalchok','Nuwakot','Dhading','Makwanpur','Chitwan','Pokhara'].map(d =>
            `<option value="${d}" ${saved['district'] === d ? 'selected' : ''}>${d}</option>`
          ).join('')}
        </select>
      </div>
    </div>`,

    // Step 2: Family Details
    `<h2 class="form-step-title">Step 2: Family Details <span class="np-text">/ पारिवारिक विवरण</span></h2>
    <div class="form-grid">
      <div class="form-group">
        <label class="form-label" for="father-name">Father's Name <span class="np-text">(बाबुको नाम)</span> <span class="form-required">*</span></label>
        <input class="form-input" id="father-name" name="father-name" type="text"
          value="${saved['father-name'] || ''}" placeholder="Full name" aria-required="true" aria-describedby="father-name-error"/>
        <p class="form-error" id="father-name-error" role="alert" aria-live="assertive"></p>
      </div>
      <div class="form-group">
        <label class="form-label" for="mother-name">Mother's Name <span class="np-text">(आमाको नाम)</span> <span class="form-required">*</span></label>
        <input class="form-input" id="mother-name" name="mother-name" type="text"
          value="${saved['mother-name'] || ''}" placeholder="Full name" aria-required="true" aria-describedby="mother-name-error"/>
        <p class="form-error" id="mother-name-error" role="alert" aria-live="assertive"></p>
      </div>
      <div class="form-group">
        <label class="form-label" for="grandfather-name">Grandfather's Name <span class="np-text">(हजुरबाको नाम)</span> <span class="form-required">*</span></label>
        <input class="form-input" id="grandfather-name" name="grandfather-name" type="text"
          value="${saved['grandfather-name'] || ''}" placeholder="Full name" aria-required="true" aria-describedby="grandfather-name-error"/>
        <p class="form-error" id="grandfather-name-error" role="alert" aria-live="assertive"></p>
      </div>
      <div class="form-group">
        <label class="form-label" for="marital-status">Marital Status <span class="np-text">(वैवाहिक स्थिति)</span> <span class="form-required">*</span></label>
        <select class="form-select" id="marital-status" name="marital-status" aria-required="true">
          <option value="" disabled ${!saved['marital-status'] ? 'selected' : ''}>Select…</option>
          <option value="single" ${saved['marital-status']==='single'?'selected':''}>Single / अविवाहित</option>
          <option value="married" ${saved['marital-status']==='married'?'selected':''}>Married / विवाहित</option>
          <option value="widowed" ${saved['marital-status']==='widowed'?'selected':''}>Widowed / विधुर/विधवा</option>
          <option value="divorced" ${saved['marital-status']==='divorced'?'selected':''}>Divorced / सम्बन्धविच्छेद</option>
        </select>
      </div>
      <div class="form-group form-group--full">
        <label class="form-label" for="spouse-name">Spouse's Name <span class="np-text">(पति/पत्नीको नाम)</span> <span class="form-hint-inline">(if married)</span></label>
        <input class="form-input" id="spouse-name" name="spouse-name" type="text"
          value="${saved['spouse-name'] || ''}" placeholder="Full name (if applicable)"/>
      </div>
    </div>`,

    // Step 3: Document Upload
    `<h2 class="form-step-title">Step 3: Document Upload <span class="np-text">/ कागजातहरू</span></h2>
    <div class="upload-section">
      <div class="alert alert--info" role="note">
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <div>
          <strong>Accepted formats:</strong> PDF, JPG, PNG — Max 5MB per file<br>
          <span class="np-text">स्वीकार्य ढाँचाहरू: PDF, JPG, PNG — प्रति फाइल अधिकतम ५ MB</span>
        </div>
      </div>

      ${[
        { id: 'birth-cert', label: 'Birth Certificate', np: 'जन्मदर्ता प्रमाणपत्र', req: true },
        { id: 'parent-citizenship', label: "Parent's Citizenship Copy", np: 'अभिभावकको नागरिकता प्रतिलिपि', req: true },
        { id: 'photo', label: 'Recent Passport-size Photo', np: 'हालसालैको पासपोर्ट साइज फोटो', req: true },
        { id: 'relationship-proof', label: 'Relationship Proof (if applicable)', np: 'नाता प्रमाण (आवश्यक भएमा)', req: false },
      ].map(doc => `
        <div class="upload-group">
          <label class="form-label" for="${doc.id}">
            ${doc.label} <span class="np-text">/ ${doc.np}</span>
            ${doc.req ? '<span class="form-required" aria-label="required">*</span>' : ''}
          </label>
          <div class="upload-drop-zone" id="${doc.id}-zone"
            onclick="document.getElementById('${doc.id}-input').click()"
            onkeydown="if(event.key==='Enter'||event.key===' '){document.getElementById('${doc.id}-input').click()}"
            ondragover="handleDragOver(event, '${doc.id}-zone')"
            ondragleave="handleDragLeave('${doc.id}-zone')"
            ondrop="handleDrop(event, '${doc.id}-zone', '${doc.id}-status')"
            tabindex="0" role="button" aria-label="Upload ${doc.label}. Click or drag and drop.">
            <div class="upload-drop-zone__inner" id="${doc.id}-status">
              <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              <p>Click to upload or drag & drop</p>
              <p class="upload-drop-zone__hint">PDF, JPG, PNG up to 5MB</p>
            </div>
          </div>
          <input type="file" id="${doc.id}-input" accept=".pdf,.jpg,.jpeg,.png" class="sr-only"
            aria-label="Upload ${doc.label}"
            onchange="handleFileSelect(this, '${doc.id}-status')"/>
        </div>
      `).join('')}
    </div>`,

    // Step 4: Review
    `<h2 class="form-step-title">Step 4: Review & Submit <span class="np-text">/ समीक्षा र पेश</span></h2>
    <div class="review-section">
      <div class="alert alert--warning" role="note">
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <div>Please review all information carefully. Incorrect details may cause delays.<br>
        <span class="np-text">सबै जानकारी ध्यानपूर्वक समीक्षा गर्नुस्।</span></div>
      </div>

      <div class="review-group">
        <h3 class="review-group__title">Personal Information <span class="np-text">/ व्यक्तिगत विवरण</span></h3>
        ${reviewRow('Full Name', state.formData['full-name'] || '—')}
        ${reviewRow('Date of Birth', state.formData['dob'] || '—')}
        ${reviewRow('Gender', state.formData['gender'] || '—')}
        ${reviewRow('Mobile Number', state.formData['phone'] || '—')}
        ${reviewRow('Address', state.formData['address'] || '—')}
        ${reviewRow('District', state.formData['district'] || '—')}
      </div>
      <div class="review-group">
        <h3 class="review-group__title">Family Details <span class="np-text">/ पारिवारिक विवरण</span></h3>
        ${reviewRow("Father's Name", state.formData['father-name'] || '—')}
        ${reviewRow("Mother's Name", state.formData['mother-name'] || '—')}
        ${reviewRow("Grandfather's Name", state.formData['grandfather-name'] || '—')}
        ${reviewRow('Marital Status', state.formData['marital-status'] || '—')}
      </div>

      <div class="form-group form-group--full">
        <label class="form-label checkbox-label" for="declaration">
          <input type="checkbox" id="declaration" name="declaration" aria-required="true"/>
          <span>I declare that all information provided is true and correct to the best of my knowledge.
          <span class="np-text">/ मैले प्रदान गरेका सबै जानकारीहरू मेरो ज्ञानका आधारमा सत्य र सही छन् भनी घोषणा गर्दछु।</span></span>
        </label>
        <p class="form-error" id="declaration-error" role="alert" aria-live="assertive"></p>
      </div>
    </div>`,
  ];

  const formActions = `
    <div class="form-actions">
      ${state.formStep > 1 ? `<button type="button" class="btn btn--secondary" id="prev-btn" onclick="formPrev()">${s.prevBtn}</button>` : '<div></div>'}
      <div class="form-actions__right">
        <button type="button" class="btn btn--ghost" id="save-btn" onclick="saveDraft()">${s.saveBtn}</button>
        ${state.formStep < 4
          ? `<button type="button" class="btn btn--primary" id="next-btn" onclick="formNext()">${s.nextBtn}</button>`
          : `<button type="button" class="btn btn--primary" id="submit-btn" onclick="submitForm()">${s.submitBtn}</button>`}
      </div>
    </div>
  `;

  return steps[step - 1] + formActions;
}

function reviewRow(label, value) {
  return `<div class="review-row"><span class="review-row__label">${label}</span><span class="review-row__value">${value}</span></div>`;
}

function bindFormActions() {
  // Save form data on input change
  document.getElementById('form-card')?.addEventListener('input', e => {
    if (e.target.name) {
      state.formData[e.target.name] = e.target.value;
    }
  });
}

function formNext() {
  if (validateStep(state.formStep)) {
    state.formStep++;
    document.getElementById('form-card').innerHTML = renderFormStep(state.formStep);
    bindFormActions();
    updateStepProgress();
    document.getElementById('form-card').scrollIntoView({ behavior: 'smooth' });
  }
}

function formPrev() {
  state.formStep = Math.max(1, state.formStep - 1);
  document.getElementById('form-card').innerHTML = renderFormStep(state.formStep);
  bindFormActions();
  updateStepProgress();
}

function updateStepProgress() {
  const s = t();
  document.querySelectorAll('.step-item').forEach((el, i) => {
    el.className = `step-item ${i + 1 === state.formStep ? 'step-item--active' : i + 1 < state.formStep ? 'step-item--done' : ''}`;
  });
}

function validateStep(step) {
  const required = {
    1: ['full-name', 'dob', 'gender', 'phone', 'address'],
    2: ['father-name', 'mother-name', 'grandfather-name', 'marital-status'],
    3: [],
    4: [],
  };
  const s = t();
  let valid = true;

  (required[step] || []).forEach(name => {
    const input = document.querySelector(`[name="${name}"]`);
    const error = document.getElementById(`${name}-error`);
    if (!input) return;
    if (!input.value.trim()) {
      if (error) error.textContent = s.errorRequired + ' / यो फिल्ड आवश्यक छ।';
      input.classList.add('form-input--error');
      input.setAttribute('aria-invalid', 'true');
      if (valid) input.focus();
      valid = false;
    } else {
      if (error) error.textContent = '';
      input.classList.remove('form-input--error');
      input.removeAttribute('aria-invalid');
    }
  });

  if (step === 4) {
    const decl = document.getElementById('declaration');
    const declErr = document.getElementById('declaration-error');
    if (decl && !decl.checked) {
      if (declErr) declErr.textContent = 'Please accept the declaration to submit. / घोषणा स्वीकार गर्नुस्।';
      decl.focus();
      valid = false;
    }
  }

  return valid;
}

function saveDraft() {
  localStorage.setItem('ns_draft', JSON.stringify(state.formData));
  const toast = document.getElementById('draft-toast');
  if (toast) {
    toast.textContent = t().savedDraft;
    toast.classList.add('toast--visible');
    setTimeout(() => toast.classList.remove('toast--visible'), 3000);
  }
}

function submitForm() {
  if (!validateStep(4)) return;
  localStorage.removeItem('ns_draft');
  state.formData = {};
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <section class="page-section" style="text-align:center;padding:80px 20px">
      <div class="container container--narrow">
        <div class="success-icon" aria-hidden="true">✅</div>
        <h1 style="margin-top:24px">Application Submitted!</h1>
        <p class="page-subtitle">आवेदन सफलतापूर्वक पेश गरियो।</p>
        <div class="success-card">
          <p><strong>Application ID:</strong> APP-2081-${Math.floor(Math.random()*90000+10000)}</p>
          <p>You will receive an SMS confirmation on your registered mobile number within 24 hours.</p>
          <p class="np-text">तपाईंको दर्ता गरिएको मोबाइल नम्बरमा २४ घण्टाभित्र SMS पुष्टिकरण प्राप्त हुनेछ।</p>
        </div>
        <div style="display:flex;gap:12px;justify-content:center;margin-top:28px;flex-wrap:wrap">
          <button class="btn btn--primary" onclick="navigateTo('status')">Track Application</button>
          <button class="btn btn--secondary" onclick="navigateTo('home')">Back to Home</button>
        </div>
      </div>
    </section>
  `;
}

// ─── Document Upload Handlers ─────────────────────────────────────────────────

function handleDragOver(e, zoneId) {
  e.preventDefault();
  document.getElementById(zoneId)?.classList.add('upload-drop-zone--dragover');
}
function handleDragLeave(zoneId) {
  document.getElementById(zoneId)?.classList.remove('upload-drop-zone--dragover');
}
function handleDrop(e, zoneId, statusId) {
  e.preventDefault();
  handleDragLeave(zoneId);
  const file = e.dataTransfer?.files?.[0];
  if (file) showFileStatus(statusId, file.name);
}
function handleFileSelect(input, statusId) {
  const file = input.files?.[0];
  if (file) showFileStatus(statusId, file.name);
}
function showFileStatus(statusId, filename) {
  const el = document.getElementById(statusId);
  if (el) {
    el.innerHTML = `
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E7E34" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      <p style="color:#1E7E34;font-weight:600">${filename}</p>
      <p style="color:#666;font-size:0.8em">File selected. <button type="button" onclick="clearFile(this,'${statusId}')" style="color:#8B0000;background:none;border:none;cursor:pointer;text-decoration:underline;font-size:inherit">Remove</button></p>
    `;
  }
}
function clearFile(btn, statusId) {
  const el = document.getElementById(statusId);
  if (el) el.innerHTML = `
    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
    <p>Click to upload or drag & drop</p>
    <p class="upload-drop-zone__hint">PDF, JPG, PNG up to 5MB</p>
  `;
}

// ─── STATUS TRACKER ───────────────────────────────────────────────────────────

function renderStatus() {
  const s = t();
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <section class="page-section status-section" aria-labelledby="status-heading">
      <div class="container container--narrow">
        <h1 id="status-heading" class="page-title">${s.trackTitle} <span class="np-text">/ आवेदन ट्र्याकिङ</span></h1>
        <div class="track-form-card">
          <label class="form-label" for="track-input">${s.trackLabel}</label>
          <div class="track-input-row">
            <input class="form-input" id="track-input" type="text" placeholder="${s.trackPlaceholder}" aria-label="${s.trackLabel}"/>
            <button class="btn btn--primary" onclick="runTrack()">${s.trackBtn}</button>
          </div>
          <p class="form-hint">Try: <button class="link-btn" onclick="fillAndTrack('APP-2081-72438')">APP-2081-72438</button> for a demo result.</p>
        </div>
        <div id="track-result" aria-live="polite"></div>
      </div>
    </section>
  `;
}

function fillAndTrack(id) {
  const input = document.getElementById('track-input');
  if (input) { input.value = id; runTrack(); }
}

function runTrack() {
  const val = document.getElementById('track-input')?.value?.trim();
  const result = document.getElementById('track-result');
  if (!result) return;
  if (!val) {
    result.innerHTML = `<div class="alert alert--error" role="alert"><strong>Please enter an Application ID or NID number.</strong></div>`;
    return;
  }
  // Demo data
  const statuses = [
    { label: 'Submitted', np: 'पेश गरियो', date: '2081-07-01', done: true, note: 'Application received at Kathmandu District Office' },
    { label: 'Under Review', np: 'समीक्षाधीन', date: '2081-07-03', done: true, note: 'Documents verified by officer Ramesh Thapa' },
    { label: 'Verification', np: 'प्रमाणीकरण', date: '2081-07-06', done: false, active: true, note: 'Field verification in progress' },
    { label: 'Approved', np: 'स्वीकृत', date: '—', done: false, note: '' },
  ];
  result.innerHTML = `
    <div class="status-card">
      <div class="status-card__header">
        <div>
          <h2 class="status-card__id">Application #${val}</h2>
          <p class="status-card__type">Citizenship Certificate · नागरिकता प्रमाणपत्र</p>
        </div>
        <span class="badge badge--warning status-card__badge">In Progress</span>
      </div>
      <div class="status-timeline" role="list" aria-label="Application status timeline">
        ${statuses.map((st, i) => `
          <div class="timeline-item ${st.done ? 'timeline-item--done' : st.active ? 'timeline-item--active' : ''}" role="listitem">
            <div class="timeline-item__indicator" aria-hidden="true">
              ${st.done
                ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>'
                : st.active ? '<div class="timeline-dot-pulse"></div>' : '<div class="timeline-dot-empty"></div>'}
            </div>
            <div class="timeline-item__content">
              <div class="timeline-item__header">
                <strong>${st.label} / ${st.np}</strong>
                <span class="timeline-item__date">${st.date}</span>
              </div>
              ${st.note ? `<p class="timeline-item__note">${st.note}</p>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
      <div class="status-card__footer">
        <button class="btn btn--primary" disabled aria-disabled="true" title="Available once application is approved">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download Certificate (Pending Approval)
        </button>
        <p class="form-hint">Certificate download will be available once your application is approved.</p>
      </div>
    </div>
  `;
}

// ─── COMPONENT LIBRARY ────────────────────────────────────────────────────────

function renderComponents() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <section class="page-section components-section" aria-labelledby="comp-heading">
      <div class="container">
        <h1 id="comp-heading" class="page-title">Component Library <span class="np-text">/ कम्पोनेन्ट लाइब्रेरी</span></h1>
        <p class="page-subtitle">All reusable UI components used in Nagrik Sewa. Each component meets WCAG 2.1 AA standards.</p>

        <!-- Buttons -->
        <div class="comp-section">
          <h2 class="comp-section__title">Buttons</h2>
          <div class="comp-demo comp-demo--wrap">
            <button class="btn btn--primary">Primary Action</button>
            <button class="btn btn--secondary">Secondary</button>
            <button class="btn btn--ghost">Ghost Button</button>
            <button class="btn btn--danger">Danger Action</button>
            <button class="btn btn--primary" disabled aria-disabled="true">Disabled</button>
            <button class="btn btn--primary btn--sm">Small Button</button>
            <button class="btn btn--primary btn--lg">Large Button</button>
          </div>
        </div>

        <!-- Badges -->
        <div class="comp-section">
          <h2 class="comp-section__title">Badges & Status Labels</h2>
          <div class="comp-demo comp-demo--wrap">
            <span class="badge badge--primary">Ministry Tag</span>
            <span class="badge badge--success">Approved ✓</span>
            <span class="badge badge--warning">Pending</span>
            <span class="badge badge--danger">Rejected</span>
            <span class="badge badge--info">Under Review</span>
            <span class="badge badge--neutral">Neutral</span>
          </div>
        </div>

        <!-- Alerts -->
        <div class="comp-section">
          <h2 class="comp-section__title">Alerts & Notifications</h2>
          <div class="comp-demo comp-demo--col">
            <div class="alert alert--info" role="note">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <div><strong>Information:</strong> Your application is being processed.</div>
            </div>
            <div class="alert alert--success" role="note">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              <div><strong>Success:</strong> Application submitted successfully!</div>
            </div>
            <div class="alert alert--warning" role="note">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
              <div><strong>Warning:</strong> System maintenance scheduled Sunday 2–4 AM.</div>
            </div>
            <div class="alert alert--error" role="alert">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              <div><strong>Error:</strong> Please check the required fields highlighted below.</div>
            </div>
          </div>
        </div>

        <!-- Form Components -->
        <div class="comp-section">
          <h2 class="comp-section__title">Form Fields (All States)</h2>
          <div class="comp-demo comp-demo--col" style="max-width:480px">
            <div class="form-group">
              <label class="form-label" for="demo-default">Default State</label>
              <input class="form-input" id="demo-default" type="text" placeholder="Enter value…"/>
            </div>
            <div class="form-group">
              <label class="form-label" for="demo-filled">Filled State</label>
              <input class="form-input" id="demo-filled" type="text" value="Prasoddha Aryal"/>
            </div>
            <div class="form-group">
              <label class="form-label" for="demo-error">Error State <span class="form-required">*</span></label>
              <input class="form-input form-input--error" id="demo-error" type="text" value="" aria-invalid="true" aria-describedby="demo-error-msg"/>
              <p class="form-error" id="demo-error-msg" role="alert">This field is required. / यो फिल्ड आवश्यक छ।</p>
            </div>
            <div class="form-group">
              <label class="form-label" for="demo-success">Success State</label>
              <input class="form-input form-input--success" id="demo-success" type="text" value="98XXXXXXXX"/>
              <p class="form-success-msg">✓ Valid Nepal mobile number</p>
            </div>
            <div class="form-group">
              <label class="form-label" for="demo-disabled">Disabled State</label>
              <input class="form-input" id="demo-disabled" type="text" value="Cannot edit" disabled aria-disabled="true"/>
            </div>
            <div class="form-group">
              <label class="form-label" for="demo-select">Dropdown Select</label>
              <select class="form-select" id="demo-select">
                <option value="" disabled selected>Select an option…</option>
                <option>Option A</option>
                <option>Option B</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Cards -->
        <div class="comp-section">
          <h2 class="comp-section__title">Cards</h2>
          <div class="comp-demo comp-demo--wrap">
            <div class="service-card" style="max-width:220px;cursor:default">
              <div class="service-card__icon" aria-hidden="true">👤</div>
              <h3 class="service-card__title">Citizenship</h3>
              <p class="service-card__desc">Apply for or renew your citizenship certificate</p>
              <div class="service-card__meta">
                <span class="badge badge--neutral">Home Ministry</span>
                <span class="service-card__time">⏱ 3–5 days</span>
              </div>
            </div>
            <div class="info-card" style="max-width:260px">
              <div class="info-card__icon" aria-hidden="true">📊</div>
              <h3>Stat Card</h3>
              <p class="info-card__value">1,24,500</p>
              <p class="info-card__label">Applications This Month</p>
            </div>
          </div>
        </div>

        <!-- Data Table -->
        <div class="comp-section">
          <h2 class="comp-section__title">Data Table</h2>
          <div class="table-wrapper" role="region" aria-label="Sample application data" tabindex="0">
            <table class="data-table">
              <caption class="sr-only">Sample application status table</caption>
              <thead>
                <tr>
                  <th scope="col">Application ID</th>
                  <th scope="col">Service</th>
                  <th scope="col">Submitted</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                ${[
                  ['APP-2081-72438','Citizenship','2081-07-01','In Progress'],
                  ['APP-2081-65432','Passport Renewal','2081-06-20','Approved'],
                  ['APP-2081-58901','Land Certificate','2081-06-15','Under Review'],
                  ['APP-2081-41234','Tax Registration','2081-06-10','Approved'],
                ].map(([id,svc,date,status]) => `
                  <tr>
                    <td><code>${id}</code></td>
                    <td>${svc}</td>
                    <td>${date}</td>
                    <td><span class="badge badge--${status==='Approved'?'success':status==='In Progress'?'info':'warning'}">${status}</span></td>
                    <td><button class="btn btn--ghost btn--sm">View</button></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  `;
}

// ─── Accessibility Controls ───────────────────────────────────────────────────

function bindAccessibility() {
  // Language Toggle
  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'np' : 'en';
    localStorage.setItem('ns_lang', state.lang);
    document.getElementById('lang-toggle').textContent = state.lang === 'en' ? 'नेपाली' : 'English';
    document.documentElement.lang = state.lang === 'np' ? 'ne' : 'en';
    renderPage(state.currentPage);
  });

  // Font size
  document.getElementById('font-sm')?.addEventListener('click', () => setFontSize(14));
  document.getElementById('font-md')?.addEventListener('click', () => setFontSize(16));
  document.getElementById('font-lg')?.addEventListener('click', () => setFontSize(19));

  // High Contrast
  document.getElementById('hc-toggle')?.addEventListener('click', () => {
    state.highContrast = !state.highContrast;
    document.body.classList.toggle('high-contrast', state.highContrast);
    localStorage.setItem('ns_hc', String(state.highContrast));
    const btn = document.getElementById('hc-toggle');
    btn.setAttribute('aria-pressed', String(state.highContrast));
    btn.title = state.highContrast ? 'Disable High Contrast' : 'Enable High Contrast';
  });
}

function setFontSize(px) {
  state.fontSize = px;
  document.documentElement.style.fontSize = px + 'px';
  localStorage.setItem('ns_fontSize', String(px));
  ['font-sm','font-md','font-lg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.setAttribute('aria-pressed', String(
      (id==='font-sm'&&px===14)||(id==='font-md'&&px===16)||(id==='font-lg'&&px===19)
    ));
  });
}

