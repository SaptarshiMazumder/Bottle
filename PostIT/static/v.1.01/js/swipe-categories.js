var swiper = new Swiper(".home-page-categories", {
    autoplay: false,
    mousewheel: {
        releaseOnEdges: true,
        sensitivity: 10,
    },
    spaceBetween: 1,
    slidesPerView: 'auto',
    loop: false,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const categories_container = document.querySelector(".home-page-categories");

categories_container.addEventListener('wheel', (e) => {
    e.preventDefault();
    categories_container.scrollLeft += e.deltaY;
    console.log("Scrolled mouse");
})