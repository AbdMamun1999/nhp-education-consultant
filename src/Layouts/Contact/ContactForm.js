import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPinterestP,
  FaWordpressSimple,
  FaTumblr,
  FaGoogle,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <section>
      <div className="w-[65%] mx-auto pt-10 pb-20">
        <div>
          <h4 className="text-center text-3xl font-bold mb-[30px]">
            <span className="text-primary]">SOCIALISE </span>
            <span className="text-secondary">WITH US</span>
          </h4>
          <ul className="flex flex-row gap-x-6 items-center justify-center mb-[30px]">
            <li>
              <a
                href="#"
                className="text-[#C5C5C5] hover:text-primary duration-300"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#C5C5C5] hover:text-primary duration-300"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#C5C5C5] hover:text-primary duration-300"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#C5C5C5] hover:text-primary duration-300"
              >
                <FaYoutube />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#C5C5C5] hover:text-primary duration-300"
              >
                <FaPinterestP />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#C5C5C5] hover:text-primary duration-300"
              >
                <FaTumblr />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#C5C5C5] hover:text-primary duration-300"
              >
                <FaGoogle />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#C5C5C5] hover:text-primary duration-300"
              >
                <FaWordpressSimple />
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-[30px]">
          <h4 className="text-center text-3xl font-bold mb-[15px]">
            <span className="text-primary ">Make an </span>
            <span className="text-secondary">Enquiry</span>
          </h4>
          <p className="text-center">
            Use this form to make a general enquiry.
          </p>
        </div>
        <div>
          <form>
            <div className="text-center w-[90%] mx-auto">
              <textarea className="p-4 border border-secondary h-[180px] w-full outline-none shadow-2px" placeholder="Message"></textarea>
            </div>
            <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-between gap-4 mt-[30px]">
              <div className="flex-1">
                <input className="w-full border border-secondary shadow-2px px-4 py-4 outline-none" placeholder="Name*" type="" name="" value="" />
              </div>
              <div className="flex-1">
                <input className="w-full border border-secondary shadow-2px px-4 py-4 outline-none" placeholder="Name*" type="" name="" value="" />
              </div>
            </div>
            <div className="w-[90%] mx-auto mt-[30px]">
              <button className="py-4 px-10 bg-primary text-[#fff] uppercase" type="">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
