import React from "react";
import bgImage from "../../assests/images/hwwrd.webp";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const About = () => {
  return (
    <div
      className="w-full h-[800px] bg-center lg:bg-right-top"
      style={{
        backgroundColor: "#f6f6f6",
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[80%] mx-auto">
        <div className="lg:w-[70%]">
          <h2 className="text-[38px] font-bold mb-5">Why we are different?</h2>
          <h4 className="text-[22px] text-[#3c3c3c] font-semibold mb-5">What makes us different makes us better.</h4>
          <p className="leading-7">
            We are distinctive in the quality of our services and stand out of
            the crowd. Unlike other consultancy firms in Bangladesh, we really
            care for our students. We always strive to give the best possible
            guidelines and solutions that a student may require. Our experienced
            consultants and in house lawyer are always at hand to prepare your
            visa application documents in a perfect way.
          </p>
          <div className="flex flex-row gap-x-10 mt-10">
            <div className="w-[150px] h-[150px]">
              <CircularProgressbar
                styles={buildStyles({
                  strokeLinecap: "round",

                  pathColor: `#002147`,
                  textColor: "#002147",
                })}
                strokeWidth={7}
                value={100}
                text={`${100}%`}
              />
              <h6 className="text-center font-semibold text-[18px] mt-3">
                Free Advice
              </h6>
            </div>
            <div className="w-[150px] h-[150px]">
              <CircularProgressbar
                styles={buildStyles({
                  strokeLinecap: "round",

                  pathColor: `#002147`,
                  textColor: "#002147",
                })}
                strokeWidth={7}
                value={100}
                text={`${100}%`}
              />
              <h6 className="text-center font-semibold text-[18px] mt-3">
                Satisfied Clients
              </h6>
            </div>
            <div className="w-[150px] h-[150px]">
              <CircularProgressbar
                styles={buildStyles({
                  strokeLinecap: "round",

                  pathColor: `#002147`,
                  textColor: "#002147",
                })}
                strokeWidth={7}
                value={90}
                text={`${99}%`}
              />
              <h6 className="text-center font-semibold text-[18px] mt-3">
                Visa Success
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
