import React from "react";

const style = {
  background: "#A0BCC2",
  textAlign: "center",
  height: "20vh",
  maxWidth: "90vw",
  lineHeight: "20vh",
  margin: "auto",
  marginTop: "1vh"
};

export const Header = () => {
  return (
    <div style={style}>
      <h1>NASA - Picture of the Day</h1>
    </div>
  );
};
