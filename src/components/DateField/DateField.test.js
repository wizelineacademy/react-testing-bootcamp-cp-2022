import { render, screen } from "@testing-library/react";

import DateField from ".";

const setUp = (props) => render(<DateField {...props} />);

describe("DateField", () => {
	it("should render the date field and button", () => {
		const { container } = setUp();

		const dateField = screen.getByTestId("date-field");
		const button = screen.getByText(/show/i);

		expect(dateField).toBeInTheDocument();
		expect(button).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});

	describe("when the date prop is passed", () => {
		it("should display the date value", () => {
			setUp({ date: "2022-01-01" });

			const dateField = screen.getByTestId("date-field");

			expect(dateField).toHaveValue("2022-01-01");
		});
	});
});
