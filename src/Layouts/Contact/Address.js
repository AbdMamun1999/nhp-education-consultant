import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { MdAlternateEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const Address = () => {
  return (
    <div className="grid lg:grid-cols-3  shadow-lg mb-20">
      <div className=" h-[400px] flex flex-col justify-center items-center">
        <span>
          <GiRotaryPhone size={50} />
        </span>
        <h5 className="text-[18px] font-bold">CALL US</h5>
        <p className="text-[#515050]">
          <span className="font-bold ">Phone:</span>{" "}
          <span>+8801755707070, +8801715322220</span>{" "}
        </p>
        <p className="text-[#515050]">
          <span>+8801681888880, +8801511005050</span>
        </p>
      </div>
      <div className=" h-[400px] flex flex-col justify-center items-center bg-primary text-bold">
        <span className="text-red">
          <MdLocationOn size={50} />
        </span>
        <h4 className="text-[#fff] font-bold">OFFICE LOCATION</h4>
        <h5 className="text-[18px] font-bold text-[#fff]">
          152/2A-2, Rowshan Tower, 2nd Floor, Panthapath
        </h5>
        <p className="text-[#fff] font-bold ">
          <span className="">Address:</span>
          <span>Green Road - Panthapath Signal,</span>
        </p>
        <p className="text-[#fff] font-bold">
          <span>Dhaka - 1205, Bangladesh</span>
        </p>
      </div>
      <div className=" h-[400px] flex flex-col justify-center items-center">
        <span>
          <MdAlternateEmail size={50} />
        </span>
        <h5 className="text-[18px] font-bold">EMAIL US</h5>
        <p className="text-[#515050]">
          <span className="font-bold">Mail:</span>{" "}
          <span> info@nhpeducationconsultants.com ;</span>{" "}
        </p>
        <p className="text-[#515050]">
          <span>headofadmin@nhpeducationconsultants.com</span>
        </p>
      </div>
    </div>
  );
};

export default Address;
