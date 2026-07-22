document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
      nav.setAttribute('aria-hidden', String(expanded));
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        menuToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        nav.setAttribute('aria-hidden', 'true');
      }
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', function () {
        menuToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        nav.setAttribute('aria-hidden', 'true');
      });
    });
  }

  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    const buttons = card.querySelectorAll('.toggle-button');
    const beforeImage = card.querySelector('.project-image.before');
    const afterImage = card.querySelector('.project-image.after');

    buttons.forEach((button) => {
      button.addEventListener('click', function () {
        buttons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        const view = button.dataset.view;
        if (view === 'before') {
          beforeImage.classList.add('active');
          afterImage.classList.remove('active');
        } else {
          beforeImage.classList.remove('active');
          afterImage.classList.add('active');
        }
      });
    });

    beforeImage.classList.add('active');
  });
});
