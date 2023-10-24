import Notiflix from 'notiflix';

export default Notiflix.Notify.init({
  width: '280px',
  position: 'right-top',
  fontSize: '14px',
  cssAnimation: true,
  cssAnimationStyle: 'fade',
  cssAnimationDuration: 200,
  success: {
    background: '#32c682',
    textColor: '#fff',
    notiflixIconColor: 'rgba(255, 255, 255, 0.5)',
  },
  failure: {
    background: '#ff5549',
    textColor: '#fff',
    notiflixIconColor: 'rgba(255, 255, 255, 0.5)',
  },
  warning: {
    background: '#eebf31',
    textColor: '#fff',
    notiflixIconColor: 'rgba(255, 255, 255, 0.5)',
  },
  info: {
    background: '#26c0d3',
    textColor: '#fff',
    notiflixIconColor: 'rgba(255, 255, 255, 0.5)',
  },
});
