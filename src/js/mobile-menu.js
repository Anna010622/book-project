const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const bodyEl = document.querySelector('body');

openMenuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
  mobileMenu.classList.toggle('is-open');
  bodyEl.classList.toggle('noScroll');
}

const linksEl = document.querySelectorAll('.mobile__nav-link');

linksEl.forEach(link => {
  if (window.location.pathname === '/') {
    return;
  }
  if (window.location.pathname === link.getAttribute('href')) {
    link.classList.add('current-link');
  } else {
    link.classList.remove('current-link');
  }
});
