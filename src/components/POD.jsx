import React from "react";
import defaultImg from "../default.jpg";

const style = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: "2rem",
  textAlign: "center",
  padding: "1rem 0",
  fontSize: "1rem",
};

const dateStyle = {
  textAlign: "right",
};

const imgStyle = {
  maxHeight: "20vw"
};

const textStyle = {
  textAlign: "justify",
  fontSize: "1.2rem",
  lineHeight: "2rem",
  fontWeight: "bold",
  padding: "2rem"
};

export const POD = ({ title, date, url }) => {
  return (
    <div style={style}>
      <div>
        <h3>{title || "Loading picture..."}</h3>
        <p style={dateStyle}>{date || "Loading date..."}</p>
        <img src={url || defaultImg} alt={title || "Loading picture..."} style={imgStyle} />
      </div>
      <div style={textStyle}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A inventore
          earum, distinctio modi placeat ducimus aut sit incidunt perspiciatis
          saepe deleniti culpa dolore eum facere obcaecati eligendi provident
          quis quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          maiores hic rem explicabo perspiciatis cupiditate eum dolorum. Quos
          expedita enim quod officia repellat ipsum, magni id, quia adipisci
          beatae molestiae. Sapiente suscipit voluptates nesciunt perspiciatis
          rerum, tempore vero nostrum quaerat doloribus ad sit porro fugit
          placeat modi repudiandae iusto? Autem, itaque hic?
        </p>
      </div>
    </div>
  );
};
