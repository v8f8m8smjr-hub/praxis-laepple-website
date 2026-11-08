const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open', !isOpen);
  toggle.querySelector('.sr-only').textContent = isOpen ? 'Menü öffnen' : 'Menü schließen';
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    toggle.querySelector('.sr-only').textContent = 'Menü öffnen';
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
