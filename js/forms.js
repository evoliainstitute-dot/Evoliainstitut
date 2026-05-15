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

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initPoeiForm();
    initNewsletter();
    initPhoneMask();
    initFloatingLabels();
  });
})();
