import configureNotiflix from './jsModules/utils/configureNotiflix.js';
import {
  onSearchFormSubmit,
  onLoadMoreButtonClick,
} from './jsModules/components/handlers.js';

export const refs = {
  searchFormEl: document.querySelector('.search-form'),
  loadMoreBtnEl: document.querySelector('.load-more'),
  galleryEl: (gallery = document.querySelector('.gallery')),
  searchQuery: '',
  currentPage: 1,
};

refs.searchFormEl.addEventListener('submit', onSearchFormSubmit);
refs.loadMoreBtnEl.addEventListener('click', onLoadMoreButtonClick);
