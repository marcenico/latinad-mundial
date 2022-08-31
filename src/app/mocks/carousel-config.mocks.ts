import { SwiperOptions } from 'swiper';

export const swiperConfig1: any = {
  direction: 'vertical',
  navigation: false,
  pagination: false,
  scrollbar: false,
  rewind: true,
  autoplay: {
    disableOnInteraction: false
  },
  speed: 500,
  delaySlide1: 1000 * 4, // Marcador
  delaySlide2: 1000 * 4, // Proximos partidos
  delaySlide3: 1000 * 4 // Tabla de puntos
};

export const swiperConfigMarcador: SwiperOptions = {
  direction: 'horizontal',
  navigation: false,
  pagination: false,
  scrollbar: false,
  rewind: true,
  speed: 1000
};

export const swiperConfigTabla: SwiperOptions = {
  direction: 'horizontal',
  navigation: false,
  pagination: false,
  scrollbar: false,
  rewind: true,
  autoplay: {
    delay: 1000 * 4, // $ Segundos
    disableOnInteraction: false
  },
  speed: 1000
};
