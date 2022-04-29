import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { AppCtxProvider } from "../hooks/context";
import App from "../App";

const getRenderElement = () => (
	<AppCtxProvider>
		<App />
	</AppCtxProvider>
);

test("renders learn react link", async () => {
	render(getRenderElement());
	const linkElement = screen.getByText(/NASA Picture of the day/i);
	expect(linkElement).toBeInTheDocument();
});

test("renders the image of the day", async () => {
	render(getRenderElement());
	const image = await waitFor(() => screen.findByRole("img"));

	expect(image).toBeInTheDocument();
});

// Acceptance criteria 1
test("Should render the image of the day at mount", async () => {
	render(getRenderElement());
	const image = await waitFor(() => screen.findByRole("img"));

	expect(screen.getByTestId("title")).toHaveTextContent(
		"Valles Marineris: The Grand Canyon of Mars"
	);
	expect(image).toHaveProperty(
		"src",
		"https://apod.nasa.gov/apod/image/2005/marsglobe_viking_960.jpg"
	);
});

// Acceptance criteria 2
test("Should request the image of given date when is selected", async () => {
	render(getRenderElement());
	const dateInput = await screen.findByTestId("date");
	fireEvent.change(dateInput, { target: { value: "2020-01-02" } });
	const image = await waitFor(() => screen.findByRole("img"));

	expect(screen.getByTestId("title")).toHaveTextContent(
		"This is a picture of the day"
	);
	expect(image).toHaveProperty(
		"src",
		"https://apod.nasa.gov/apod/image/2005/marsglobe_viking_800.jpg"
	);
});

// Acceptance criteria 3
test("Should show an error when the date is invalid or the request goes wrong", async () => {
	render(getRenderElement());
	const dateInput = await screen.findByTestId("date");

	fireEvent.change(dateInput, { target: { value: "sd" } });

	const error = await waitFor(() => screen.findByTestId("error-message"));
	await waitFor(() => setTimeout(() => {}, 3000));

	expect(error).toHaveTextContent("error");
});

// Acceptance criteria 4
test("Should get the latest picture of the day when clicking the button on the error message", async () => {
	render(getRenderElement());
	const dateInput = await screen.findByTestId("date");

	fireEvent.change(dateInput, { target: { value: "sd" } });

	await waitFor(() => screen.findByTestId("error-message"));

	fireEvent.click(screen.getByText("Try again"));

	const image = await waitFor(() => screen.findByRole("img"));

	expect(screen.getByTestId("title")).toHaveTextContent(
		"Valles Marineris: The Grand Canyon of Mars"
	);
	expect(image).toHaveProperty(
		"src",
		"https://apod.nasa.gov/apod/image/2005/marsglobe_viking_960.jpg"
	);
});
