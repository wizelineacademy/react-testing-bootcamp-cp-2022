import React from "react";
import { POD } from "./POD";

const style = {
  background: "#A0BCC2",
  height: "60vh",
  maxWidth: "89vw",
  margin: "1vh auto",
  padding: "1vh",
};

const inputStyle = {
  display: "block",
  margin: "1rem auto",
};

export const Main = () => {
  return (
    <div style={style}>
      <input type="date" name="date" id="date" style={inputStyle} />
      <POD />
    </div>
  );
};
