import React from "react";

const ApplyForm = () => {
  return (
    <div>
      <form>
        <div>
          <input
            type=""
            name=""
            placeholder="Full Name*"
            className="w-full outline-none p-4 rounded border-2 border-[#e7e6e6] shadow focus:border-[#007bff] focus:border"
          />
        </div>
        <div className=" mt-7">
          <input
            type=""
            name=""
            placeholder="Your e-mail*"
            className="w-full outline-none p-4 rounded border-2 border-[#e7e6e6] shadow focus:border-[#007bff] focus:border"
          />
        </div>
        <div className="mt-7">
          <textarea
            className="w-full outline-none p-4 rounded border-2 border-[#e7e6e6] shadow focus:border-[#007bff] focus:border"
            rows=""
            cols=""
            placeholder="Enter your prefer Date and Time..."
          ></textarea>
        </div>
        <div className="mt-7 text-center">
          <button
            type=""
            className=" py-4 px-10 bg-[#002147] text-secondary font-bold"
          >
            Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
