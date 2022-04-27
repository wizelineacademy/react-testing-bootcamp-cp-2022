import { render, screen } from "@testing-library/react";

import Description from ".";

const setUp = (props) => render(<Description {...props} />);

describe("Description", () => {
	describe("when a description prop is passed", () => {
		it("should display said description", () => {
			const props = {
				explanation:
					"The calendar month, a full moon name, distance in kilometers, and angular size is indicated for each stripe.",
			};
			const { container } = setUp(props);

			const description = screen.getByText(props.explanation);

			expect(description).toBeInTheDocument();
			expect(container).toMatchSnapshot();
		});
	});
});
