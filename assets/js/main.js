const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-navigation');
let previousFocus = null;

function openMenu() {
  nav.style.display = 'block';
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  previousFocus = document.activeElement;
  nav.querySelector('a')?.focus();
}

function closeMenu() {
  nav.style.display = '';
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  if (previousFocus instanceof HTMLElement) {
    previousFocus.focus();
  }
}

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  if (expanded) {
    closeMenu();
  } else {
    openMenu();
  }
});

nav?.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 900) {
    closeMenu();
  }
});

const offerLinks = document.querySelectorAll('[data-offer]');
const offerSelect = document.getElementById('offer');

offerLinks.forEach((button) => {
  button.addEventListener('click', () => {
    const offer = button.getAttribute('data-offer');
    if (offer && offerSelect) {
      offerSelect.value = offer;
    }
  });
});
