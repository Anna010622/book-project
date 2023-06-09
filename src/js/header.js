const linksEl = document.querySelectorAll('.header__nav-link');

linksEl.forEach(link => {
  if (
    window.location.pathname === '/' ||
    window.location.pathname === '/book-project/'
  ) {
    return;
  }
  if (window.location.pathname === link.getAttribute('href')) {
    link.classList.add('current-link');
  } else {
    link.classList.remove('current-link');
  }
});
