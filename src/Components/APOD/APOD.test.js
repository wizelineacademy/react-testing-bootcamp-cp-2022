import { getByText, render, screen } from "@testing-library/react";
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

    const titleEl = screen.getByRole("heading", { name: /the title/i });
    const imgEl = screen.getByRole("img");
    const explanationEl = screen.getByRole("article");

    expect(titleEl).toBeInTheDocument();
    expect(imgEl).toBeInTheDocument();
    expect(imgEl).toHaveAttribute(
      "src",
      "https://picsum.photos/seed/picsum/200/300"
    );
    expect(explanationEl).toBeInTheDocument();
  });
});
