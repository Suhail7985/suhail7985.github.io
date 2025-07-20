const navToggle = document.getElementById('navToggle');
const nav       = document.getElementById('navbar');

navToggle.addEventListener('click', () => nav.classList.toggle('show'));

/* ===== highlight active link on scroll ===== */
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 80; // offset for fixed header
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop && scrollY <= sec.offsetTop + sec.offsetHeight) {
      document.querySelectorAll('.nav a').forEach(link => link.classList.remove('active'));
      document.querySelector(`.nav a[href*=${sec.id}]`)?.classList.add('active');
    }
  });
});

/* ===== contact form basic demo ===== */
window.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const formStatus  = document.getElementById('formStatus');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      formStatus.textContent = 'Sending…';

      // ⚠️  Replace with real endpoint / Nodemailer call
      setTimeout(() => formStatus.textContent = 'Thank you! I will get back to you soon.', 1000);
    });
  }
});

/* ==== DARK-/LIGHT-MODE TOGGLE ==== */
(function initDarkMode () {
  // build a button once the header exists
  const header = document.querySelector('.header');
  const btn    = document.createElement('button');
  btn.className = 'btn theme-btn';
  btn.style.marginLeft = '1rem';
  header.appendChild(btn);

  // read previous choice or fall back to OS preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let theme = localStorage.getItem('theme') ?? (prefersDark ? 'dark' : 'light');
  apply(theme);

  // toggle on click
  btn.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    apply(theme);
  });

  function apply(mode) {
    document.body.classList.toggle('dark-mode', mode === 'dark');
    btn.textContent = mode === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('aria-label', `Switch to ${mode === 'dark' ? 'light' : 'dark'} theme`);
  }
})();

/* ==== Scroll Reveal ==== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1,
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ===== Ensure projects are shown ===== */
window.addEventListener('DOMContentLoaded', () => {
  const projectSection = document.querySelector('#projects');
  if (projectSection) projectSection.style.display = 'block';
});