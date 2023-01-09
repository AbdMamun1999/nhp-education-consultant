import React from "react";
import About from "../Layouts/Home/About";
import ChooseCountry from "../Layouts/Home/ChooseCountry";
import ParsonalizeCard from "../Layouts/Home/ParsonalizeCard";

const Home = () => {
  return (
    <div>
      <ChooseCountry />
      <ParsonalizeCard />
      <About />
    </div>
  );
};

export default Home;
