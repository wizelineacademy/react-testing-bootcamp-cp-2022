import React from "react";
import { useCtxValue } from "../hooks/context";

const DateSelector = () => {
	const { handleDateChange, date } = useCtxValue();

	return (
		<input
			type="date"
			onChange={(e) => handleDateChange(e.target.value)}
			name="date"
			value={date}
			id=""
			data-testid="date"
		/>
	);
};

export default DateSelector;
