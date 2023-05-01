import { getBookById } from './get-book-by-id';
import iconsSprite from '../images/icons.svg';
// import { showSpinner, hideSpinner } from './loader';
import { createTradingPlatformsMarkup } from './trading-platforms-markup';
import {
  saveToStorage,
  loadFromStorage,
  removeFromStorage,
} from './local-storage';

const body = document.querySelector('body');
const booksSectionEl = document.querySelector('.books-section');
const backdropEl = document.querySelector('.modal-book__backdrop');

const STORAGE_KEY = 'books';
let bookList = [];

booksSectionEl.addEventListener('click', openModal);

async function openModal(event) {
  if (!event.target.dataset.book) {
    return;
  }
  // showSpinner();

  if (loadFromStorage(STORAGE_KEY) !== undefined) {
    bookList = loadFromStorage(STORAGE_KEY);
  }

  try {
    const bookId = event.target.dataset.book;
    const response = await getBookById(bookId);
    const book = response.data;

    const modalMarkup = createModalMarkup(book);

    backdropEl.innerHTML = modalMarkup;
    // hideSpinner();
    backdropEl.classList.remove('hidden-modal');
    body.style.marginRight = `${getScrollbarWidth()}px`;
    body.classList.add('noScroll');

    const btnAdd = document.querySelector('.js-btn-add');
    btnAdd.addEventListener('click', onBtnAdd);

    const blockRemove = document.querySelector('.remove-block');

    if (bookList.find(bookObj => bookObj._id === book._id)) {
      blockRemove.classList.remove('hidden-btn');
      btnAdd.classList.add('hidden-btn');
    }

    function onBtnAdd() {
      if (!bookList.find(bookObj => bookObj._id === book._id)) {
        bookList.push(book);
        saveToStorage(STORAGE_KEY, bookList);
        blockRemove.classList.remove('hidden-btn');
        btnAdd.classList.add('hidden-btn');
      }
    }

    const btnRemove = document.querySelector('.js-btn-remove');
    btnRemove.addEventListener('click', onBtnRemove);
    function onBtnRemove() {
      if (bookList.find(bookObj => bookObj._id === book._id)) {
        const foundBook = bookList.find(bookObj => bookObj._id === book._id);
        const bookIndex = bookList.indexOf(foundBook);
        bookList.splice(bookIndex, 1);
        saveToStorage(STORAGE_KEY, bookList);
        blockRemove.classList.add('hidden-btn');
        btnAdd.classList.remove('hidden-btn');
        if (loadFromStorage(STORAGE_KEY).length === 0) {
          removeFromStorage(STORAGE_KEY);
        }
      }
    }
    backdropEl.addEventListener('click', onBackdropClick);

    const btnClose = document.querySelector('[data-modal-close]');
    btnClose.addEventListener('click', closeModal);
    window.addEventListener('keydown', onEscKeyPress);
  } catch (error) {
    console.log(error);
  }
}

function createModalMarkup({
  book_image,
  title,
  author,
  description,
  buy_links,
}) {
  return `
  <div class="modal-book">
    <button class="modal__btn-close" type="button" data-modal-close>
      <svg class="modal__button-icon " width="28" height="28">
        <use href=${iconsSprite}#icon-close></use>
      </svg>
    </button>
    <div class="modal__inner">
      <div class="modal__img-wrapper">
        <img class="modal__img" src="${book_image}" alt="book's image" />
      </div>
      <div class="modal__information">
        <p class="book__title">${title}</p>
        <p class="book__author">${author}</p>
        <p class="book__description">${description}</p>
        ${createTradingPlatformsMarkup(buy_links)}
      </div>
    </div>
    <button class="modal__button js-btn-add" type="button" >Add to shopping list</button>
    <div class="remove-block hidden-btn">
      <button class="modal__button modal__button--remote js-btn-remove" type="button">
        Remove from the shopping list
      </button>
      <p class="modal__message">
        Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
      </p>
    </div>
  </div>
  `;
}

function closeModal() {
  backdropEl.classList.add('hidden-modal');
  body.classList.remove('noScroll');
  body.style.marginRight = 0;
  backdropEl.removeEventListener('click', onBackdropClick);
  window.removeEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeModal();
  }
}

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}
