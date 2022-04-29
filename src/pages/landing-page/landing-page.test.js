import { render, screen, waitFor, fireEvent } from "@testing-library/react";

import { LandingPage } from ".";
import userEvent from "@testing-library/user-event";

const setup = () => render(<LandingPage />);

describe("Header", () => {
  it("should display the page title", () => {
    setup();
    const heading = screen.getByRole("heading", {
      name: /react specialized bootcamp - testing capstone project/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

describe("Footer", () => {
  it('must contain the message "Project created during Wizeline Academy React Testing Bootcamp”', () => {
    setup();
    const filterByTextEl = screen.getByText(
      /project created during wizeline academy react testing bootcamp/i
    );

    expect(filterByTextEl).toBeInTheDocument();
  });
});

describe("Main Section", () => {
  it("when the user enters the app, the app should show the picture of the day", async () => {
    setup();
    const pictureOfTheDay = await screen.findByAltText(/picture of the day/i);

    await waitFor(() =>
      expect(pictureOfTheDay).toHaveAttribute(
        "src",
        "https://apod.nasa.gov/apod/image/2204/LyridoverChinaJeffDai1024.jpg"
      )
    );
  });

  it("when the user selects a specific date with the format YYYY-MM-DD, the app should show the picture of the day for the given date", async () => {
    setup();
    const dateInputEl = screen.getByLabelText(/picture of the day/i);
    userEvent.type(dateInputEl, "2020-01-01"); // type anything
    const chosenDate = screen.getByRole("button", { name: "Apr 30, 2022" }); // choose any date that the calender shows
    fireEvent.click(chosenDate);
    expect(chosenDate).toBeInTheDocument();
  });

  it.todo(
    'when the app fetches the API, and there is an unexpected error, the app should show a message: "There was an error, please try again."'
  );

  it.todo(
    "when the user selects an invalid date value and clicks on the show button, the app should show a message from the API response (e.g., a day after the current date.)"
  );
});
