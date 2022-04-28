import styled from "styled-components";
import { useEffect, useState } from "react";
import { getImage } from "../../services/nasa";

import DateField from "../DateField";
import Description from "../Description";
import Image from "../Image";

const ERROR_MESSAGE = "There was an error, please try again.";

const Content = () => {
	const [imageOfTheDay, setImageOfTheDay] = useState({});
	const todaysDate = new Date().toISOString().split("T")[0];
	const [date, setDate] = useState(todaysDate);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState(ERROR_MESSAGE);

	const fetchImage = async (date) => {
		const url = new URL(process.env.REACT_APP_BASE_URL);
		url.searchParams.set("api_key", process.env.REACT_APP_API_KEY);
		if (date) {
			url.searchParams.set("date", date);
		}

		try {
			setLoading(true);
			const { data } = await getImage(url);
			setLoading(false);
			setError(false);
			setImageOfTheDay(data);
		} catch (error) {
			setLoading(false);
			const message = error.response.data.msg;
			if (message) {
				setErrorMsg(message);
			} else {
				setErrorMsg(ERROR_MESSAGE);
			}
			setError(true);
		}
	};

	useEffect(() => {
		fetchImage();
	}, []);

	return (
		<>
			<DateField date={date} setDate={setDate} handleClick={fetchImage} />
			{loading && <p>Loading...</p>}
			{error && <p>{errorMsg}</p>}
			{!loading && !error && (
				<MainContainer>
					<Image
						title={imageOfTheDay.title}
						date={date}
						url={imageOfTheDay.url}
					/>
					<Description explanation={imageOfTheDay.explanation} />
				</MainContainer>
			)}
		</>
	);
};

const MainContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 15px;
	padding: 10px;
	margin-bottom: 30px;
`;

export default Content;
