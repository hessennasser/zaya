// start menu in header 
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav");
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    nav.classList.toggle("active");
});
// end menu in header

// start btn-up 
btnUp = document.querySelector('.up-btn');

window.addEventListener('scroll', function () {
    if (window.scrollY > 250) {
        btnUp.classList.add("active");
    } else {
        btnUp.classList.remove("active");
    }
});
btnUp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
// end btn-up 
// start btn-up 
whatsBtn = document.querySelector('.whats-btn');
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        whatsBtn.classList.add("active");
    } else {
        whatsBtn.classList.remove("active");
    }
});
// end btn-up

var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000, // delay in milliseconds
    },
});