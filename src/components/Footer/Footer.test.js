import { render, screen } from "@testing-library/react";

import Footer from ".";

describe("Footer", () => {
	it("should render the footer text", () => {
		render(<Footer />);

		const footer = screen.getByText(
			/project created during wizeline academy react testing bootcamp/i
		);

		expect(footer).toBeInTheDocument();
	});
});
