import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

const getRenderElement = () => <Footer />;

describe("Footer component", () => {
	test("Footer should be rendered and containing the wizeline academy bootcamp message", () => {
		render(getRenderElement());

		const footer = screen.getByTestId("footer");
		expect(footer).toBeInTheDocument();
		expect(footer).toHaveTextContent(
			"Project created during Wizeline Academy React Testing Bootcamp."
		);
	});
});
