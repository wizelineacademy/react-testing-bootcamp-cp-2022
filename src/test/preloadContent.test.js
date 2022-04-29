import { render, screen } from "@testing-library/react";
import App from "../App.js";

describe("Test preload content in the App", () => {
  const setup = () => {
    render(<App />);
  };

  it("shows the header text", () => {
    setup();
    const footerText = screen.getByText(/NASA - Picture of the Day/);

    expect(footerText.innerHTML).toBe("NASA - Picture of the Day");
  });

  it("shows the main content preload text", () => {
    setup();
    const imageTitle = screen.getByText(/Loading picture.../);
    const imageDate = screen.getByText(/Loading date.../);
    const imageAtl = screen.getByAltText(/Loading picture.../);
    const pText = screen.getAllByText(/Lorem/);

    expect(imageTitle.innerHTML).toBe("Loading picture...");
    expect(imageDate.innerHTML).toBe("Loading date...");
    expect(imageAtl.alt).toBe("Loading picture...");
    expect(pText.length).toBeGreaterThan(0);
    expect(pText[0].innerHTML).toContain("Lorem");
  });

  it("shows the footer text", () => {
    setup();
    const footerText = screen.getByText(
      /Project created during Wizeline Academy React Testing Bootcamp/
    );

    expect(footerText.innerHTML).toBe(
      "Project created during Wizeline Academy React Testing Bootcamp"
    );
  });
});
