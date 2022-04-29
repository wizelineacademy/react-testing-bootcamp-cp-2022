import { fireEvent, render, screen } from "@testing-library/react";
import DateSelector from "../../components/DateSelector";
import { AppCtxProvider } from "../../hooks/context";

const getElementRender = () => {
	return (
		<AppCtxProvider>
			<DateSelector />
		</AppCtxProvider>
	);
};

describe("DateSelector component", () => {
	test("if a input of type date is rendered", () => {
		render(getElementRender());
		const input = screen.getByTestId("date");
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute("type", "date");
	});
});

// I impleented this before the ctx implementation
// when I added the ctx logic, I got some errors because I wasn't wrapping the component within the app provider
describe("Value change", () => {
	it("if value changes as user select a new date", async () => {
		render(getElementRender());
		const dateInput = await screen.findByTestId("date");
		fireEvent.change(dateInput, { target: { value: "2020-01-02" } });
		expect(dateInput).toHaveValue("2020-01-02");
	});
});
