'use strict';
(() => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  if (!button || !nav) return;
  document.documentElement.classList.add('js');
  button.hidden = false;
  const setMenu = (open) => {
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
    button.querySelector('span').textContent = open ? '−' : '+';
    nav.classList.toggle('is-open', open);
  };
  setMenu(false);
  button.addEventListener('click', () => setMenu(button.getAttribute('aria-expanded') !== 'true'));
  const links = [...nav.querySelectorAll('a')];
  links.forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      button.focus();
    }
  });
  const mobile = window.matchMedia('(max-width: 600px)');
  mobile.addEventListener('change', () => setMenu(false));
  if ('IntersectionObserver' in window) {
    const sections = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }
})();
