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
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/gabriel-warner-083ab4211/"
      >
        Gabriel Warner
      </a>
      <a
        className="linkedIn"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/david-hruza-860699159/"
      >
        David Hruza
      </a>
      <a
        className="linkedIn"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/jiajieheuhm/"
      >
        Jiajie He
      </a>
      <a
        className="linkedIn"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/zhao-ming-zhong/"
      >
        Zhao-Ming Zhong
      </a>
    </div>
  );
}
