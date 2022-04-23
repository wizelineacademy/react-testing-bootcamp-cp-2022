import {
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import moment from "moment";
import React from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import LandingPage from "./LandingPage";

describe("LandingPage tests", () => {
  const sut = () => render(<LandingPage />);

  it("should have a Header with the title of the project", () => {
    sut();
    const headerEl = screen.getByRole("heading", { name: /Capstone Project/i });

    expect(headerEl).toBeInTheDocument();
  });

  it("should have a Main section", () => {
    sut();

    const mainSectionEl = screen.getByRole("main");

    expect(mainSectionEl).toBeInTheDocument();
  });

  it("should have a footer section", () => {
    sut();

    const footerEl = screen.getByRole("contentinfo");

    expect(footerEl).toBeInTheDocument();
  });

  it("footer should contain  the message 'Project created during Wizeline Academy React Testing Bootcamp'", () => {
    sut();

    const footerEl = screen.getByRole("contentinfo");
    const legend = screen.getByText(
      /Project created during Wizeline Academy React Testing Bootcamp/i
    );
    expect(legend).toBeInTheDocument();
    expect(footerEl).toContainElement(legend);
  });

  it("sould render an APOD component", () => {
    sut();

    const apodEl = screen.getByTestId(/APOD/i);

    expect(apodEl).toBeInTheDocument();
  });

  it("should init with current date", () => {
    sut();

    const dateEl = screen.getByLabelText(/Date/i);
    const today = moment().format("YYYY-MM-DD");
    const errorMessageEl = screen.queryByTestId("error-message");

    expect(dateEl).toBeInTheDocument();
    expect(dateEl).toHaveAttribute("value", today);
    expect(errorMessageEl).not.toBeInTheDocument();
  });

  it("should reload when selected date changed", async () => {
    sut();

    const dateEl = screen.getByLabelText(/Date/i);
    await fireEvent.change(dateEl, { target: { value: "1995-11-13" } });

    await waitFor(async () => {
      const headingEl = await screen.findByRole("heading", {
        name: "Virgo Cluster Galaxies",
      });
      expect(headingEl).toBeInTheDocument();
    });

    expect(
      await screen.findByRole("heading", { name: "Virgo Cluster Galaxies" })
    ).toBeInTheDocument();
  });

  it("should show message from API when invalid date value", async () => {
    sut();

    const dateEl = screen.getByLabelText(/Date/i);
    await fireEvent.change(dateEl, { target: { value: "1975-11-13" } });

    await waitFor(async () => {
      const errorMessageEl = screen.queryByTestId("error-message");
      expect(errorMessageEl).toBeInTheDocument();
    });
  });

  it("should show message when get unexpected error", async () => {
    sut();

    const dateEl = screen.getByLabelText(/Date/i);
    await fireEvent.change(dateEl, { target: { value: "1975-11-13" } });

    await waitFor(async () => {
      const errorMessageEl = screen.queryByTestId("error-message");
      expect(errorMessageEl).toBeInTheDocument();
    });
  });

  //TODO: How to test this fail
  // it("should show a message when an unexpected error occurs",async ()=>{
  //   sut();

  //   const dateEl = screen.getByLabelText(/Date/i);
  //   await fireEvent.change(dateEl, { target: { value: "1975-11-13" } });

  //   await waitFor(async () => {
  //     const errorMessageEl = screen.queryByTestId("error-message");
  //     expect(errorMessageEl).toBeInTheDocument();
  //   });
  // })
});
