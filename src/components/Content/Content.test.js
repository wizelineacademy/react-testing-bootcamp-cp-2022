import {
	fireEvent,
	render,
	screen,
	waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Content from ".";

const setUp = () => render(<Content />);

const getDateField = () => screen.getByTestId("date-field");
const getTitle = () => screen.getByText(/lyrid of the lake/i);
const getDate = () => screen.getByText("28/04/2022");
const getDescription = () =>
	screen.getByText(
		/For a moment, it cast a bright reflection across Lake Nian, Yunnan province, China/i
	);
const getImage = () => screen.getByAltText(/lyrid of the lake/i);
const waitForLoadingToBeRemoved = () => screen.queryByText(/loading.../i);
const getShowButton = () => screen.getByRole("button", { name: /show/i });

describe("Content", () => {
	describe("when loading", () => {
		it("should display 'Loading...'", async () => {
			setUp();

			expect(screen.getByText(/loading.../i)).toBeInTheDocument();
		});
	});
	describe("when page has been loaded", () => {
		it("should display correct title, date, description  and image", async () => {
			setUp();

			await waitForElementToBeRemoved(() => waitForLoadingToBeRemoved());

			expect(getTitle()).toBeInTheDocument();
			expect(getDate()).toBeInTheDocument();
			expect(getDescription()).toBeInTheDocument();
			expect(getImage()).toBeInTheDocument();
		});
	});
	describe("when an error is returned", () => {
		it("should show api's error message", async () => {
			setUp();

			fireEvent.change(getDateField(), { target: { value: "2023-01-01" } });
			userEvent.click(getShowButton());

			await waitForElementToBeRemoved(() => waitForLoadingToBeRemoved());

			expect(
				screen.getByText(/date must be between jun 16, 1995 and apr 28, 2022./i)
			).toBeInTheDocument();
		});
	});

	describe("when there is an unexpected error", () => {
		it('should show a message: "There was an error, please try again."', async () => {
			setUp();

			fireEvent.change(getDateField(), { target: { value: "2022-01-01" } });
			userEvent.click(getShowButton());

			await waitForElementToBeRemoved(() => waitForLoadingToBeRemoved());

			expect(
				screen.getByText("There was an error, please try again.")
			).toBeInTheDocument();
		});
	});
});
