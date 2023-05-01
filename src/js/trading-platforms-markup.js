import amazon1x from '../images/trading-platforms/img1_@1x.png';
import amazon2x from '../images/trading-platforms/img1_@2x.png';
import appleBooks1x from '../images/trading-platforms/img2_@1x.png';
import appleBooks2x from '../images/trading-platforms/img2_@2x.png';
import bookShop1x from '../images/trading-platforms/img3_@1x.png';
import bookShop2x from '../images/trading-platforms/img3_@2x.png';

export function createTradingPlatformsMarkup(buy_links) {
  return `
  <ul class="trading-platform__list">
  <li class="trading-platform__item">
    <a
      class="trading-platform__link"
      href="${buy_links[0].url}"
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label="link to amazon"
    >
      <img
        class="trading-platform__logo"
        srcset="${amazon1x} 1x, ${amazon2x} 2x"
        src="${amazon1x}"
        alt="Amazon logo"
        loading="lazy"
      />
    </a>
  </li>
  <li class="trading-platform__item">
    <a
      class="trading-platform__link"
      href="${buy_links[1].url}"
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label="link to apple books"
    >
      <img
        class="trading-platform__logo"
        srcset="${appleBooks1x} 1x, ${appleBooks2x} 2x"
        src="${appleBooks1x}"
        alt="Apple books logo"
        loading="lazy"
      />
    </a>
  </li>
  <li class="trading-platform__item">
    <a
      class="trading-platform__link"
      href="${buy_links[4].url}"
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label="link to Bookshop"
    >
      <img
        class="trading-platform__logo"
        srcset="${bookShop1x} 1x, ${bookShop2x} 2x"
        src="${bookShop1x}"
        alt="Bookshop logo"
        loading="lazy"
      />
    </a>
  </li>
</ul>
  `;
}
