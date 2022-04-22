import { render, screen } from "@testing-library/react";

import Image from ".";

const setUp = (props) => render(<Image {...props} />);

describe("Image", () => {
	describe("when props are passed", () => {
		it("should display title, date, and image(url)", () => {
			const props = {
				title: "The Full Moon of 2021",
				date: "2022-01-01",
				url: "https://apod.nasa.gov/apod/image/2201/MoonstripsAnnotatedIG_crop1024.jpg",
			};
			setUp(props);

			const imageTitle = screen.getByText(props.title);
			const date = screen.getByText(props.date);
			const image = screen.getByAltText(props.title);

			expect(imageTitle).toBeInTheDocument();
			expect(date).toBeInTheDocument();
			expect(image).toBeInTheDocument();
			expect(image).toHaveAttribute("src", props.url);
		});
	});
});
