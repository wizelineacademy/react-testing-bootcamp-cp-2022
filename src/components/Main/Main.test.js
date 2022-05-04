import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import {
  findByAltText,
  getByAltText,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import moment from "moment";
import Main from "./Main";

describe("check components should render", () => {
  test("check the datepicker exists", () => {
    render(<Main />);
    const today = moment().format("YYYY-MM-DD");

    const textElement = screen.getByDisplayValue(today);
    expect(textElement).toBeInTheDocument();
  });

  test("show loading", () => {
    render(<Main />);
    const today = moment().format("YYYY-MM-DD");
    const dayAfterToday = moment().format("D");
    const dateElement = screen.getByDisplayValue(today);

    userEvent.click(dateElement);
    const elementFromCalendar = screen.getAllByText(dayAfterToday)[0];
    expect(elementFromCalendar).toBeInTheDocument();
    userEvent.click(elementFromCalendar);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});

describe("Select a date", () => {
  test("select a wrong date (later) and display it error message", async () => {
    render(<Main />);
    const today = moment().format("YYYY-MM-DD");
    const dayAfterToday = moment().add(1, "days").format("D");
    const todayFormat = moment().format("MMM DD, YYYY");
    const dateElement = screen.getByDisplayValue(today);

    userEvent.click(dateElement);
    const elementFromCalendar = screen.getAllByText(dayAfterToday)[0];
    expect(elementFromCalendar).toBeInTheDocument();
    userEvent.click(elementFromCalendar);
    await waitFor(() => {
      expect(
        screen.getByText(new RegExp(todayFormat, "i"))
      ).toBeInTheDocument();
    });
  });

  test("select a right date and show picture of the day and info", async () => {
    render(<Main />);
    const today = moment().format("YYYY-MM-DD");
    const dayBeforeToday = moment().subtract(1, "days").format("D");
    const dateElement = screen.getByDisplayValue(today);
    userEvent.click(dateElement);
    const elementFromCalendar = screen.getAllByText(dayBeforeToday)[0];
    expect(elementFromCalendar).toBeInTheDocument();
    userEvent.click(elementFromCalendar);
    await waitFor(() => {
      expect(
        screen.getByAltText("Astronomy Picture of the Day")
      ).toBeInTheDocument();
    });
    expect(
      screen.getByText(/What does a black hole look like/i)
    ).toBeInTheDocument();
  });
});
