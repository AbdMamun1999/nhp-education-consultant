import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import "./Footer.css";
import footerlogo from "../../assests/images/nhp-footer-logo.png";
import SocialSite from "./SocialSite";

const Footer = () => {
  return (
    <section className="bg-primary py-14">
      <div className="grid lg:grid-cols-4 gap-8 text-[#fff] w-[80%] mx-auto">
        <div>
          <div>
            <img src={footerlogo} alt="" />
          </div>
          <div className="my-8 font-bold">
            <i>- from possibility to reality -</i>
          </div>
          <SocialSite />
        </div>
        <div>
          <h6 className="text-[26px] mb-9 font-bold uppercase">Quick Links</h6>
          <ul className="flex flex-col gap-y-1  ">
           
            <li className="mb-0 pb-[-3px]">
              <a href="" className="footer-nav">
                <div className="flex flex-row items-center ">
                  <span className="text-[#fff] w-5 text-center font-bold box-border footer-nav-icon duration-200">
                    <RiArrowRightSLine />
                  </span>
                  <span className="text-[#fff] text-[14px]">
                    {" "}
                    Privacy Policy
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href="" className="footer-nav">
                <div className="flex flex-row items-center ">
                  <span className="text-[#fff] w-5 text-center font-bold box-border footer-nav-icon duration-200">
                    <RiArrowRightSLine />
                  </span>
                  <span className="text-[#fff] text-[14px]">
                    {" "}
                    Privacy Policy
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href="" className="footer-nav">
                <div className="flex flex-row items-center ">
                  <span className="text-[#fff] w-5 text-center font-bold box-border footer-nav-icon duration-200">
                    <RiArrowRightSLine />
                  </span>
                  <span className="text-[#fff] text-[14px]">
                    {" "}
                    Privacy Policy
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="text-[26px] mb-9 font-bold uppercase">
            Business Hours
          </h6>
          <ul>
            <li className="text-[14px] font-bold">Opening Day:</li>
            <li className="text-[14px]">Saturday - Wednesday: 11am to 8pm</li>
            <li className="text-[14px]">Thursday: 11am to 6pm</li>
            <li className="text-[14px] font-bold mt-3">Vacation:</li>
            <li className="text-[14px]">All Public Holidays</li>
          </ul>
           
          
        </div>
        <div>
          <h6 className="text-[26px] mb-9 font-bold uppercase">Subscribe</h6>
          <div>
            <p className="text-[14px] mb-5">Enter your email and get latest updates and offers from NHP.</p>
            <div>
              <input type="" name="" className="py-3 px-4 border border-blue outline-none bg-primary" placeholder="your email..."/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
