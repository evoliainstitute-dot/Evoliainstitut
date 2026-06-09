/* ============================================================
   EVOLIA INSTITUT — Header injection & navigation
   ============================================================ */

(function() {
  'use strict';

  /* ── Shared Header HTML ── */
  function getHeaderHTML(activePage) {
    const active = activePage || '';
    return `
<div class="site-topbar">
  <div class="container">
    <a href="tel:+33689417517">📞 06 89 41 75 17</a>
    <span>·</span>
    <a href="mailto:contact@evoliainstitut.com">✉ contact@evoliainstitut.com</a>
    <span>·</span>
    <span>Lun–Ven 9h–18h · Réponse sous 48h</span>
  </div>
</div>
<nav class="navbar" role="navigation" aria-label="Navigation principale">
  <div class="container">
    <a href="/index.html" class="nav-logo" aria-label="Evolia Institut — Accueil" style="gap:0;">
      <img src="/img/evolia-logo-transparent.png" alt="Evolia Institut" style="height:56px;width:auto;object-fit:contain;flex-shrink:0;" loading="eager">
    </a>
    <ul class="nav-links" role="list" id="nav-links">
      <li>
        <a href="/notre-ecole/index.html" aria-haspopup="true">L'Institut <span class="caret">▾</span></a>
        <div class="dropdown" role="menu">
          <div class="dropdown-label">L'Institut</div>
          <a href="/notre-ecole/index.html">Notre école</a>
          <a href="/accessibilite/index.html">♿ Accessibilité &amp; PSH</a>
        </div>
      </li>
      <li>
        <a href="/formations/index.html" aria-haspopup="true">
          Formations <span class="caret">▾</span>
        </a>
        <div class="dropdown" role="menu">
          <div class="dropdown-label">Alternance</div>
          <a href="/formations/employe-polyvalent.html">Employé Polyvalent (RNCP #38663)</a>
          <a href="/formations/responsable-pme.html">Responsable de Petite ou Moyenne Structure (RNCP #38575)</a>
          <a href="/formations/community-manager.html">Community Manager (RNCP #40907)</a>
          <a href="/formations/conseiller-commercial.html">Conseiller Commercial (RNCP #37717)</a>
          <div class="dropdown-divider"></div>
          <div class="dropdown-label">Certifiantes</div>
          <a href="/formations/haccp.html">Hygiène Alimentaire HACCP</a>
          <a href="/formations/gestion-conflits.html">Gestion des Conflits</a>
          <a href="/formations/gestes-postures.html">Gestes et Postures</a>
          <a href="/formations/prevention-harcelement.html">Prévention Harcèlement</a>
          <a href="/formations/eco-responsable.html">Démarche Éco-Responsable</a>
          <a href="/formations/intra-entreprise.html">Formation Intra-Entreprise</a>
        </div>
      </li>
      <li><a href="/financement/index.html">Financement</a></li>
      <li><a href="/contact/index.html">Nous contacter</a></li>
    </ul>
    <div class="nav-actions" id="nav-actions">
      <span class="badge-qualiopi" aria-label="Certification Qualiopi">✓ Qualiopi</span>
      <a href="/contact/index.html" class="btn btn-primary">Dépôt de candidature</a>
    </div>
    <button class="nav-toggle" id="nav-toggle" aria-label="Menu" aria-expanded="false" aria-controls="nav-links">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;
  }

  /* ── Shared Footer HTML ── */
  function getFooterHTML() {
    return `
<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-top">
      <div>
        <div class="footer-brand" style="display:flex;align-items:center;">
          <img src="/img/evolia-logo-transparent.png" alt="Evolia Institut" style="height:88px;width:auto;object-fit:contain;filter:brightness(0) invert(1);opacity:1;" loading="lazy">
        </div>
        <p class="footer-tagline">Former mieux. Performer durablement.<br>Spécialiste formation CHR.</p>
        <a href="/documents/certificat-qualiopi-evolia-institut.pdf" target="_blank" rel="noopener" class="badge-qualiopi badge-qualiopi--inverted" style="cursor:pointer;text-decoration:none;" title="Télécharger le certificat Qualiopi">✓ Certification Qualiopi · PDF</a>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="/index.html">Accueil</a></li>
          <li><a href="/formations/index.html">Formations</a></li>
          <li><a href="/financement/index.html">Financement</a></li>
          <li><a href="/notre-ecole/index.html">Notre école</a></li>
          <li><a href="/blog/index.html">Blog</a></li>
          <li><a href="/contact/index.html">Nous contacter</a></li>
          <li><a href="/accessibilite/index.html">Accessibilité &amp; PSH</a></li>
          <li><a href="/consulting-ouverture/index.html">Consulting ouverture</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Formations</h4>
        <ul>
          <li><a href="/formations/employe-polyvalent.html">Employé Polyvalent</a></li>
          <li><a href="/formations/responsable-pme.html">Responsable de Petite ou Moyenne Structure</a></li>
          <li><a href="/formations/community-manager.html">Community Manager</a></li>
          <li><a href="/formations/conseiller-commercial.html">Conseiller Commercial</a></li>
          <li><a href="/formations/haccp.html">Hygiène HACCP</a></li>
          <li><a href="/formations/gestion-conflits.html">Gestion des Conflits</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <div class="footer-contact-item">📞 <a href="tel:+33689417517" style="color:rgba(255,255,255,.75);">06 89 41 75 17</a></div>
        <div class="footer-contact-item">✉ <a href="mailto:contact@evoliainstitut.com" style="color:rgba(255,255,255,.75);">contact@evoliainstitut.com</a></div>
        <div class="footer-contact-item" style="font-size:12px;color:rgba(255,255,255,.45);">♿ Référente handicap : <a href="mailto:referent-handicap@evoliainstitut.com" style="color:rgba(255,255,255,.55);">Mme CAMARA</a></div>
        <div class="footer-contact-item" style="margin-top:4px;font-size:12px;color:rgba(255,255,255,.4);">Lun–Ven · 9h–18h · Réponse garantie sous 48h</div>
        <div style="margin-top:16px;">
          <a href="/contact/index.html" class="btn btn-white" style="font-size:12px;padding:10px 20px;">Dépôt de candidature</a>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="footer-bottom">
      <span>© 2026 Evolia Institut · NDA&nbsp;: 11757542775 · SIRET&nbsp;: 99918809700011 · Qualiopi n°QNW0211</span>
      <span>
        <a href="https://linkedin.com/company/evolia-institut" target="_blank" style="color:rgba(255,255,255,.35);">🔗 LinkedIn</a> ·
        <a href="https://instagram.com/evoliainstitut" target="_blank" style="color:rgba(255,255,255,.35);">📷 Instagram</a>
      </span>
      <span>
        <a href="/mentions-legales/index.html" style="color:rgba(255,255,255,.35);">Mentions légales</a> ·
        <a href="/politique-confidentialite/index.html" style="color:rgba(255,255,255,.35);">Politique de confidentialité</a> · <a href="/cgf/index.html" style="color:rgba(255,255,255,.35);">CGF</a> · <a href="/accessibilite/index.html" style="color:rgba(255,255,255,.35);">Accessibilité</a>
      </span>
    </div>
  </div>
</footer>`;
  }

  /* ── Inject header & footer ── */
  document.addEventListener('DOMContentLoaded', function() {
    // Navbar uniquement sur la page d'accueil
    var path = window.location.pathname;
    var isHomepage = path === '/' ||
                     path.endsWith('/') ||
                     path.endsWith('/index.html') ||
                     path === '/index.html';

    var headerEl = document.getElementById('site-header');
    if (headerEl) {
      if (isHomepage) {
        headerEl.innerHTML = getHeaderHTML();
        headerEl.className = 'site-header';
      } else {
        headerEl.style.display = 'none';
      }
    }

    // Footer sur toutes les pages
    var footerEl = document.getElementById('site-footer');
    if (footerEl) {
      footerEl.innerHTML = getFooterHTML();
    }

    setTimeout(function() {
      initNav();
      initScrollBehavior();
      initBackToTop();
      initMobileFloatingCTA();
    }, 0);
  });

  function initNav() {
    var toggle = document.getElementById('nav-toggle');
    var links  = document.getElementById('nav-links');

    if (!toggle || !links) return;

    toggle.addEventListener('click', function() {
      var isOpen = links.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Close on ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Active page indicator
    var currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(function(a) {
      if (a.getAttribute('href') === currentPath || currentPath.includes(a.getAttribute('href'))) {
        a.style.color = 'var(--color-teal)';
        a.style.fontWeight = '600';
      }
    });
  }

  /* ── Transparent navbar over hero ── */
  function initScrollBehavior() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    var hasHero = document.querySelector('.hero');
    if (!hasHero) return;

    header.classList.add('site-header--transparent');

    window.addEventListener('scroll', function() {
      if (window.scrollY > 40) {
        header.classList.remove('site-header--transparent');
      } else {
        header.classList.add('site-header--transparent');
      }
    }, { passive: true });
  }

  /* ── Back to top ── */
  function initBackToTop() {
    var btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Retour en haut de page');
    btn.innerHTML = '&#8679;';
    document.body.appendChild(btn);

    window.addEventListener('scroll', function() {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Mobile floating CTA ── */
  function initMobileFloatingCTA() {
    var bar = document.createElement('div');
    bar.className = 'mobile-cta-floating';
    bar.setAttribute('role', 'complementary');
    bar.innerHTML = '<a href="mailto:contact@evoliainstitut.com" class="btn btn-primary">✉ Nous contacter</a>' +
      '<a href="/evolia-institut/contact/index.html" class="btn btn-secondary">Devis gratuit</a>';
    document.body.appendChild(bar);
  }
})();
