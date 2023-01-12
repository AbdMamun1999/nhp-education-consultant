import React from "react";
import { MdCall } from "react-icons/md";
import { ImFacebook, ImTwitter, ImLinkedin2 } from "react-icons/im";
import { TfiYoutube } from "react-icons/tfi";
import { BsFillClockFill } from "react-icons/bs";
import "./Navbar.css";
import SocialSite from "./SocialSite";

const NavbarTop = () => {
  return (
    <div className="bg-[#002147] py-3 lg:py-5">
      <div className="w-[90%] lg:w-[78%] mx-auto flex lg:flex-row justify-between">
        <div className="flex flex-row lg:items-center">
          <div className="flex items-center ">
            <span>
              <MdCall color="#C2D7EF" />
            </span>
            <p className="w-full text-[14px]  px-[20px] lg:border-r-2 text-[#C2D7EF] font-sans tracking-wider clear-left flex lg:flex-row">
              <span>Phone :</span> <span>+8801755707070;</span>
              <span>+8801715322220</span>
            </p>
          </div>
          <div className="hidden lg:flex items-center lg:pl-[20px]  lg:visible">
            <span>
              <BsFillClockFill color="#C2D7EF" />
            </span>
            <p className="px-[20px] text-[#C2D7EF] font-sans tracking-wider lg:text-[14px]">
              We are open: Sat - Thu: 11 am - 8 pm
            </p>
          </div>
        </div>
        <div className="flex gap-x-10">
          {/* <div>
            <button
              type=""
              className="text-[#C2D7EF] bg-[#FF0000] font-semibold px-[22px] py-5 font-sans hover:text-[#002147] duration-500 ease-in-out uppercase"
            >
              Mobile Website
            </button>
          </div> */}
          <SocialSite />
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
