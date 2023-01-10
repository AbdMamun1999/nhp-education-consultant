import React from "react";
import { IoIosCall } from "react-icons/io";

const FooterBottom = () => {
  return (
    <>
      <div className="w-[80%] mx-auto grid lg:grid-cols-3 py-20 gap-x-5 gap-y-4 border-b border-blue">
        <div className="flex flex-row items-center gap-x-5 text-[#fff]">
          <div>
            <span className="text-4xl">
              <IoIosCall />
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Call Us</h3>
            <p>+8801755707070</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-5 text-[#fff]">
          <div>
            <span className="text-4xl">
              <IoIosCall />
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Email Us</h3>
            <p>+info@nhpeducationconsultants.com</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-5 text-[#fff]">
          <div>
            <span className="text-4xl">
              <IoIosCall />
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Location</h3>
            <p>
              152/2A-2, Rowshan Tower, 2nd Floor, Panthapath, Dhaka - 1205,
              Bangladesh
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center text-[#fff] mt-14">
          <p>
            Copyright © NHP | All rights reserved | Signed by NHP IT Solutions
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
