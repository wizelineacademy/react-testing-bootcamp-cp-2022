import APOD from "Components/APOD/APOD";
import React, { useEffect, useState } from "react";

const LandingPage = () => {
  const [selectedDate, setSelectedDate] = useState();
  useEffect(() => {
    const today = new Date().toISOString().replace(/T.*/, "");
    setSelectedDate(today);
    handleSelctedDateChanged(today);
  }, []);

  const handleSelctedDateChanged = (date) => {
    console.log(date);
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
            onChange={(e) => handleSelctedDateChanged(e.currentTarget.value)}
          />
        </div>
        <h1>{selectedDate}</h1>
        <APOD />
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
