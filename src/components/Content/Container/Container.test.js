import { render, screen } from "@testing-library/react";
import Container from "./Container";

const setup = () => render(<Container />);

const awaitApi = async () => {
  const nasaResponse = await fetch("https://api.nasa.gov/planetary/apod");
  return await nasaResponse.json();
};

beforeAll(() => {
  awaitApi();
});

test("Expect the rendered input", () => {
  setup();
  const inputCalendar = screen.getByPlaceholderText("yyyy/mm/dd");

  expect(inputCalendar).toBeInTheDocument();
});
