import { useEffect, useState } from "react";
import Container from "./Container/Container";

const Content = () => {
  const [nasaData, setNasaData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    handleSubmit("2022-05-03");
  }, []);

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      setError("");
      let res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=0dgXoTgiLTbv4NDcBBpCeV4k5Ud2LPuuhqxGvDqF&date=${e}`
      );
      let resJson = await res.json();
      setNasaData(resJson);

      setLoading(false);

      if (res.status !== 200) {
        setError("Error, you can't put a day after today");
      }
    } catch (err) {
      setError("Error, server issues");
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <Container
      nasaData={nasaData}
      loading={loading}
      error={error}
      handleSubmit={handleSubmit}
    />
  );
};

export default Content;
