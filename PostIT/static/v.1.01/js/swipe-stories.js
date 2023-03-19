var mySwiper = new Swiper ('.slide-content', {
  autoplay: false,
  spaceBetween: 1,
  slidesPerView: 'auto',
  loop: true,
  // If we need pagination
  pagination: {
    el:'.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  
  // Navigation arrows
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
});