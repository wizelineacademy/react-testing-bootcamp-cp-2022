import { render, screen } from "@testing-library/react";

import Header from ".";

describe("Header", () => {
	it("should render the title", () => {
		render(<Header />);

		const title = screen.getByRole("heading", {
			name: /nasa's picture of the day/i,
		});

		expect(title).toBeInTheDocument();
	});
});
