import React from "react";
import logo from "./../../assets/logo.svg";

import "./footer.css";
function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer__header">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer__button">
        <button type="button">Request for early access</button>
      </div>

      <div className="gpt3__footer__nav">
        <div className="gpt3__footer__nav__column">
          <div className="gpt3__footer__nav__column__logo">
            <img src={logo} alt="logo" />
          </div>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer__nav__column">
          <b>Links</b>
          <a href="#footer">Overons</a>
          <a href="#footer">Sccial media</a>
          <a href="#footer">Counters</a>
          <a href="#footer">Contacts</a>
        </div>

        <div className="gpt3__footer__nav__column">
          <b>Company</b>
          <a href="#footer">Term & conditions</a>
          <a href="#footer">Privacy Policy</a>
          <a href="#footer">Contacts</a>
        </div>
        <div className="gpt3__footer__nav__column">
          <b>Get in touch</b>
          <a href="#footer">Advance</a>
          <a href="#footer">Email Address</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
