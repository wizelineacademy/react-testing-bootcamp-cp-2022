import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders navbar", () => {
  render(<Footer />);
  const linkElement = screen.getByText(
    /Project created during Wizeline Academy React Testing Bootcamp/i
  );
  expect(linkElement).toBeInTheDocument();
});
