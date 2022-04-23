import APOD from "Components/APOD/APOD";
import { LoadAPOD } from "Helpers/APODHelper";
import moment from "moment";
import React, { useEffect, useState } from "react";

const LandingPage = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [APODData, setAPODData] = useState({
    url: "",
    title: "",
    explanation: "",
  });

  useEffect(() => {
    const today = moment().format("YYYY-MM-DD");
    setSelectedDate(today);
    handleSelectedDateChanged(today);
  }, []);

  const handleSelectedDateChanged = async (date) => {
    try {
      let response = await LoadAPOD(date);
      if (response.status !== 200) {
        //TODO: Show error message
        console.log("invalid response code");
        return;
      }

      let { url, title, explanation } = (await response).data;

      setAPODData({ url, title, explanation });
    } catch (error) {
      console.log(error.response); //TODO: Show error message
    }
  };

  return (
    <div data-testid="LandingPage">
      <header>
        <h1>The Capstone Project</h1>
      </header>
      <main>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            name="date"
            id="date"
            value={selectedDate}
            onChange={(e) => handleSelectedDateChanged(e.currentTarget.value)}
          />
        </div>
        <APOD
          title={APODData.title}
          imgSource={APODData.url}
          explanation={APODData.explanation}
        />
      </main>
      <footer>
        <span>
          Project created during Wizeline Academy React Testing Bootcamp
        </span>
      </footer>
    </div>
  );
};

export default LandingPage;
