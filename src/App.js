import { useEffect } from "react";
import "./App.css";
import Content from "./components/Content";
import DateSelector from "./components/DateSelector";
import { useCtxValue } from "./hooks/context";
import { getPictureOfTheDay } from "./services";

function App() {
	const { handleDataChange, data } = useCtxValue();

	useEffect(() => {
		getData();
		async function getData() {
			const { data } = await getPictureOfTheDay();
			handleDataChange(data);
		}
	}, []);

	return (
		<div className="container">
			<h1>NASA Picture of the day</h1>
			<DateSelector />
			<Content data={data} />
		</div>
	);
}

export default App;
