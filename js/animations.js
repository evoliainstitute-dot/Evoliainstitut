/* ============================================================
   EVOLIA INSTITUT — Scroll animations & micro-interactions
   ============================================================ */

(function() {
  'use strict';

  /* ── Intersection Observer for AOS ── */
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // fire once
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  /* ── Counter animation ── */
  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var prefix = el.getAttribute('data-prefix') || '';
    var duration = 1400;
    var start = null;
    var isFloat = target % 1 !== 0;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var ease = 1 - Math.pow(1 - progress, 3); // ease out cubic
      var current = target * ease;
      el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  /* ── Accordion ── */
  function initAccordions() {
    document.querySelectorAll('.accordion-header').forEach(function(btn) {
      // Set initial state
      var body = btn.nextElementSibling;
      var icon = btn.querySelector('.icon');
      if (!btn.hasAttribute('aria-expanded')) {
        btn.setAttribute('aria-expanded', 'false');
        if (body) body.hidden = true;
      }

      btn.addEventListener('click', function() {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        var newState = !expanded;
        btn.setAttribute('aria-expanded', newState);
        if (body) body.hidden = !newState;
        if (icon) btn.querySelector('.icon').textContent = newState ? '×' : '+';
      });
    });
  }

  /* ── Sticky header shrink ── */
  function initStickyHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', function() {
      var currentScrollY = window.scrollY;
      if (currentScrollY > 80) {
        header.style.boxShadow = '0 4px 24px rgba(8,145,178,.3)';
      } else {
        header.style.boxShadow = '0 2px 20px rgba(8,145,178,.35)';
      }
    }, { passive: true });
  }

  /* ── Section transition arrows ── */
  function initSectionArrows() {
    var main = document.querySelector('main');
    if (!main) return;
    var sections = main.querySelectorAll('section.section, .section--white, .section--alt, .section--dark');
    sections.forEach(function(section, i) {
      if (i < sections.length - 1) {
        var arrow = document.createElement('div');
        arrow.className = 'section-arrow';
        arrow.setAttribute('aria-hidden', 'true');
        arrow.innerHTML = '<span class="section-arrow-chevron"></span>';
        section.appendChild(arrow);
      }
    });
  }

  /* ── Parallax hero image (subtle) ── */
  function initParallax() {
    var heroImg = document.querySelector('.hero-img');
    if (!heroImg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    window.addEventListener('scroll', function() {
      var scrolled = window.pageYOffset;
      heroImg.style.transform = 'translateY(' + scrolled * 0.25 + 'px)';
    }, { passive: true });
  }

  /* ── Blog filter ── */
  function initBlogFilter() {
    var filterBtns = document.querySelectorAll('[data-filter]');
    var cards = document.querySelectorAll('[data-category]');
    if (!filterBtns.length) return;

    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var filter = btn.getAttribute('data-filter');
        filterBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');

        cards.forEach(function(card) {
          if (filter === 'tous' || card.getAttribute('data-category') === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', function() {
    // AOS
    document.querySelectorAll('.aos').forEach(function(el) {
      observer.observe(el);
    });

    // Counters
    document.querySelectorAll('[data-count]').forEach(function(el) {
      counterObserver.observe(el);
    });

    initAccordions();
    initStickyHeader();
    initParallax();
    initBlogFilter();
    initSectionArrows();
  });
})();
