document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    grabCursor: true,
    initialSlide: 4,
    slidesPerView: "auto",
    spaceBetween: 10,
    speed: 1000,
    freeMode: false,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: { slidesPerView: 4.17, spaceBetween: 10 },
      640: { slidesPerView: 3.17, spaceBetween: 10 },
      580: { slidesPerView: 2.25, spaceBetween: 10 },
      420: { slidesPerView: 1, spaceBetween: 10 },
    },
  });
});
