import { render, screen } from "@testing-library/react";

import Main from ".";

describe("Main page", () => {
	it("should render header, content, and footer", () => {
		render(<Main />);

		const header = screen.getByRole("heading", {
			name: /nasa's picture of the day/i,
		});
		const content = screen.getByRole("button", { name: /show/i });
		const footer = screen.getByText(
			/project created during wizeline academy react testing bootcamp/i
		);

		expect(header).toBeInTheDocument();
		expect(content).toBeInTheDocument();
		expect(footer).toBeInTheDocument();
	});
});
