import Swiper, { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const FeaturedCollection = {
  onLoad() {
    this._init();
  },

  _init() {
    var swiper = Swiper;
    var init = false;

    function swiperCard() {
      if (window.innerWidth <= 768) {
        if (!init) {
          init = true;
          swiper = new Swiper(".swiper-col", {
            spaceBetween: 20,
            slidesPerView: 1,
            pagination: true,
            modules: [Pagination],
            pagination: {
              el: ".swiper-pagination",
              type: 'bullets',
              clickable: true,
            },
          });
        }
      } else if (init) {
        swiper.destroy();
        init = false;
      }
    }
    swiperCard();
    window.addEventListener("resize", swiperCard);
  }
};

export default FeaturedCollection;