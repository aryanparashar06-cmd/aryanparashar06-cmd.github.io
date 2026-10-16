// Aryan Parashar — personal portfolio
// Plain JavaScript: no npm install, build system, or API keys required.

document.documentElement.classList.add('js-active');

const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const themeToggle = document.getElementById('themeToggle');
const filters = document.querySelectorAll('[data-filter]');
const projectCards = document.querySelectorAll('[data-category]');

const setMenuOpen = (isOpen) => {
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  mobileNav.classList.toggle('is-open', isOpen);
  mobileNav.inert = !isOpen;
  document.body.classList.toggle('menu-open', isOpen);
};

menuToggle.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});

mobileNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});

window.matchMedia('(min-width: 821px)').addEventListener('change', (event) => {
  if (event.matches) setMenuOpen(false);
});

// Theme persists across visits when browser storage is available.
const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  themeToggle.setAttribute('title', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
};
let savedTheme = 'dark';
try { savedTheme = localStorage.getItem('aryan-portfolio-theme') || 'dark'; } catch (_) {}
applyTheme(savedTheme === 'light' ? 'light' : 'dark');

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  try { localStorage.setItem('aryan-portfolio-theme', nextTheme); } catch (_) {}
});

// Real project filtering: hide cards that don't match the selected category.
filters.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach((filter) => {
      const selected = filter === button;
      filter.classList.toggle('is-active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    projectCards.forEach((card) => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
    });
  });
});

// Reveal on scroll, while respecting reduced-motion preferences.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.09, rootMargin: '0px 0px 40px 0px' });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

// Current year automatically updates.
document.getElementById('year').textContent = String(new Date().getFullYear());
