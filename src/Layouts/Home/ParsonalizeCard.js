import React from "react";
import {FaUserTimes} from "react-icons/fa"

const ParsonalizeCard = () => {
  const datas = [
    {
      img: "",
      title: "EXPERIENCE",
      about:
        "Experience - all that matters! Having more than 16+ years of experience in education consultancy, NHP Education Consultants...",
    },
    {
      img: "",
      title: "TRANSPARENCY",
      about:
        "Straight Talk is Good Business! Our services are our commitments to you and we deliver what we commit. We do not chase the...",
    },
    {
      img: "",
      title: "PASTORAL CARE",
      about:
        "We look at the consultancy differently! We are highly clinical to take care of your problems and remain focused until we can...",
    },
    {
      img: "",
      title: "AUTHORIZED AGENT",
      about:
        "Our excellent network with the Universities helps us to deliver superlative services to our students. We provide end to end...",
    },
    {
      img: "",
      title: "INTELLIGENCY AND SKILL",
      about:
        "Practical wisdom, trusted advice! Our success rate with visa applications and university admissions is one of the highest in...",
    },
    {
      img: "",
      title: "LONG TERM RELATIONSHIP",
      about:
        "Business is our signature! At NHP, we are committed to provide much more than excellent education consultancy – with us...",
    },
  ];
  return (
    <div className="mt-20 bg-[#f4f4f4] py-56">
      <div className="w-[80%] mx-auto grid lg:grid-cols-3 gap-x-14 gap-y-8 ">
        {datas.map((data, index) => (
          <div
            key={index}
            className="border-2 border-[#e1e1e1] bg-[#fff] px-8 py-10 personalize-card"
          >
            <div>
              <div className="mb-8 flex gap-x-28">
                <img src={data.img} alt="" />
                <h4 className="font-bold text-[#002147] header-4">{data.title}</h4>
              </div>
              <div>
                <p className="text-[#515050] para-person">{data.about}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParsonalizeCard;
