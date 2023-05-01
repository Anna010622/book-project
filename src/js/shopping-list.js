import {
  saveToStorage,
  loadFromStorage,
  removeFromStorage,
} from './local-storage';
import { createTradingPlatformsMarkup } from './trading-platforms-markup';
import iconsSprite from '../images/icons.svg';

const shoppingListEl = document.querySelector('.shopping-list__books');
const STORAGE_KEY = 'books';
const bookList = loadFromStorage(STORAGE_KEY);

shoppingListEl.addEventListener('click', removeBook);

if (bookList !== undefined) {
  showBooks();
} else {
  showMessage();
}

function showBooks() {
  const booksMarkup = bookList.map(book => createBookMarkup(book));
  shoppingListEl.innerHTML = booksMarkup.join(' ');
}

function createBookMarkup({
  book_image,
  title,
  list_name,
  author,
  description,
  buy_links,
  _id,
}) {
  return `
  <li class="shopping-list__item">
    <button class="shopping-list__button-remote js-btn-remove" type="button" data-book="${_id}">
      <svg class="shopping-list__button-icon" width="16" height="16" data-book="${_id}">
        <use href="${iconsSprite}#icon-dump" data-book="${_id}"></use>
      </svg>
    </button>
    <div class="book__img-wrapper">
      <img class="book__img" src="${book_image}" alt="book cover" />
    </div>
    
    <p class="book__title">${title}</p>
    <p class="book__category">${list_name}</p>

    ${createTradingPlatformsMarkup(buy_links)}
    
    <p class="book__author">${author}</p>
    <p class="book__description">${description}</p>
  </li>
  `;
}

function removeBook(event) {
  if (!event.target.dataset.book) {
    return;
  }

  const id = event.target.dataset.book;

  if (bookList.find(bookObj => bookObj._id === id)) {
    const foundBook = bookList.find(bookObj => bookObj._id === id);
    const bookIndex = bookList.indexOf(foundBook);
    bookList.splice(bookIndex, 1);
    saveToStorage(STORAGE_KEY, bookList);
    showBooks();

    if (loadFromStorage(STORAGE_KEY).length === 0) {
      removeFromStorage(STORAGE_KEY);
      showMessage();
    }
  }
}

function showMessage() {
  const message = document.querySelector('.shopping-list__message');
  message.classList.remove('hidden-message');
}
