import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("check the header text exists", () => {
  render(<Footer />);
  const textElement = screen.getByText(/project created during wizeline academy react testing bootcamp/i);
  expect(textElement).toBeInTheDocument();
});
