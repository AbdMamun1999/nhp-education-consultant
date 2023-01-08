import React from "react";
import NavbarTop from "./NavbarTop";
import logo from "../../assests/images/nhp-logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <NavbarTop />
      <nav className="w-[80%] mx-auto flex justify-between items-center">
        <div className="">
          <a href="">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="header-menu ">
          <ul>
            <li>
              <a href="#">Home</a>
              <div></div>
            </li>
            <li>
              <a href="#">Study Aboard</a>
              <div></div>

              <ul>
                <li>
                  <a href="">Study in UK</a>
                </li>
                <li>
                  <a href="">Study in usa</a>
                </li>
                <li>
                  <a href="">Study in canada</a>
                </li>
                <li>
                  <a href="">Study in australlia</a>
                </li>
                <li>
                  <a href="">Study in malayshiya</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Scholarship</a>
              <div></div>
              <ul>
                <li>
                  <a href="">Scholarship Offers</a>
                </li>
                <li>
                  <a href="">Scholarship Assistance</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">University</a>
              <div></div>
              <ul>
                <li>
                  <a href="">Universities We Represent</a>
                </li>
                <li>
                  <a href="">University Visits</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Contact</a>
              <div></div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
