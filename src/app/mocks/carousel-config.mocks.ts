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
  autoplay: { delay: 2000, disableOnInteraction: false }
};
