import { render, screen } from "@testing-library/react";
import App from "../App";

describe("checks functionality of API calls", () => {
  const API_KEY = process.env.API_KEY;
  const setup = () => {
    render(<App />);
  };

  it("should shows today's picture", async () => {
    setup();
    let data = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    );
    data = await data.json();

    const title = data.title;

    console.log(data);

    const today = new Date().toLocaleDateString("es-MX", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
    const formatedDate = new Date(data.date + "T10:00:00Z").toLocaleDateString("es-MX", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    const imageTitle = screen.getByText(title);
    const imageAlt = screen.getByAltText(title);
    const date = screen.getByText(formatedDate);

    expect(imageTitle.innerHTML).toBe(title);
    expect(imageAlt.alt).toBe(title);
    expect(date.innerHTML).toBe(today);
  });
});
