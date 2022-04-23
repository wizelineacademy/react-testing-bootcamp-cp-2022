import React, { useState } from "react";

const APOD = ({ title, imgSource, explanation }) => {
  return (
    <div data-testid="APOD">
      <h2 id="title">{title}</h2>
      <img src={imgSource} alt={title} />
      <article>{explanation}</article>
    </div>
  );
};

export default APOD;
