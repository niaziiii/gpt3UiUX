import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

import logo from "./../../assets/logo.svg";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#whatGPT3">What is GPT3</a>
      </p>
      <p>
        <a href="#openAI">Open AI</a>
      </p>
      <p>
        <a href="#caseStudy">Case Study</a>
      </p>
    </>
  );
};

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links__logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="gpt3__navbar-links__container">
          <Menu />
        </div>
      </div>

      <div className="gpt3__navbar-links__signIn">
        <p>
          {" "}
          <a href="#signup">Sign Up</a>
        </p>
        <p>
          {" "}
          <a href="#login">Login</a>
        </p>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu__container scale-up-center">
            <div className="gpt3__navbar-menu__container__links">
              <Menu />
            </div>
            <div className="gpt3__navbar-menu-links__signIn">
              <p>
                <a href="#signup">Sign Up</a>
              </p>
              <p>
                <a href="#login">Login</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
