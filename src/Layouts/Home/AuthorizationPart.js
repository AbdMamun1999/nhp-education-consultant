import React from "react";
import AuthorizationSlider from "./AuthorizationSlider";

const AuthorizationPart = () => {
  return (
    <div>
      <div class="authorization-section brightness-125 pt-20 pb-28">
        <div
          className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-10"
          id="content-section"
        >
          <div className="z-50">
            <h3 className="text-[#fff] font-bold text-3xl tracking-wider leading-10 lg:w-[320px]">
              Authorization And Certificate Of Recognitions
            </h3>
            <p className="text-[#fff] text-[14px] leading-6 my-6 lg:pr-36">
            It is always better to apply through Authorized, Trained, Experienced Consultants. NHP Education Consultants is the Authorized Agent of many UK, USA, Canada, Australia and Malaysian Universities and Colleges.
            </p>
            <button
              className="border border-[#fff] text-[#fff] font-bold px-5 py-2 hover:bg-[#fff] hover:text-[#002147] duration-200"
              type=""
            >
              View More
            </button>
          </div>
          <div className="">
            <AuthorizationSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationPart;
