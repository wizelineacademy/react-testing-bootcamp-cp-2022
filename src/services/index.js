import axios from "axios";

export const getPictureOfTheDay = async (date) =>
	await axios.get(
		date
			? `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&date=${date}`
			: `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`
	);
