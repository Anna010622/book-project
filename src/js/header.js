const linksEl = document.querySelectorAll('.header__nav-link');

linksEl.forEach(link => {
  console.log(window.location.pathname);
  if (window.location.pathname === '/') {
    return;
  }
  if (window.location.pathname === link.getAttribute('href')) {
    link.classList.add('current-link');
  } else {
    link.classList.remove('current-link');
  }
});
