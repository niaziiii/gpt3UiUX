import React from "react";
import "./brand.css";

import { slack, atlassian, shopify, google, dropbox } from "./import";

export const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div className="gpt3__brand__content">
        <img src={slack} alt="slack" />
      </div>

      <div className="gpt3__brand__content">
        <img src={atlassian} alt="atlassian" />
      </div>

      <div className="gpt3__brand__content">
        <img src={shopify} alt="shopify" />
      </div>

      <div className="gpt3__brand__content">
        <img src={google} alt="google" />
      </div>

      <div className="gpt3__brand__content">
        <img src={dropbox} alt="dropbox" />
      </div>
    </div>
  );
};

export default Brand;
