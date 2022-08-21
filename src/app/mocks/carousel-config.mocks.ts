import { SwiperOptions } from 'swiper';

export const swiperConfig1: SwiperOptions = {
  direction: 'vertical',
  navigation: false,
  pagination: false,
  scrollbar: false,
  loop: true,
  autoplay: { delay: 1000 * 100, disableOnInteraction: false }
};

export const swiperConfigMarcador: SwiperOptions = {
  direction: 'horizontal',
  navigation: false,
  pagination: false,
  scrollbar: false,
  loop: true,
  autoplay: { delay: 1000 * 2, disableOnInteraction: false }
};
