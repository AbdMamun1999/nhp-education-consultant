import React from "react";
import Question from "./Question";
import { BiCircle } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import "./Study.css";
import ApplyForm from "./ApplyForm";

const Study = () => {
  return (
    <div>
      <div>
        {/* study section */}
        <div className="w-[75%] mx-auto">
          <div className="flex">
            <h1 className=" text-[#002147] font-sans text-4xl font-bold uppercase pr-[60px] border-r-2 border-blue-600">
              Study In Malaysia
            </h1>
            <p className="pl-[60px] text-[#494949] text-[18px] text-left font-open">
              Would you like to study in Malaysia from Bangladesh and you need
              the <br />
              right place to process your entire application perfectly? NHP can
              help you!
            </p>
          </div>
        </div>
        {/* quick links */}
        <div className="mt-20">
          <div className="grid grid-cols-3 gap-x-10 w-[80%] mx-auto">
            <div className="col-span-1">
              <div className="border">
                <h6 className="block py-5 text-center uppercase text-[#C2D7EF] bg-[#002147] font-bold text-[17px] border-b">
                  Quick links
                </h6>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="block py-5 border-b hover:bg-[#002147] hover:text-[#C2D7EF] quicklinks-nav duration-300 ease-in-out"
                    >
                      <div className="flex items-center pl-4">
                        <span className="pr-2 links-circle text-bold">
                          <BiCircle size={20} />
                        </span>
                        <span className="text-[16px]">Study in Uk</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-5 border-b hover:bg-[#002147] hover:text-[#C2D7EF] quicklinks-nav duration-300 ease-in-out"
                    >
                      <div className="flex items-center pl-4">
                        <span className="pr-2 links-circle text-bold">
                          <BiCircle size={20} />
                        </span>
                        <span className="text-[16px]">Study in Uk</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-5 border-b hover:bg-[#002147] hover:text-[#C2D7EF] quicklinks-nav duration-300 ease-in-out"
                    >
                      <div className="flex items-center pl-4">
                        <span className="pr-2 links-circle text-bold">
                          <BiCircle size={20} />
                        </span>
                        <span className="text-[16px]">Study in Uk</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-5 border-b hover:bg-[#002147] hover:text-[#C2D7EF] quicklinks-nav duration-300 ease-in-out"
                    >
                      <div className="flex items-center pl-4">
                        <span className="pr-2 links-circle text-bold">
                          <BiCircle size={20} />
                        </span>
                        <span className="text-[16px]">Study in Uk</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-5 border-b hover:bg-[#002147] hover:text-[#C2D7EF] quicklinks-nav duration-300 ease-in-out"
                    >
                      <div className="flex items-center pl-4">
                        <span className="pr-2 links-circle text-bold">
                          <BiCircle size={20} />
                        </span>
                        <span className="text-[16px]">Study in Uk</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-5 border-b hover:bg-[#002147] hover:text-[#C2D7EF] quicklinks-nav duration-300 ease-in-out"
                    >
                      <div className="flex items-center pl-4">
                        <span className="pr-2 links-circle text-bold">
                          <BiCircle size={20} />
                        </span>
                        <span className="text-[16px]">Study in Uk</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-5 border-b hover:bg-[#002147] hover:text-[#C2D7EF] quicklinks-nav duration-300 ease-in-out"
                    >
                      <div className="flex items-center pl-4">
                        <span className="pr-2 links-circle text-bold">
                          <BiCircle size={20} />
                        </span>
                        <span className="text-[16px]">Study in Uk</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-5 border-b hover:bg-[#002147] hover:text-[#C2D7EF] quicklinks-nav duration-300 ease-in-out"
                    >
                      <div className="flex items-center pl-4">
                        <span className="pr-2 links-circle text-bold">
                          <BiCircle size={20} />
                        </span>
                        <span className="text-[16px]">Study in Uk</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-5 border-b hover:bg-[#002147] hover:text-[#C2D7EF] quicklinks-nav duration-300 ease-in-out"
                    >
                      <div className="flex items-center pl-4">
                        <span className="pr-2 links-circle text-bold">
                          <BiCircle size={20} />
                        </span>
                        <span className="text-[16px]">Study in Uk</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-5 border-b hover:bg-[#002147] hover:text-[#C2D7EF] quicklinks-nav duration-300 ease-in-out"
                    >
                      <div className="flex items-center pl-4">
                        <span className="pr-2 links-circle text-bold">
                          <BiCircle size={20} />
                        </span>
                        <span className="text-[16px]">Study in Uk</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-5  hover:bg-[#002147] hover:text-[#C2D7EF] quicklinks-nav duration-300 ease-in-out"
                    >
                      <div className="flex items-center pl-4">
                        <span className="pr-2 links-circle text-bold">
                          <BiCircle size={20} />
                        </span>
                        <span className="text-[16px]">Study in Uk</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-14">
                <h6 className="block py-5 text-center uppercase text-[#C2D7EF] bg-[#002147] font-bold text-[17px] border-b">
                  MALAYSIA - AT A GLANCE
                </h6>

                <div className="bg-[#f0f0f0] py-5 px-6">
                  <p className="text-red font-bold leading-9">
                    {" "}
                    There are lot of benefits of studying in Malaysia.
                  </p>
                  <ul className="py-6">
                    <li>
                      <p className="flex items-center gap-x-3 pb-[10px]">
                        <span className="text-red">
                          <BsFillStarFill />
                        </span>
                        <span className="text-[#002147] font-semibold">
                          Good Quality Education
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-x-3 pb-[10px]">
                        <span className="text-red">
                          <BsFillStarFill />
                        </span>
                        <span className="text-[#002147] font-semibold">
                          Very Easy Visa Procedures
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-x-3 pb-[10px]">
                        <span className="text-red">
                          <BsFillStarFill />
                        </span>
                        <span className="text-[#002147] font-semibold">
                          Very Cheaper Tuition Fee
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-x-3 pb-[10px]">
                        <span className="text-red">
                          <BsFillStarFill />
                        </span>
                        <span className="text-[#002147] font-semibold">
                          Very Low Living Expenses
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-x-3 pb-[10px]">
                        <span className="text-red">
                          <BsFillStarFill />
                        </span>
                        <span className="text-[#002147] font-semibold">
                          No Sponsorship Required
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-x-3 pb-[10px]">
                        <span className="text-red">
                          <BsFillStarFill />
                        </span>
                        <span className="text-[#002147] font-semibold">
                          Very Good Weather
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="h-[200px] flex items-center">
                <div className="w-full text-center">
                  <h5 className="text-center uppercase text-[#5a5a59] text-xl font-bold">
                    BOOK AN APPOINTMENT{" "}
                  </h5>
                  <p className="text-center text-[14px] text-[#515050] leading-6 mt-5">
                    Book an appointment with one of our expert <br />{" "}
                    consultants!
                  </p>
                </div>
              </div>
              <div>
                <ApplyForm />
              </div>
            </div>
            {/* descripe section */}
            <div className="col-span-2">
              <div>
                <div>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/rpOY_SQH2pQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="mt-5">
                  <Question />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;
