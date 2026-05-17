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
    <span>📞 06 XX XX XX XX</span>
    <span>·</span>
    <a href="mailto:contact@evoliainstitut.com">contact@evoliainstitut.com</a>
    <span>·</span>
    <span>Réponse garantie sous 48h</span>
  </div>
</div>
<nav class="navbar" role="navigation" aria-label="Navigation principale">
  <div class="container">
    <a href="/evolia-institut/index.html" class="nav-logo" aria-label="Evolia Institut — Accueil">
      <div class="nav-logo-mark">EI</div>
      <div>
        <div class="nav-logo-text">Evolia Institut</div>
        <div class="nav-logo-sub">Formation CHR · Qualiopi</div>
      </div>
    </a>
    <ul class="nav-links" role="list" id="nav-links">
      <li><a href="/evolia-institut/index.html">Accueil</a></li>
      <li>
        <a href="/evolia-institut/formations/index.html" aria-haspopup="true">
          Nos solutions <span class="caret">▾</span>
        </a>
        <div class="dropdown" role="menu">
          <div class="dropdown-label">Formations</div>
          <a href="/evolia-institut/formations/employe-polyvalent.html">Employé Polyvalent (RNCP #38663)</a>
          <a href="/evolia-institut/formations/responsable-pme.html">Responsable PME/PMI (RNCP #38575)</a>
          <a href="/evolia-institut/formations/gestion-conflits.html">Gestion des Conflits</a>
          <a href="/evolia-institut/formations/gestes-postures.html">Gestes et Postures</a>
          <a href="/evolia-institut/formations/prevention-harcelement.html">Prévention Harcèlement</a>
          <a href="/evolia-institut/formations/eco-responsable.html">Démarche Éco-Responsable</a>
          <a href="/evolia-institut/formations/intra-entreprise.html">Formation Intra-Entreprise</a>
          <div class="dropdown-divider"></div>
          <div class="dropdown-label">Programmes spéciaux</div>
          <a href="/evolia-institut/financement/poei.html">Dispositif POEI — + 30k€ économie</a>
          <a href="/evolia-institut/consulting-ouverture/index.html">Consulting Ouverture</a>
          <div class="dropdown-divider"></div>
          <a href="/evolia-institut/financement/index.html">Financement & OPCO</a>
        </div>
      </li>
      <li><a href="/evolia-institut/notre-ecole/index.html">Notre école</a></li>
      <li><a href="/evolia-institut/blog/index.html">Blog</a></li>
      <li><a href="/evolia-institut/contact/index.html">Contact</a></li>
    </ul>
    <div class="nav-actions" id="nav-actions">
      <span class="badge-qualiopi" aria-label="Certification Qualiopi">✓ Qualiopi</span>
      <a href="/evolia-institut/contact/index.html" class="btn btn-primary">Demander un devis</a>
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
        <div class="footer-brand">
          <div class="footer-logo-mark">EI</div>
          <div class="footer-logo-text">Evolia Institut</div>
        </div>
        <p class="footer-tagline">Former mieux. Performer durablement.<br>Spécialiste formation CHR depuis 20 ans.</p>
        <span class="badge-qualiopi badge-qualiopi--inverted">✓ Certification Qualiopi</span>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="/evolia-institut/index.html">Accueil</a></li>
          <li><a href="/evolia-institut/formations/index.html">Formations</a></li>
          <li><a href="/evolia-institut/financement/index.html">Financement</a></li>
          <li><a href="/evolia-institut/notre-ecole/index.html">Notre école</a></li>
          <li><a href="/evolia-institut/blog/index.html">Blog</a></li>
          <li><a href="/evolia-institut/contact/index.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Formations</h4>
        <ul>
          <li><a href="/evolia-institut/formations/employe-polyvalent.html">Employé Polyvalent</a></li>
          <li><a href="/evolia-institut/formations/responsable-pme.html">Responsable PME/PMI</a></li>
          <li><a href="/evolia-institut/formations/gestion-conflits.html">Gestion des Conflits</a></li>
          <li><a href="/evolia-institut/formations/gestes-postures.html">Gestes et Postures</a></li>
          <li><a href="/evolia-institut/formations/prevention-harcelement.html">Prévention Harcèlement</a></li>
          <li><a href="/evolia-institut/formations/eco-responsable.html">Éco-Responsable</a></li>
          <li><a href="/evolia-institut/financement/poei.html">Dispositif POEI</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <div class="footer-contact-item">📞 <span>06 XX XX XX XX</span></div>
        <div class="footer-contact-item">📧 <a href="mailto:contact@evoliainstitut.com">contact@evoliainstitut.com</a></div>
        <div class="footer-contact-item" style="margin-top:8px;font-size:12px;color:rgba(255,255,255,.4);">Lun–Ven · 9h–18h<br>Réponse garantie sous 48h</div>
        <div style="margin-top:16px;">
          <a href="/evolia-institut/contact/index.html" class="btn btn-white" style="font-size:12px;padding:10px 20px;">Demander un devis</a>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="footer-bottom">
      <span>© 2026 Evolia Institut · Organisme de formation certifié Qualiopi · Déclaration d'activité : 11757542775</span>
      <span>
        <a href="https://linkedin.com/company/evolia-institut" target="_blank" style="color:rgba(255,255,255,.35);">🔗 LinkedIn</a> ·
        <a href="https://instagram.com/evoliainstitut" target="_blank" style="color:rgba(255,255,255,.35);">📷 Instagram</a>
      </span>
      <span>
        <a href="#" style="color:rgba(255,255,255,.35);">Mentions légales</a> ·
        <a href="#" style="color:rgba(255,255,255,.35);">Politique de confidentialité</a>
      </span>
    </div>
  </div>
</footer>`;
  }

  /* ── Inject header & footer ── */
  document.addEventListener('DOMContentLoaded', function() {
    // Header
    var headerEl = document.getElementById('site-header');
    if (headerEl) {
      headerEl.innerHTML = getHeaderHTML();
      headerEl.className = 'site-header';
    }

    // Footer
    var footerEl = document.getElementById('site-footer');
    if (footerEl) {
      footerEl.innerHTML = getFooterHTML();
    }

    // Mobile menu
    setTimeout(initNav, 0);
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
})();
