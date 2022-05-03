import { render, screen, waitFor } from "@testing-library/react";

import LandingPage from ".";
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
    const dateInputEl = screen.getByRole("textbox");
    userEvent.clear(dateInputEl);
    userEvent.type(dateInputEl, "01/01/2020"); // type anything
    expect(dateInputEl).toHaveAttribute("value", "01/01/2020");
    const pictureOfTheDay = await screen.findByAltText(/picture of the day/i);
    await waitFor(() =>
      expect(pictureOfTheDay).toHaveAttribute(
        "src",
        "https://apod.nasa.gov/apod/image/2001/BetelgeuseImagined_EsoCalcada_960.jpg"
      )
    );
  });

  it('when the app fetches the API, and there is an unexpected error, the app should show a message: "There was an error, please try again."', async () => {
    setup();
    const dateInputEl = screen.getByRole("textbox");
    userEvent.clear(dateInputEl);
    userEvent.type(dateInputEl, ""); // type anything
    expect(dateInputEl).toHaveAttribute("value", "");
    const errorEl = await screen.findByText(
      /there was an error, please try again./i
    );
    await waitFor(() => expect(errorEl).toBeInTheDocument());
  });

  it("when the user selects an invalid date value and clicks on the show button, the app should show a message from the API response (e.g., a day after the current date.)", async () => {
    setup();
    const dateInputEl = screen.getByRole("textbox");
    userEvent.clear(dateInputEl);
    userEvent.type(dateInputEl, "01/01/2030"); // type anything
    expect(dateInputEl).toHaveAttribute("value", "01/01/2030");
    const errorEl = await screen.findByText(
      /date must be between jun 16, 1995 and may 03, 2022./i
    );
    await waitFor(() => expect(errorEl).toBeInTheDocument());
  });
});
