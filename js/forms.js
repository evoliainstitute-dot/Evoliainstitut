/* ============================================================
   EVOLIA INSTITUT — Forms validation & interaction
   ============================================================ */

(function() {
  'use strict';

  /* ── Generic form validation ── */
  function validateForm(form) {
    var valid = true;
    // Reset errors
    form.querySelectorAll('.form-group').forEach(function(group) {
      group.classList.remove('error');
      var err = group.querySelector('.form-error');
      if (err) err.remove();
    });

    form.querySelectorAll('[required]').forEach(function(field) {
      var group = field.closest('.form-group');
      if (!group) return;
      var val = field.value.trim();
      var isEmpty = field.type === 'checkbox' ? !field.checked : !val;

      if (isEmpty) {
        valid = false;
        group.classList.add('error');
        var errMsg = document.createElement('span');
        errMsg.className = 'form-error';
        errMsg.setAttribute('role', 'alert');
        errMsg.textContent = field.type === 'checkbox'
          ? 'Vous devez accepter ce champ.'
          : 'Ce champ est obligatoire.';
        group.appendChild(errMsg);
      } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        valid = false;
        group.classList.add('error');
        var errMsg = document.createElement('span');
        errMsg.className = 'form-error';
        errMsg.setAttribute('role', 'alert');
        errMsg.textContent = 'Adresse email invalide.';
        group.appendChild(errMsg);
      } else if (field.type === 'tel' && val && !/^[\d\s\+\-\.]{8,}$/.test(val)) {
        valid = false;
        group.classList.add('error');
        var errMsg = document.createElement('span');
        errMsg.className = 'form-error';
        errMsg.setAttribute('role', 'alert');
        errMsg.textContent = 'Numéro de téléphone invalide.';
        group.appendChild(errMsg);
      }
    });

    return valid;
  }

  /* ── Show success state ── */
  function showSuccess(form, successEl) {
    form.hidden = true;
    if (successEl) {
      successEl.hidden = false;
      successEl.focus();
    }
  }

  /* ── Contact form ── */
  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    var successEl = document.getElementById('form-success');
    var submitBtn = form.querySelector('[type="submit"]');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (!validateForm(form)) {
        // Scroll to first error
        var firstError = form.querySelector('.form-group.error');
        if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      // Simulate async submit
      submitBtn.textContent = 'Envoi en cours…';
      submitBtn.disabled = true;
      setTimeout(function() {
        showSuccess(form, successEl);
      }, 900);
    });
  }

  /* ── POEI eligibility form ── */
  function initPoeiForm() {
    var form = document.getElementById('poei-form');
    if (!form) return;
    var successEl = document.getElementById('poei-success');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (!validateForm(form)) return;
      var btn = form.querySelector('[type="submit"]');
      btn.textContent = 'Vérification…';
      btn.disabled = true;
      setTimeout(function() {
        showSuccess(form, successEl);
      }, 800);
    });
  }

  /* ── Newsletter ── */
  function initNewsletter() {
    var form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      if (!input || !input.value.trim()) return;
      var btn = form.querySelector('[type="submit"]');
      btn.textContent = '✓ Inscrit !';
      btn.disabled = true;
      input.value = '';
    });
  }

  /* ── Phone mask (basic) ── */
  function initPhoneMask() {
    document.querySelectorAll('input[type="tel"]').forEach(function(input) {
      input.addEventListener('input', function() {
        var val = input.value.replace(/\D/g, '');
        if (val.length > 10) val = val.slice(0, 10);
        input.value = val.replace(/(\d{2})(?=\d)/g, '$1 ').trim();
      });
    });
  }

  /* ── Floating label (optional enhancement) ── */
  function initFloatingLabels() {
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(function(field) {
      field.addEventListener('blur', function() {
        if (field.value.trim()) {
          field.closest('.form-group')?.classList.add('filled');
        } else {
          field.closest('.form-group')?.classList.remove('filled');
        }
      });
    });
  }

  /* ── Multi-step modal "Toutes formations" ── */
  function initAllFormationsModal() {
    // Inject modal styles
    var style = document.createElement('style');
    style.textContent = [
      '.modal-overlay{position:fixed;inset:0;background:rgba(28,28,28,.6);z-index:2000;display:flex;align-items:center;justify-content:center;padding:16px;opacity:0;pointer-events:none;transition:opacity 300ms ease;}',
      '.modal-overlay.open{opacity:1;pointer-events:auto;}',
      '.modal-box{background:white;border-radius:4px;width:100%;max-width:540px;max-height:90vh;overflow-y:auto;box-shadow:0 24px 64px rgba(0,0,0,.2);transform:translateY(16px);transition:transform 300ms ease;}',
      '.modal-overlay.open .modal-box{transform:translateY(0);}',
      '.modal-header{padding:24px 28px 0;display:flex;justify-content:space-between;align-items:flex-start;}',
      '.modal-close{background:none;border:none;font-size:22px;cursor:pointer;color:#6b6b6b;padding:4px;line-height:1;border-radius:2px;}',
      '.modal-close:hover{color:#1c1c1c;}',
      '.modal-progress{display:flex;gap:8px;margin:20px 28px 0;}',
      '.modal-step-dot{flex:1;height:4px;border-radius:2px;background:#e0d5c8;transition:background 300ms ease;}',
      '.modal-step-dot.active{background:#1a9b97;}',
      '.modal-step-dot.done{background:#1a9b97;}',
      '.modal-body{padding:24px 28px 28px;}',
      '.modal-step{display:none;}.modal-step.active{display:block;}',
      '.modal-nav{display:flex;gap:12px;margin-top:24px;}',
      '.modal-nav .btn{flex:1;text-align:center;}',
      '.modal-step-label{font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#db560e;margin-bottom:8px;}',
      '.modal-step h3{font-family:"Cormorant Garamond",serif;font-size:22px;font-weight:600;margin-bottom:20px;}',
      '.modal-confirm-box{background:#f0e8de;border-radius:4px;padding:20px;font-size:14px;line-height:1.7;color:#1c1c1c;}',
      '@media(max-width:480px){.modal-box{max-height:95vh;}.modal-header,.modal-body,.modal-progress{padding-left:20px;padding-right:20px;}}'
    ].join('');
    document.head.appendChild(style);

    // Inject modal HTML
    var overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'modal-title');
    overlay.innerHTML = [
      '<div class="modal-box" id="modal-box">',
      '  <div class="modal-header">',
      '    <div><p id="modal-step-label" class="modal-step-label">Étape 1 / 2</p><h3 id="modal-title">Votre demande de formation</h3></div>',
      '    <button class="modal-close" id="modal-close" aria-label="Fermer">&times;</button>',
      '  </div>',
      '  <div class="modal-progress" aria-hidden="true">',
      '    <div class="modal-step-dot active" id="dot-1"></div>',
      '    <div class="modal-step-dot" id="dot-2"></div>',
      '  </div>',
      '  <div class="modal-body">',

      '    <!-- Step 1: Coordonnées -->',
      '    <div class="modal-step active" id="modal-step-1">',
      '      <div class="form-grid-2" style="margin-bottom:14px;">',
      '        <div class="form-group"><label for="m-nom">Nom *</label><input type="text" id="m-nom" name="m-nom" required autocomplete="family-name" placeholder="Votre nom"></div>',
      '        <div class="form-group"><label for="m-prenom">Prénom *</label><input type="text" id="m-prenom" name="m-prenom" required autocomplete="given-name" placeholder="Votre prénom"></div>',
      '      </div>',
      '      <div class="form-group" style="margin-bottom:14px;"><label for="m-email">Email *</label><input type="email" id="m-email" name="m-email" required autocomplete="email" placeholder="vous@email.com"></div>',
      '      <div class="form-group" style="margin-bottom:0;"><label for="m-tel">Téléphone *</label><input type="tel" id="m-tel" name="m-tel" required autocomplete="tel" placeholder="06 00 00 00 00"></div>',
      '      <div class="modal-nav">',
      '        <button class="btn btn-primary" id="modal-next-1" type="button">Suivant →</button>',
      '      </div>',
      '    </div>',

      '    <!-- Step 2: Formation + Message -->',
      '    <div class="modal-step" id="modal-step-2">',
      '      <div class="form-group" style="margin-bottom:14px;">',
      '        <label for="m-formation">Formation souhaitée *</label>',
      '        <select id="m-formation" name="m-formation" required>',
      '          <option value="nc">Je ne sais pas encore</option>',
      '          <optgroup label="Alternance / Diplômantes"><option value="employe-polyvalent">Employé Polyvalent (RNCP #38663)</option><option value="responsable-pme">Responsable PME/PMI (RNCP #38575)</option><option value="community-manager">Community Manager (RNCP #40907)</option><option value="conseiller-commercial">Conseiller Commercial (RNCP #37717)</option></optgroup>',
      '          <optgroup label="Certifiantes"><option value="haccp">Hygiène HACCP</option><option value="gestion-conflits">Gestion des Conflits</option><option value="gestes-postures">Gestes et Postures</option><option value="prevention-harcelement">Prévention Harcèlement</option><option value="eco-responsable">Démarche Éco-Responsable</option><option value="intra">Formation Intra-Entreprise</option></optgroup>',
      '          <option value="poei">Dispositif POEI</option>',
      '          <option value="consulting">Consulting Ouverture</option>',
      '        </select>',
      '      </div>',
      '      <div class="form-group" style="margin-bottom:0;"><label for="m-message">Message (optionnel)</label><textarea id="m-message" name="m-message" rows="3" placeholder="Nombre de personnes à former, dates souhaitées, questions…"></textarea></div>',
      '      <div class="modal-nav">',
      '        <button class="btn btn-secondary" id="modal-back-2" type="button">← Retour</button>',
      '        <button class="btn btn-primary" id="modal-send" type="button">Envoyer ma demande →</button>',
      '      </div>',
      '    </div>',

      '  </div>',
      '</div>'
    ].join('\n');
    document.body.appendChild(overlay);

    var currentStep = 1;

    function goToStep(n) {
      document.getElementById('modal-step-' + currentStep).classList.remove('active');
      document.getElementById('dot-' + currentStep).classList.remove('active');
      document.getElementById('dot-' + currentStep).classList.add('done');
      currentStep = n;
      document.getElementById('modal-step-' + n).classList.add('active');
      document.getElementById('dot-' + n).classList.add('active');
      document.getElementById('modal-step-label').textContent = 'Étape ' + n + ' / 2';
      // Focus first input in new step
      var first = document.querySelector('#modal-step-' + n + ' input, #modal-step-' + n + ' select, #modal-step-' + n + ' textarea');
      if (first) setTimeout(function() { first.focus(); }, 50);
    }

    function validateStep1() {
      var nom = document.getElementById('m-nom');
      var prenom = document.getElementById('m-prenom');
      var email = document.getElementById('m-email');
      var tel = document.getElementById('m-tel');
      var valid = true;
      [nom, prenom, email, tel].forEach(function(f) {
        f.style.borderColor = f.value.trim() ? '' : '#e53e3e';
        if (!f.value.trim()) valid = false;
      });
      if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.style.borderColor = '#e53e3e';
        valid = false;
      }
      if (!valid) {
        var first = document.querySelector('#modal-step-1 input[style*="e53e3e"]');
        if (first) first.focus();
      }
      return valid;
    }

    function openModal() {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      setTimeout(function() {
        var first = document.getElementById('m-nom');
        if (first) first.focus();
      }, 100);
    }

    function closeModal() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.getElementById('modal-close').addEventListener('click', closeModal);
    overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

    document.getElementById('modal-next-1').addEventListener('click', function() {
      if (validateStep1()) goToStep(2);
    });
    document.getElementById('modal-back-2').addEventListener('click', function() { goToStep(1); });

    document.getElementById('modal-send').addEventListener('click', function() {
      var nom = document.getElementById('m-nom').value.trim();
      var prenom = document.getElementById('m-prenom').value.trim();
      var email = document.getElementById('m-email').value.trim();
      var tel = document.getElementById('m-tel').value.trim();
      var formation = document.getElementById('m-formation');
      var formationLabel = formation.options[formation.selectedIndex].text;
      var message = document.getElementById('m-message').value.trim();

      var subject = encodeURIComponent('Demande de formation — ' + formationLabel);
      var body = encodeURIComponent([
        'Nom : ' + nom + ' ' + prenom,
        'Email : ' + email,
        'Téléphone : ' + tel,
        'Formation souhaitée : ' + formationLabel,
        message ? 'Message : ' + message : ''
      ].filter(Boolean).join('\n'));

      window.location.href = 'mailto:contact@evoliainstitut.com?subject=' + subject + '&body=' + body;
      closeModal();
    });

    // Expose open function globally
    window.openAllFormationsModal = openModal;
  }

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initPoeiForm();
    initNewsletter();
    initPhoneMask();
    initFloatingLabels();
    initAllFormationsModal();
  });
})();
