import React from "react";
import imgone from "../../assests/banner/image-slider-1.webp";
import imgtwo from "../../assests/banner/image-slider-2.webp";
import imgthree from "../../assests/banner/image-slider-3.jpg";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Pagination } from "swiper";

//
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        effect={"fade"}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="bg-secondary"
      >
        <SwiperSlide>
          <div className="bannder-slider-one">
            <div className="w-[80%] mx-auto flex items-center h-full">
              <div className="z-50 flex flex-col gap-y-5">
                <h2 className="text-red text-2xl font-semibold capitalize">
                  Welcome to NHP Education Consultants!
                </h2>
                <h3 className="text-[#fff] text-[45px] font-bold uppercase">
                  Experience you need. Results you want.
                </h3>
                <div>
                  <div className="w-[200px] h-1 bg-red"></div>
                </div>
                <h4 className="text-[#fff] text-[22px] font-[500]">
                  NHP Education Consultants is one of the best and leading
                  education consultancy firms in Dhaka, Bangladesh.
                </h4>
                <div>
                  <button
                    type=""
                    className="text-[#fff] mt-4 px-5 py-3 border-2 border-[#fff] uppercase font-bold hover:bg-[#fff] hover:text-primary duration-200"
                  >
                    read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bannder-slider-two">
            <div className="w-[80%] mx-auto flex items-center h-full">
              <div className="z-50 flex flex-col gap-y-5">
                <h2 className="text-red text-2xl font-semibold capitalize">
                  Welcome to NHP Education Consultants!
                </h2>
                <h3 className="text-[#fff] text-[45px] font-bold uppercase">
                  Experience you need. Results you want.
                </h3>
                <div>
                  <div className="w-[200px] h-1 bg-red"></div>
                </div>
                <h4 className="text-[#fff] text-[22px] font-[500]">
                  NHP Education Consultants is one of the best and leading
                  education consultancy firms in Dhaka, Bangladesh.
                </h4>
                <div>
                  <button
                    type=""
                    className="text-[#fff] mt-4 px-5 py-3 border-2 border-[#fff] uppercase font-bold hover:bg-[#fff] hover:text-primary duration-200"
                  >
                    read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bannder-slider-three">
            <div className="w-[80%] mx-auto flex items-center h-full">
              <div className="z-50 flex flex-col gap-y-5">
                <h2 className="text-red text-2xl font-semibold capitalize">
                  Welcome to NHP Education Consultants!
                </h2>
                <h3 className="text-[#fff] text-[45px] font-bold uppercase">
                  Experience you need. Results you want.
                </h3>
                <div>
                  <div className="w-[200px] h-1 bg-red"></div>
                </div>
                <h4 className="text-[#fff] text-[22px] font-[500]">
                  NHP Education Consultants is one of the best and leading
                  education consultancy firms in Dhaka, Bangladesh.
                </h4>
                <div>
                  <button
                    type=""
                    className="text-[#fff] mt-4 px-5 py-3 border-2 border-[#fff] uppercase font-bold hover:bg-[#fff] hover:text-primary duration-200"
                  >
                    read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="py-10 bg-primary text-[#fff]">
        <div className="flex items-center justify-between w-[80%] mx-auto">
          <div>
            <h2 className="text-[24px] font-semibold">
              Get a free consultation
            </h2>
            <p>
              Book an appointment with our experieneced consultanats to discuss
              your study abroad options.
            </p>
          </div>
          <div>
            <button
              type=""
              className="bg-[#fff] py-2 px-5 text-red text-xl font-bold hover:text-primary duration-200"
            >
              Book An Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
