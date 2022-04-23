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
  const [errorMessage, setErrorMessage] = useState();
  const [unexpectedError, setUnexpectedError] = useState();

  useEffect(() => {
    const today = moment().format("YYYY-MM-DD");
    setSelectedDate(today);
    handleSelectedDateChanged(today);
  }, []);

  const handleSelectedDateChanged = async (date) => {
    try {
      let response = await LoadAPOD(date);
      if (response.status !== 200) {
        let { msg } = (await response).data;
        console.log(response.status, msg);
        setErrorMessage(msg);
        return;
      }

      let { url, title, explanation } = (await response).data;
      setAPODData({ url, title, explanation });
    } catch (error) {
      console.log(error.status);
      if (error.response.data && error.response.data.code === 400) {
        setErrorMessage(error.response.data.msg);
        return;
      }
      setUnexpectedError(error.response);
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
        {errorMessage && <div data-testid="error-message">{errorMessage}</div>}
        {unexpectedError && (
          <div data-testid="unexpected-error">
            There was an error, please try again.
          </div>
        )}
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
