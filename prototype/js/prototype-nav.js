/**
 * NAGRIK SEWA — नागरिक सेवा
 * Prototype Navigation (Hash-based Router)
 * Handles all page routing and active state management
 */

'use strict';

(function () {
  /* ──────────────────────────────────────────────────────────
     ROUTE CONFIGURATION
  ────────────────────────────────────────────────────────── */
  const ROUTES = {
    '#home':       { sectionId: 'page-home',       navLabel: 'Home' },
    '#catalog':    { sectionId: 'page-catalog',    navLabel: 'Services' },
    '#apply':      { sectionId: 'page-apply',       navLabel: 'Apply' },
    '#status':     { sectionId: 'page-status',     navLabel: 'Track Status' },
    '#components': { sectionId: 'page-components', navLabel: 'Components' },
  };

  const DEFAULT_ROUTE = '#home';

  /* ──────────────────────────────────────────────────────────
     ROUTER CORE
  ────────────────────────────────────────────────────────── */
  function getHash() {
    return window.location.hash || DEFAULT_ROUTE;
  }

  function navigate(hash) {
    if (!ROUTES[hash]) hash = DEFAULT_ROUTE;
    history.pushState(null, '', hash);
    activatePage(hash);
  }

  function activatePage(hash) {
    if (!ROUTES[hash]) hash = DEFAULT_ROUTE;

    const route = ROUTES[hash];

    // Hide all pages
    document.querySelectorAll('.page-section').forEach(el => {
      el.classList.remove('active');
      el.hidden = true;
    });

    // Show target page
    const target = document.getElementById(route.sectionId);
    if (target) {
      target.classList.add('active');
      target.hidden = false;
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Focus main for accessibility
      const main = document.getElementById('main-content');
      if (main) {
        main.focus({ preventScroll: true });
      }
    }

    // Update nav active state
    document.querySelectorAll('[data-nav-link]').forEach(link => {
      const isActive = link.dataset.navLink === hash;
      link.classList.toggle('active', isActive);
      link.setAttribute('aria-current', isActive ? 'page' : 'false');
    });

    // Announce route change to screen readers
    announcePageChange(route.navLabel);

    // Update document title
    document.title = `${route.navLabel} — नागरिक सेवा | Nagrik Sewa`;

    // Close mobile nav on navigation
    closeMobileNav();
  }

  /* ──────────────────────────────────────────────────────────
     MOBILE NAV
  ────────────────────────────────────────────────────────── */
  function openMobileNav() {
    const mobileNav = document.getElementById('mobile-nav');
    const hamburger = document.getElementById('hamburger-btn');
    if (mobileNav && hamburger) {
      mobileNav.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.setAttribute('aria-label', 'Close navigation menu');
    }
  }

  function closeMobileNav() {
    const mobileNav = document.getElementById('mobile-nav');
    const hamburger = document.getElementById('hamburger-btn');
    if (mobileNav && hamburger) {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open navigation menu');
    }
  }

  function toggleMobileNav() {
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav && mobileNav.classList.contains('open')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  }

  /* ──────────────────────────────────────────────────────────
     SCREEN READER ANNOUNCEMENTS
  ────────────────────────────────────────────────────────── */
  let liveRegion;

  function announcePageChange(label) {
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only live-region';
      document.body.appendChild(liveRegion);
    }
    liveRegion.textContent = '';
    requestAnimationFrame(() => {
      liveRegion.textContent = `Navigated to ${label}`;
    });
  }

  /* ──────────────────────────────────────────────────────────
     EVENT LISTENERS
  ────────────────────────────────────────────────────────── */
  function initNavigation() {
    // Handle nav link clicks
    document.addEventListener('click', function (e) {
      // Nav links
      const navLink = e.target.closest('[data-nav-link]');
      if (navLink) {
        e.preventDefault();
        navigate(navLink.dataset.navLink);
        return;
      }

      // CTA buttons that navigate
      const ctaNav = e.target.closest('[data-navigate]');
      if (ctaNav) {
        e.preventDefault();
        navigate(ctaNav.dataset.navigate);
        return;
      }

      // Hamburger button
      if (e.target.closest('#hamburger-btn')) {
        toggleMobileNav();
        return;
      }

      // Close mobile nav on outside click
      const mobileNav = document.getElementById('mobile-nav');
      if (mobileNav && mobileNav.classList.contains('open')) {
        if (!e.target.closest('.site-header')) {
          closeMobileNav();
        }
      }
    });

    // Keyboard handling for nav items
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeMobileNav();
        const a11yPanel = document.getElementById('a11y-panel');
        if (a11yPanel) a11yPanel.classList.remove('open');
        const modal = document.querySelector('.modal-overlay.open');
        if (modal) NagrikModal.close();
      }

      // Arrow key navigation in nav
      const navList = e.target.closest('.nav-links');
      if (navList) {
        const items = [...navList.querySelectorAll('[data-nav-link]')];
        const idx = items.indexOf(e.target);
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          items[(idx + 1) % items.length].focus();
        }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          items[(idx - 1 + items.length) % items.length].focus();
        }
      }
    });

    // Popstate (browser back/forward)
    window.addEventListener('popstate', function () {
      activatePage(getHash());
    });
  }

  /* ──────────────────────────────────────────────────────────
     INIT
  ────────────────────────────────────────────────────────── */
  function init() {
    initNavigation();
    // Activate the page corresponding to current hash
    activatePage(getHash());
  }

  // Expose navigate globally for use in main.js
  window.NagrikNav = { navigate, activatePage };

  // Init when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
