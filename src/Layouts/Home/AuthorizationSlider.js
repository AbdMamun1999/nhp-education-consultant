import React from "react";
import imgone from "../../assests/slider/bc-certificate.jpg";
import imgtwo from "../../assests/slider/brock-authorization.jpg";
import imgthree from "../../assests/slider/icef-certificate.jpg";
import imgfour from "../../assests/slider/manitoba-authorization.jpg";
import imgfive from "../../assests/slider/niagara-authorization.jpg";
import imgsix from "../../assests/slider/pier-certificate.jpg";
import imgseven from "../../assests/slider/saskatchewan-authorization.jpg";
import imgeight from "../../assests/slider/semo-authorization.jpg";
import imgnine from "../../assests/slider/seneca-authorization.jpg";
import imgnten from "../../assests/slider/unt-authorization.jpg";
import imgneleven from "../../assests/slider/uwe-authorization.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const AuthorizationSlider = () => {
  const images = [
    { img: imgone },
    { img: imgtwo },
    { img: imgthree },
    { img: imgfour },
    { img: imgfive },
    { img: imgsix },
    { img: imgseven },
    { img: imgeight },
    { img: imgnine },
    { img: imgnten },
    { img: imgneleven },
  ];
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="bg-secondary"
      >
        {images.map((image, index) => (
          <SwiperSlide>
            <img src={image.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AuthorizationSlider;
