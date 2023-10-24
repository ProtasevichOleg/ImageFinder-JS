import Notiflix from 'notiflix';
import { fetchImagesFromPixabayApi } from '../api/pixabayApiService.js';
import { renderImages } from './renderers.js';
import { refs } from '../index.js';
import { hideLoadMoreButton } from './loadMoreButton.js';

export async function fetchImages() {
  try {
    const { hits, totalHits } = await fetchImagesFromPixabayApi(
      refs.searchQuery,
      refs.currentPage
    );

    if (hits.length === 0 && refs.currentPage === 1) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return { totalHits: 0, error: true };
    }

    if (hits.length === 0 || refs.totalImagesFetched >= totalHits) {
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
      hideLoadMoreButton();
      return { totalHits: 0, error: true };
    }

    refs.totalImagesFetched += hits.length;
    return { images: hits, totalHits };
  } catch (error) {
    Notiflix.Notify.failure('An error occurred. Please try again.');
    console.error(error);
    return { error: true };
  }
}

export async function fetchAndRenderImages() {
  const { images, totalHits, error } = await fetchImages();

  if (!error) {
    if (images && refs.currentPage === 1) {
      Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
    }

    renderImages(images);
  } else {
    hideLoadMoreButton();
  }
  if (refs.totalImagesFetched >= totalHits) {
    hideLoadMoreButton();
  }
}
