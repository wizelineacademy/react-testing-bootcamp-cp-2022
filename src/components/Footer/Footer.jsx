import React from "react";
import Style from "./Footer.module.css";

const Footer = () => {
  const footerText =
    "Project created during Wizeline Academy React Testing Bootcamp";

  return (
    <div className={Style.container}>
      <h5>{footerText}</h5>
    </div>
  );
};

export default Footer;
