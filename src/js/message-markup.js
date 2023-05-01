import img1 from '../images/empty-page/img_@1x.png';
import img2 from '../images/empty-page/img_@2x.png';

export function createMessageMarkup(selectedCategory, message) {
  const title = selectedCategory.split(' ');
  const titleWithAccent = title.splice(-1).join(' ');
  const titleWithOutAccent = title.join(' ');
  return `
            <div>
              <h1 class="books-section__title">${titleWithOutAccent} <span class="accent">${titleWithAccent}</span></h1>
                <div class="message">
                  <div class="message__inner">
                    <p class="message__text">${message}</p>
                    <div class="message__img">
                      <img
                        class="shopping-list__message-img"
                        srcset="
                          ${img1} 1x,
                          ${img2} 2x
                        "
                        src="${img1}"
                        alt="books"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
            </div>
      `;
}
