import React from "react";
import githubIcon from "../../../img/github_icon.png";
import linkedInIcon from "../../../img/linkedin_icon.png";
import "./style.css";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/GabrielWarner/study-desk-frontend">
        <img
          className="gitHub"
          src={githubIcon}
          style={{ height: 35 }}
          alt="Github account"
        ></img>
      </a>
      <a
        className="linkedIn"
        href="https://www.linkedin.com/in/zhao-ming-zhong/"
        target="_blank"
      >
        Zhao-Ming Zhong
      </a>
      <a
        className="linkedIn"
        href="https://www.linkedin.com/in/zhao-ming-zhong/"
        target="_blank"
      >
        Zhao-Ming Zhong
      </a>
      <a
        className="linkedIn"
        href="https://www.linkedin.com/in/zhao-ming-zhong/"
        target="_blank"
      >
        Zhao-Ming Zhong
      </a>
      <a
        className="linkedIn"
        href="https://www.linkedin.com/in/zhao-ming-zhong/"
        target="_blank"
      >
        Zhao-Ming Zhong
      </a>
    </div>
  );
}
