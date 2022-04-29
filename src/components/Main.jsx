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
  const [error, setError] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [wrongDate, setWrongDate] = useState(null);
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
        if ("code" in data) {
          setWrongDate(data);
        } else {
          setPic(data);
          setFormatedDate(
            new Date(data.date + "T10:00:00Z").toLocaleDateString("es-MX", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
          );
        }
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, [url]);

  return (
    <div style={style}>
      {error && <h2>There was an error, please try again.</h2>}
      {wrongDate && (
        <h2>
          {wrongDate.code} - {wrongDate.msg}
        </h2>
      )}
      {!error && wrongDate === null && (
        <>
          <input
            type="date"
            name="date"
            id="date"
            data-testid="dateInput"
            style={inputStyle}
            value={date}
            onChange={(event) => {
              setDate(
                new Date(event.target.value).toISOString().substring(0, 10)
              );
            }}
          />
          {pic === null && <POD />}
          {pic !== null && (
            <POD
              title={pic.title}
              date={formatedDate}
              url={pic.url}
              explanation={pic.explanation}
            />
          )}
        </>
      )}
    </div>
  );
};
