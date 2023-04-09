var mySwiper = new Swiper ('.slide-content', {
  autoplay: false,
  spaceBetween: 1,
  slidesPerView: 'auto',
  loop: false,
  // If we need pagination
  pagination: {
    el:'.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});