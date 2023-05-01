import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

import { charitableFoundations } from './charitable-foundations-array';

const foundationListEl = document.querySelector('.foundations__list');

showFoundations();

function showFoundations() {
  const markup = charitableFoundations
    .map((foundation, index) => {
      const number = index + 1 <= 9 ? `0${index + 1}` : index + 1;
      return makeFoundationsMarkup(foundation, number);
    })
    .join(' ');

  foundationListEl.innerHTML = markup;
}

function makeFoundationsMarkup({ url, img, img2, title }, number) {
  return `
    <li class="foundations__item swiper-slide">
        <span class="foundation__number">${number}</span>
        <a
          class="foundations__link"
          href="${url}"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="link to the foundation ${title}"
        >
          <img
            class="foundations__logo"
            srcset="${img} 1x, ${img2} 2x"
            src="${img}"
            alt="logo of the foundation ${title}"
            loading="lazy"
          />
        </a>
    </li>
  `;
}

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
  },
  spaceBetween: 20,

  slidesPerView: 4,
  breakpoints: {
    768: {
      slidesPerView: 6,
    },
  },

  rewind: true,
});
