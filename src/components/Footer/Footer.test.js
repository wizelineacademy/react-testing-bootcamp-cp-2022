import { render, screen } from "@testing-library/react";

import Footer from ".";

const setUp = () => render(<Footer />);

describe("Footer", () => {
	it("should render the footer text", () => {
		const { container } = setUp();

		const footer = screen.getByText(
			/project created during wizeline academy react testing bootcamp/i
		);

		expect(footer).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});
});
