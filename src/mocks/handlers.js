// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
	rest.get(`https://api.nasa.gov/planetary/apod`, (req, res, ctx) => {
		const date = req.url.searchParams.get("date");
		const regex = new RegExp(
			"((?:19|20)\\d\\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])"
		);

		if (date) {
			if (regex.test(date)) {
				return res(
					ctx.status(200),
					ctx.json({
						date: date,
						explanation: "This is a picture of the day",
						title: "This is a picture of the day",
						url: "https://apod.nasa.gov/apod/image/2005/marsglobe_viking_800.jpg"
					})
				);
			} else {
				return res(
					ctx.status(400),
					ctx.json({
						code: 400,
						msg: "error",
						service_version: "v1"
					})
				);
			}
		} else {
			return res(
				ctx.status(200),
				ctx.json({
					date,
					explanation:
						"The largest canyon in the Solar System cuts a wide swath across the face of Mars.  Named Valles Marineris, the grand valley extends over 3,000 kilometers long, spans as much as 600 kilometers across, and delves as much as 8 kilometers deep.  By comparison, the Earth's Grand Canyon in Arizona, USA is 800 kilometers long, 30 kilometers across, and 1.8 kilometers deep.  The origin of the Valles Marineris remains unknown, although a leading hypothesis holds that it started as a crack billions of years ago as the planet cooled.  Several geologic processes have been identified in the canyon.  The featured mosaic was  created from over 100 images of Mars taken by Viking Orbiters in the 1970s.",
					hdurl:
						"https://apod.nasa.gov/apod/image/2005/marsglobe_viking_1552.jpg",
					media_type: "image",
					service_version: "v1",
					title: "Valles Marineris: The Grand Canyon of Mars",
					url: "https://apod.nasa.gov/apod/image/2005/marsglobe_viking_960.jpg"
				})
			);
		}
	})
];
