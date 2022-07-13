import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Twitter from "../../img/twitter.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>baysha2014@gmail.com </span>
        <div style={{ marginTop: "0px" }} className="i-icons">
          <a href="https://github.com/2021aysha" target="_blank">
            <img width={"128px"} src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/aysha-b-2b4b0561/"
            target="_blank"
          >
            <img width={"108px"} height={"108px"} src={LinkedIn} alt="" />
          </a>
          <a href="https://twitter.com/home" target="_blank">
            <img width={"108px"} src={Twitter} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
