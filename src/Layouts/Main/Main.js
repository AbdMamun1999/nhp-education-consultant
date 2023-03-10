import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
