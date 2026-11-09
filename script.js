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


/* Reveal content only as it enters view; honor reduced motion and older browsers. */
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll('h1,h2,h3,.hero-intro,.section-kicker,.timeline-item,.offer-card,.family-card,.contact-card,.crisis-card,.family-note,.additional-qualifications,.hours-block');
  if (reduceMotion || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('reveal-ready');
  targets.forEach((el, i) => {el.dataset.reveal=''; el.style.setProperty('--reveal-delay', (i%4)*70+'ms');});
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});
  }, {threshold:.12, rootMargin:'0px 0px -35px 0px'});
  targets.forEach(el=>observer.observe(el));
  const fields=[...document.querySelectorAll('.hero,.welcome,.person-section,.offer-section,.family-section,.contact-section')];
  let queued=false;
  window.addEventListener('scroll',()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{const vh=innerHeight;fields.forEach(el=>{const r=el.getBoundingClientRect();el.style.setProperty('--parallax-y',Math.max(-18,Math.min(18,(r.top-vh*.5)*-.035))+'px')});queued=false})},{passive:true});
})();
