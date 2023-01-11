import React from "react";
import imgone from "../../assests/slider/brock-event.jpg";
import imgthree from "../../assests/slider/canada-eventD20.jpg";
import imgtwo from "../../assests/slider/winnipeg-event.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./UniversitySlicer.css";

import { BsBoxArrowUpRight } from "react-icons/bs";
import { RiEditBoxLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

import { Pagination } from "swiper";

const UniversitySlider = () => {
  return (
    <div className="my-20 w-[80%] mx-auto">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        onSlideChange={() => console.log("slide change")}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div>
            <div className="content-university">
              <div className="content-img">
                <img src={imgone} alt="" />
              </div>
              <div className="text-[#fff] flex justify-center items-center flex-col gap-y-4  animate-div">
                <span>
                  <BsBoxArrowUpRight size={25} />
                </span>
                <span>
                  <RiEditBoxLine size={25} />
                </span>
                <span>
                  <FaFacebookF size={25} />
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-[18px] font-bold text-center text-primary hover:text-red my-3 duration-200">
                Canadian University Application Day
              </h2>
              <p className="text-center">Pan pacific sonargaon hottel</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="content-university">
              <div className="content-img">
                <img src={imgone} alt="" />
              </div>
              <div className="text-[#fff] flex justify-center items-center flex-col gap-y-4  animate-div">
                <span>
                  <BsBoxArrowUpRight size={25} />
                </span>
                <span>
                  <RiEditBoxLine size={25} />
                </span>
                <span>
                  <FaFacebookF size={25} />
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-[18px] font-bold text-center text-primary hover:text-red my-3 duration-200">
                Canadian University Application Day
              </h2>
              <p className="text-center">Pan pacific sonargaon hottel</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="content-university">
              <div className="content-img">
                <img src={imgone} alt="" />
              </div>
              <div className="text-[#fff] flex justify-center items-center flex-col gap-y-4  animate-div">
                <span>
                  <BsBoxArrowUpRight size={25} />
                </span>
                <span>
                  <RiEditBoxLine size={25} />
                </span>
                <span>
                  <FaFacebookF size={25} />
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-[18px] font-bold text-center text-primary hover:text-red my-3 duration-200">
                Canadian University Application Day
              </h2>
              <p className="text-center">Pan pacific sonargaon hottel</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="content-university">
              <div className="content-img">
                <img src={imgone} alt="" />
              </div>
              <div className="text-[#fff] flex justify-center items-center flex-col gap-y-4  animate-div">
                <span>
                  <BsBoxArrowUpRight size={25} />
                </span>
                <span>
                  <RiEditBoxLine size={25} />
                </span>
                <span>
                  <FaFacebookF size={25} />
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-[18px] font-bold text-center text-primary hover:text-red my-3 duration-200">
                Canadian University Application Day
              </h2>
              <p className="text-center">Pan pacific sonargaon hottel</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="content-university">
              <div className="content-img">
                <img src={imgone} alt="" />
              </div>
              <div className="text-[#fff] flex justify-center items-center flex-col gap-y-4  animate-div">
                <span>
                  <BsBoxArrowUpRight size={25} />
                </span>
                <span>
                  <RiEditBoxLine size={25} />
                </span>
                <span>
                  <FaFacebookF size={25} />
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-[18px] font-bold text-center text-primary hover:text-red my-3 duration-200">
                Canadian University Application Day
              </h2>
              <p className="text-center">Pan pacific sonargaon hottel</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="content-university">
              <div className="content-img">
                <img src={imgone} alt="" />
              </div>
              <div className="text-[#fff] flex justify-center items-center flex-col gap-y-4  animate-div">
                <span>
                  <BsBoxArrowUpRight size={25} />
                </span>
                <span>
                  <RiEditBoxLine size={25} />
                </span>
                <span>
                  <FaFacebookF size={25} />
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-[18px] font-bold text-center text-primary hover:text-red my-3 duration-200">
                Canadian University Application Day
              </h2>
              <p className="text-center">Pan pacific sonargaon hottel</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="content-university">
              <div className="content-img">
                <img src={imgone} alt="" />
              </div>
              <div className="text-[#fff] flex justify-center items-center flex-col gap-y-4  animate-div">
                <span>
                  <BsBoxArrowUpRight size={25} />
                </span>
                <span>
                  <RiEditBoxLine size={25} />
                </span>
                <span>
                  <FaFacebookF size={25} />
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-[18px] font-bold text-center text-primary hover:text-red my-3 duration-200">
                Canadian University Application Day
              </h2>
              <p className="text-center">Pan pacific sonargaon hottel</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="content-university">
              <div className="content-img">
                <img src={imgone} alt="" />
              </div>
              <div className="text-[#fff] flex justify-center items-center flex-col gap-y-4  animate-div">
                <span>
                  <BsBoxArrowUpRight size={25} />
                </span>
                <span>
                  <RiEditBoxLine size={25} />
                </span>
                <span>
                  <FaFacebookF size={25} />
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-[18px] font-bold text-center text-primary hover:text-red my-3 duration-200">
                Canadian University Application Day
              </h2>
              <p className="text-center">Pan pacific sonargaon hottel</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="content-university">
              <div className="content-img">
                <img src={imgone} alt="" />
              </div>
              <div className="text-[#fff] flex justify-center items-center flex-col gap-y-4  animate-div">
                <span>
                  <BsBoxArrowUpRight size={25} />
                </span>
                <span>
                  <RiEditBoxLine size={25} />
                </span>
                <span>
                  <FaFacebookF size={25} />
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-[18px] font-bold text-center text-primary hover:text-red my-3 duration-200">
                Canadian University Application Day
              </h2>
              <p className="text-center">Pan pacific sonargaon hottel</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default UniversitySlider;
