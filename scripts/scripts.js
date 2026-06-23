

/*AOS SCRIPT ------------------------------------------------------*/

AOS.init({
    duration: 1200,
    once: true
});

const swiper = new Swiper(".mySwiper", {

    loop: true,

    centeredSlides: true,

    slidesPerView: 1,

    speed: 1500,



    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

/*MOBILE BTN SCRIPT----------------------------------------------------*/

const mobileBtn = document.querySelector(".mobile-btn");
const mobileMenu = document.querySelector(".mobile-menu");

mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

