import { createContext, useContext, useEffect, useState } from "react";
import { getPictureOfTheDay } from "../services";

const AppContext = createContext();

export const AppCtxProvider = (props) => {
	const [date, setDate] = useState("");
	const [data, setData] = useState("");

	useEffect(() => {
		getNewData().catch((error) => handleError());

		async function getNewData() {
			const { data } = await getPictureOfTheDay(date);
			setData(data);
		}
	}, [date]);

	const requestLatestData = async () => {
		const { data } = await getPictureOfTheDay();
		setData(data);
	};

	const handleDateChange = (date) => {
		setDate(date);
	};

	const handleDataChange = (data) => {
		setData(data);
	};

	const handleError = () => {
		setData(null);
	};

	return (
		<AppContext.Provider
			value={{
				date,
				data,
				handleDateChange,
				handleDataChange,
				handleError,
				requestLatestData
			}}
			{...props}
		/>
	);
};

export const useCtxValue = () => useContext(AppContext);
