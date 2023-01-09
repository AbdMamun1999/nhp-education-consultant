import React from "react";
import { MdCall } from "react-icons/md";
import { ImFacebook, ImTwitter, ImLinkedin2 } from "react-icons/im";
import { TfiYoutube } from "react-icons/tfi";
import { BsFillClockFill } from "react-icons/bs";
import "./Navbar.css";

const NavbarTop = () => {
  return (
    <div className="bg-[#002147]">
      <div className="w-[78%] mx-auto flex flex-col lg:flex-row justify-between">
        <div className="flex items-center">
          <div className="flex items-center ">
            <span>
              <MdCall color="#C2D7EF" />
            </span>
            <p className="text-[14px] px-[20px] border-r-2 text-[#C2D7EF] font-sans tracking-wider clear-left flex flex-col lg:flex-row">
              <span>Phone :</span> <span>+8801755707070;</span>
              <span>+8801715322220</span>
            </p>
          </div>
          <div className="flex items-center pl-[20px]">
            <span>
              <BsFillClockFill color="#C2D7EF" />
            </span>
            <p className="px-[20px] text-[#C2D7EF] font-sans tracking-wider text-[14px]">
              We are open: Sat - Thu: 11 am - 8 pm
            </p>
          </div>
        </div>
        <div className="flex gap-x-10">
          <div>
            <button
              type=""
              className="text-[#C2D7EF] bg-[#FF0000] font-semibold px-[22px] py-5 font-sans hover:text-[#002147] duration-500 ease-in-out uppercase"
            >
              Mobile Website
            </button>
          </div>
          <ul className="flex gap-x-4 items-center">
            <li>
              <a href="#">
                <ImFacebook
                  size={20}
                  className="text-[#C2D7EF] hover:text-[#FF0000] duration-500 ease-in-out"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <ImTwitter className="text-[#C2D7EF] hover:text-[#FF0000] duration-500 ease-in-out" />
              </a>
            </li>
            <li>
              <a href="#">
                <ImLinkedin2 className="text-[#C2D7EF] hover:text-[#FF0000] duration-500 ease-in-out" />
              </a>
            </li>
            <li>
              <a href="#">
                <TfiYoutube className="text-[#C2D7EF] hover:text-[#FF0000] duration-500 ease-in-out" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
