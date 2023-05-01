import {
  saveToStorage,
  loadFromStorage,
  removeFromStorage,
} from './local-storage';

const themeSwitcherEl = document.querySelector('.theme-switcher__checkbox');
const bodyEl = document.querySelector('body');

const currentTheme = loadFromStorage('darkTheme');
themeSwitcherEl.checked = currentTheme;

themeSwitcherEl.addEventListener('change', onChangeCheckbox);

function onChangeCheckbox() {
  if (themeSwitcherEl.checked) {
    bodyEl.classList.add('dark');
    saveToStorage('darkTheme', 'true');
  } else {
    bodyEl.classList.remove('dark');
    removeFromStorage('darkTheme');
  }
}
onChangeCheckbox();
