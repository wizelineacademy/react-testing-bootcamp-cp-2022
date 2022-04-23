import { getByText, render, screen } from "@testing-library/react";
import React from "react";
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
    const today = new Date().toLocaleDateString();

    expect(dateEl).toBeInTheDocument();
    expect(dateEl).toHaveAttribute("value", today);
  });
});
