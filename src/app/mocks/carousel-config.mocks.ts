import { SwiperOptions } from 'swiper';

export const swiperConfig1: SwiperOptions = {
  initialSlide: 0,
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: true,
  pagination: false,
  scrollbar: false,
  loop: true,
  rewind: true,
  autoplay: { delay: 1000 * 10, disableOnInteraction: false }
};

export const swiperConfigMarcador: SwiperOptions = {
  initialSlide: 0,
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: true,
  pagination: false,
  scrollbar: false,
  loop: true,
  autoplay: { delay: 1000 * 2, disableOnInteraction: false }
};
