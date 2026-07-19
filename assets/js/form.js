// form.js - amélioration de l’expérience de validation et présélection des offres
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

function setFormStatus(message) {
  if (formStatus) {
    formStatus.textContent = message;
  }
}

function focusFirstInvalidField() {
  if (!form) {
    return;
  }

  const invalidField = form.querySelector(':invalid');
  if (invalidField) {
    invalidField.focus();
  }
}

function setupOfferPresets() {
  if (!form) {
    return;
  }

  const offerSelect = form.querySelector('select[name="offer"]');
  const offerButtons = document.querySelectorAll('[data-offer]');

  if (!offerSelect || offerButtons.length === 0) {
    return;
  }

  offerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedOffer = button.dataset.offer;
      if (selectedOffer) {
        offerSelect.value = selectedOffer;
      }
    });
  });
}

if (form) {
  setupOfferPresets();

  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      setFormStatus('Veuillez compléter les champs obligatoires avant d’envoyer votre demande.');
      focusFirstInvalidField();
      return;
    }

    const honeypot = form.querySelector('[name="bot-field"]');
    if (honeypot && honeypot.value.trim() !== '') {
      event.preventDefault();
      setFormStatus('');
      return;
    }

    setFormStatus('Envoi en cours…');
  });

  form.addEventListener('input', () => {
    if (formStatus) {
      formStatus.textContent = '';
    }
  });
}
