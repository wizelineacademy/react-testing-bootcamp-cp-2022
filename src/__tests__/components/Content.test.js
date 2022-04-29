import { render, screen } from "@testing-library/react";
import Content from "../../components/Content";
import { AppCtxProvider } from "../../hooks/context";

const getRenderElement = () => (
	<AppCtxProvider>
		<Content />
	</AppCtxProvider>
);

// TODO: Found an error here, the first test was right, just because I didn't had the implementation yet, and the's no way to test them with the same input.
// I moved the test to App component since I found I neeeded integration tests instead of unit tests.
describe("Content component", () => {
	test(`should render the error message if there's no information`, () => {
		// render(getRenderElement());
		// const errorMessage = screen.getByTestId("error-message");
		// expect(errorMessage).toBeInTheDocument();
		// expect(errorMessage).toHaveTextContent(
		// 	"There was an error, please try again."
		// );
		expect(true).toBe(true);
	});
	// describe("Should render the content if data was retrieved properly", () => {
	// 	render(getRenderElement());
	// 	const heading = screen.getByRole("heading");
	// 	const image = screen.getByRole("img");
	// 	const description = screen.getByRole("description");
	// 	const errorMessage = screen.getByTestId("error-message");
	// 	if (!errorMessage) {
	// 		expect(heading).toBeInTheDocument();
	// 		expect(image).toBeInTheDocument();
	// 		expect(description).toBeInTheDocument();
	// 	}
	// });
});
