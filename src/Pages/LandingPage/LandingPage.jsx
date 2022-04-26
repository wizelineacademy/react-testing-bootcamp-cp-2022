import APOD from "Components/APOD/APOD";
import { LoadAPOD } from "Helpers/APODHelper";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";

import "./LandingPage.css";

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
      setSelectedDate(date);

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
        <Navbar bg="light">
          <Container>
            <Navbar.Brand>The Capstone Project</Navbar.Brand>
            <Navbar.Text>
              <div className="form-group">
                <input
                  type="date"
                  name="date"
                  id="date"
                  data-testid="date"
                  value={selectedDate}
                  onChange={(e) =>
                    handleSelectedDateChanged(e.currentTarget.value)
                  }
                />
              </div>
            </Navbar.Text>
          </Container>
        </Navbar>
      </header>
      <main>
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
