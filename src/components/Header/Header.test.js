import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("check the header text exists", () => {
  render(<Header />);
  const textElement = screen.getByText(/astronomy picture of the day/i);
  expect(textElement).toBeInTheDocument();
});
