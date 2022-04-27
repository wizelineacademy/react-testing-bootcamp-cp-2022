import { render, screen } from "@testing-library/react";

import Header from ".";

const setUp = () => render(<Header />);

describe("Header", () => {
	it("should render the title", () => {
		const { container } = setUp();
		const title = screen.getByRole("heading", {
			name: /nasa's picture of the day/i,
		});

		expect(title).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});
});
