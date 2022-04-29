import React, { useEffect, useState } from "react";
import { POD } from "./POD";
const API_KEY = "aLF9OyI9eUKScjU0GIazR3BKJqntNfay4NXmE6lT";

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
  const [formatedDate, setFormatedDate] = useState("");
  const [pic, setPic] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [url, setUrl] = useState(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  );

  useEffect(() => {
    if (date !== new Date().toISOString().substring(0, 10)) {
      setUrl(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
      );
    } else {
      setUrl(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    }
  }, [date]);

  useEffect(() => {
      setPic(null);
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setPic(data);
        setFormatedDate(
          new Date(data.date).toLocaleDateString("es-MX", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
        );
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div style={style}>
      <input
        type="date"
        name="date"
        id="date"
        data-testid="dateInput"
        style={inputStyle}
        value={date}
        onChange={(event) => {
          setDate(new Date(event.target.value).toISOString().substring(0, 10));
        }}
      />
      { pic === null && 
        <POD />
      }
      {pic !== null && (
        <POD
          title={pic.title}
          date={formatedDate}
          url={pic.url}
          explanation={pic.explanation}
        />
      )}
    </div>
  );
};
