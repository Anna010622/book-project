const scrollUpBtnEl = document.querySelector('.scroll-up-btn');

scrollUpBtnEl.addEventListener('click', handleScrollUpBth);
document.addEventListener('scroll', handleScroll);

function handleScrollUpBth() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
function handleScroll() {
  let lastScroll = window.innerHeight;

  if (lastScroll < document.documentElement.scrollTop) {
    scrollUpBtnEl.classList.remove('invisible');
  } else {
    scrollUpBtnEl.classList.add('invisible');
  }
}
