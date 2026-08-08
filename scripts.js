/* ========================================
   ADEN — Portfolio Script
   Custom cursor, scroll reveals, mobile nav,
   loading screen, smooth scroll
   ======================================== */

(function () {
  'use strict';

  /* ---------- Loading Screen ---------- */
  const loader = document.getElementById('loader');
  window.addEventListener('load', function () {
    setTimeout(function () {
      loader.classList.add('loaded');
    }, 1200);
  });

  /* ---------- Custom Cursor ---------- */
  const cursor = document.querySelector('.cursor');
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice && cursor) {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    const speed = 0.15;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateCursor() {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover states for links and buttons
    var interactives = document.querySelectorAll('a, button');
    interactives.forEach(function (el) {
      el.addEventListener('mouseenter', function () { cursor.classList.add('cursor--hover'); });
      el.addEventListener('mouseleave', function () { cursor.classList.remove('cursor--hover'); cursor.classList.remove('cursor--project'); });
    });

    // Project card special cursor
    var projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(function (card) {
      card.addEventListener('mouseenter', function () { cursor.classList.add('cursor--project'); });
      card.addEventListener('mouseleave', function () { cursor.classList.remove('cursor--project'); });
    });

    // Hide cursor when it leaves the window
    document.addEventListener('mouseleave', function () { cursor.style.opacity = '0'; });
    document.addEventListener('mouseenter', function () { cursor.style.opacity = '1'; });
  } else if (cursor) {
    cursor.style.display = 'none';
  }

  /* ---------- Mobile Navigation ---------- */
  var menuBtn = document.getElementById('menuBtn');
  var mobileNav = document.getElementById('mobileNav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      menuBtn.classList.toggle('active');
      menuBtn.setAttribute('aria-expanded', isOpen);
      mobileNav.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile nav when a link is clicked
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Scroll Reveal (Intersection Observer) ---------- */
  var revealElements = document.querySelectorAll('.reveal');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && revealElements.length > 0) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // If reduced motion, reveal everything immediately
    revealElements.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  /* ---------- Active Nav Link on Scroll ---------- */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav__links a');

  if (sections.length > 0 && navLinks.length > 0) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.style.opacity = link.getAttribute('href') === '#' + id ? '1' : '0.5';
          });
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '-80px 0px -40% 0px'
    });

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  /* ---------- Subtle parallax on hero decorative shapes ---------- */
  if (!prefersReducedMotion) {
    var heroShapes = document.querySelectorAll('.hero__shape');
    var heroDots = document.querySelector('.hero__dot-pattern');

    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroShapes.forEach(function (shape, i) {
          var factor = (i + 1) * 0.05;
          shape.style.transform = 'translateY(' + (scrollY * factor) + 'px)' + (i === 1 ? ' rotate(45deg)' : '');
        });
        if (heroDots) {
          heroDots.style.transform = 'translateY(' + (scrollY * 0.03) + 'px)';
        }
      }
    }, { passive: true });
  }

})();
