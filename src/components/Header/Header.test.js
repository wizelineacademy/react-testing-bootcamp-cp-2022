import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders navbar", () => {
  render(<Header />);
  const linkElement = screen.getByText(/nasa api app/i);
  expect(linkElement).toBeInTheDocument();
});
