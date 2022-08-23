import { SwiperOptions } from 'swiper';

export const swiperConfig1: SwiperOptions = {
  direction: 'vertical',
  navigation: false,
  pagination: false,
  scrollbar: false,
  loop: true,
  autoplay: { delay: 1000 * 4, disableOnInteraction: false },
  speed: 1000
};

export const swiperConfigMarcador: SwiperOptions = {
  direction: 'horizontal',
  navigation: false,
  pagination: false,
  scrollbar: false,
  loop: true,
  autoplay: { delay: 1000 * 2, disableOnInteraction: false },
  speed: 1000
};

export const swiperConfigTabla: SwiperOptions = {
  direction: 'horizontal',
  navigation: false,
  pagination: false,
  scrollbar: false,
  // loop: true,
  // autoplay: { delay: 1000 * 2, disableOnInteraction: false },
  speed: 1000
};
