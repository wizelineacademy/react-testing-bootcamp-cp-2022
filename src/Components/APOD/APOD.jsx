import React, { useState } from "react";

const APOD = ({ title, imgSource, explanation }) => {
  return (
    <div
      className="apod"
      data-testid="APOD"
      style={{
        backgroundImage: `url(${imgSource})`,
        backgroundSize: "cover",
      }}
    >
      <h2 id="title">{title}</h2>

      <article>{explanation}</article>
    </div>
  );
};

export default APOD;
