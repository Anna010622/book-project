const spinner = document.querySelector('.loader');

export function showSpinner() {
  spinner.classList.remove('hidden-loader');
}

export function hideSpinner() {
  spinner.classList.add('hidden-loader');
}
