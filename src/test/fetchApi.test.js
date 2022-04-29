import { render, screen } from "@testing-library/react";
import App from "../App";

describe("check api", () => {
    it("checks if date input is renders",() => {
        render(<App />)
  const today = new Date().toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const dateInput = screen.getByTestId("dateInput");

  expect(dateInput).toBeInTheDocument();
    })
});
