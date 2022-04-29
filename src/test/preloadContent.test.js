import { render, screen } from "@testing-library/react";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { Main } from "../components/Main.jsx";

describe("Test preload content in the App", () => {
  it("shows the header text", () => {
    render(<Header />);
    const headerText = screen.getByText(/NASA - Picture of the Day/);

    expect(headerText.innerHTML).toBe("NASA - Picture of the Day");
  });

  it("shows the main content preload text", () => {
    render(<Main />);
    const imageTitle = screen.getByText(/Loading picture.../);
    const imageDate = screen.getByText(/Loading date.../);
    const imageAtl = screen.getByAltText(/Loading picture.../);
    const pText = screen.getByText(/Lorem/);

    expect(imageTitle.innerHTML).toBe("Loading picture...");
    expect(imageDate.innerHTML).toBe("Loading date...");
    expect(imageAtl.alt).toBe("Loading picture...");
    expect(pText.innerHTML).toContain("Lorem");
  });

  it("shows the footer text", () => {
    render(<Footer />);
    const footerText = screen.getByText(
      /Project created during Wizeline Academy React Testing Bootcamp/
    );

    expect(footerText.innerHTML).toBe(
      "Project created during Wizeline Academy React Testing Bootcamp"
    );
  });
});
