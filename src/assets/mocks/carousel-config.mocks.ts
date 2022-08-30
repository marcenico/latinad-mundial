import { SwiperOptions } from 'swiper';

export const swiperConfig1: SwiperOptions = {
  direction: 'vertical',
  navigation: false,
  pagination: false,
  scrollbar: false,
  loop: true,
  autoplay: {
    delay: 1000 * 8, // 8 Segundos
    disableOnInteraction: false
  },
  speed: 1000
};

export const swiperConfigMarcador: SwiperOptions = {
  direction: 'horizontal',
  navigation: false,
  pagination: false,
  scrollbar: false,
  loop: true,
  speed: 1000
};

export const swiperConfigTabla: SwiperOptions = {
  direction: 'horizontal',
  navigation: false,
  pagination: false,
  scrollbar: false,
  loop: true,
  autoplay: {
    delay: 1000 * 4, // $ Segundos
    disableOnInteraction: false
  },
  speed: 1000
};
