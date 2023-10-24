import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { showLoadMoreButton } from './loadMoreButton.js';
import { refs } from '../index.js';

export function renderImageGallery(images) {
  const markup = images
    .map(image => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `
      <div class="gallery__card">
        <a href="${largeImageURL}" class="gallery__link" target="_blank">
          <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <ul class="card-info">
          <li class="card-info__item">
            <b>Likes:</b>
            <span>${likes}</span>
          </li>
          <li class="card-info__item">
            <b>Views:</b>
            <span>${views}</span>
          </li>
          <li class="card-info__item">
            <b>Comments:</b>
            <span>${comments}</span>
          </li>
          <li class="card-info__item">
            <b>Downloads:</b>
            <span>${downloads}</span>
          </li>
        </ul>
      </div>
    `;
    })
    .join('');

  refs.galleryEl.insertAdjacentHTML('beforeend', markup);
}

export function clearImageGallery(gallery) {
  refs.galleryEl.innerHTML = '';
}

function initLightbox() {
  const lightbox = new SimpleLightbox('.gallery__link', {});
  lightbox.refresh();
}

export function renderImages(images) {
  if (images) {
    renderImageGallery(images, refs.galleryEl);
    showLoadMoreButton();
    initLightbox();
  }
}
