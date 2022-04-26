import { render, screen } from "@testing-library/react";
import React from "react";
import APOD from "./APOD";

describe("LandingPage tests", () => {
  it("Should have an img, title and explanation", () => {
    render(
      <APOD
        title="The title"
        imgSource="https://picsum.photos/seed/picsum/200/300"
        explanation="The picture explanation"
      />
    );

    const apodEl = screen.getByTestId("APOD");
    const titleEl = screen.getByRole("heading", { name: /the title/i });
    const explanationEl = screen.getByRole("article");

    expect(titleEl).toBeInTheDocument();
    expect(apodEl).toHaveStyle(
      `background-image: url(https://picsum.photos/seed/picsum/200/300)`
    );

    expect(explanationEl).toBeInTheDocument();
  });
});
