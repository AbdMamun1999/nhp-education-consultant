import React from "react";
import uk from "../../assests/countries/uk-flag.png";
import usa from "../../assests/countries/usa-flag.png";
import canada from "../../assests/countries/canada-flag.png";
import australlia from "../../assests/countries/australia-flag.png";
import malaysia from "../../assests/countries/malaysia-flag.png";
import other from "../../assests/countries/world-map.png";

// style
import "./ChooseCountry.css";

const ChooseCountry = () => {
  const countries = [
    {
      img: uk,
      title: "Study in UK",
      des: "One of the main advantages of studying in the UK is that you will be exposed to different cultures and experiences ...",
    },
    {
      img: usa,
      title: "Study in USA",
      des: "Studying in the USA doesn’t just give you tangible degrees and certificates. For any international student, the USA has a lot ...",
    },
    {
      img: canada,
      title: "Study in Canada",
      des: "Most students prefer to study in Canada because it is the most popular and cost effective study destination in the world ...",
    },
    {
      img: australlia,
      title: "Study in Australia",
      des: "Australia has long been the preferred overseas study destinations. Multicultural Australia is a safe, friendly, sophisticated ...",
    },
    {
      img: malaysia,
      title: "Study in Malaysia",
      des: "Malaysia is an increasingly popular place to get tertiary education with more than 40,000 international students from over ...",
    },
    {
      img: other,
      title: "Other Visa Services",
      des: "NHP Education Consultants also processes student dependent/spouse visa, parents visitor visa, family visit visa ...",
    },
  ];

  return (
    <div>
      <div>
        <div>
          <div>
            <h2>Choose Your Country</h2>
          </div>
          <div>
            <p>
              NHP processes Student Visa, Student Spouse Visa and Parents
              Visitors Visa for UK, USA, Canada, Australia and Malaysia.
            </p>
          </div>
        </div>
        <div className="w-[80%] mx-auto mt-20 grid lg:grid-cols-3 gap-x-14 gap-y-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-11 text-center h-[310px] choose-country-card "
            >
              <div>
                <div>
                  <img src={country.img} alt="" className="block mx-auto" />
                </div>
                <div>
                  <h5 className="text-xl font-bold text-[#002147] mb-5 mt-4 leading-6">
                    {country.title}
                  </h5>
                </div>
                <div>
                  <p>{country.des}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseCountry;
