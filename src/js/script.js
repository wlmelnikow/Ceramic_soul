import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

} catch (e) {}


// Styles
import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";
import "/src/sass/style.scss";


