// js/loadMoreBtn.js
const loadMoreBtn = document.querySelector('.load-more');

export function showLoadMoreBtn() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreBtn() {
  loadMoreBtn.classList.add('hidden');
}
