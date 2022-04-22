import React from "react";

const LandingPage = () => {
  return (
    <div data-testid="LandingPage">
      <header>
        <h1>The Capstone Project</h1>
      </header>
      <main>
        <div data-testid="APOD" />
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
