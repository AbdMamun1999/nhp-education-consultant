import React from "react";
import About from "../Layouts/Home/About";
import AuthorizationPart from "../Layouts/Home/AuthorizationPart";
import ChooseCountry from "../Layouts/Home/ChooseCountry";
import HomeBanner from "../Layouts/Home/HomeBanner";
import ParsonalizeCard from "../Layouts/Home/ParsonalizeCard";
import UniversitySlider from "../Layouts/Home/UniversitySlider";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <ChooseCountry />
      <ParsonalizeCard />
      <About />
      <AuthorizationPart />
      <UniversitySlider />
    </div>
  );
};

export default Home;
