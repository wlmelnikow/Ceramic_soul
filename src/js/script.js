import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const burger = document.querySelector(".burger"),
    close = document.querySelector(".header__menu-close"),
    menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
    menu.classList.add("header__menu_active");
    // Disable scrolling when the menu is open
    document.body.style.overflow = "hidden"; 
});

close.addEventListener("click", () => {
    menu.classList.remove("header__menu_active");
    // Re-enable scrolling when the menu is closed
    document.body.style.overflow = "";
});


try {
    new Swiper('.works__slider', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".icon-right-open",
            prevEl: ".icon-left-open",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            // when window width is >= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            1920: {
                spaceBetween: 5,
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        modules: [Navigation, Pagination],
    });

} catch (e) { }


// Styles
import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";
import "/src/sass/style.scss";


