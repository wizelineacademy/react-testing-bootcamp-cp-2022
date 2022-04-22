import APOD from "Components/APOD/APOD";
import React from "react";

const LandingPage = () => {
  return (
    <div data-testid="LandingPage">
      <header>
        <h1>The Capstone Project</h1>
      </header>
      <main>
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
