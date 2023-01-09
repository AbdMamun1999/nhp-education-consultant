import React from "react";
import brand from "../../../assests/images/malaysia-banner.webp";
import "./Brand.css";

const Brand = () => {
  return (
    <div>
      {/* <div
        className="w-full h-[150px] md:h-[350px] lg:h-[400px] "
        style={{ background: `#002e5b url(${brand})`, backgroundSize: "cover" }}
      >
        
       </div>  */}
       <div className="study-aboard-brand ">
        <img src={brand} alt="" />

        <section className="study-aboard-brand-s ">
          <div className="w-[80%] h-full mx-auto ">
            <div className="h-[80%] flex flex-col items-center justify-center ">
              <div className="text-center">
                <h1 className="text-[52px] font-bold uppercase text-white">Study in malaysiya</h1>
                <p>Would you like to study in Malaysia from Bangladesh?</p>
              </div>
            </div>
            <div>
              <button type="">STUDY ABROAD </button>
              <span>/STUDY IN MALAYSIA</span>
            </div>
          </div>
        </section>
      </div> 
    </div>
  );
};

export default Brand;
