import { rest } from "msw";

const DATES = {
	apiError: "2023-01-01",
	error: "2022-01-01",
};

export const handlers = [
	rest.get(
		`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=2023-01-01`,
		(req, res, ctx) => {
			const date = req.url.searchParams.get("date");
			if (date === DATES.apiError) {
				return res(
					ctx.status(400),
					ctx.json({
						msg: "Date must be between Jun 16, 1995 and Apr 28, 2022.",
					})
				);
			} else if (date === DATES.error) {
				return res(
					ctx.status(403),
					ctx.json({
						error: {
							code: "API_KEY_INVALID",
							message:
								"An invalid api_key was supplied. Get one at https://api.nasa.gov:443",
						},
					})
				);
			} else {
				return res(
					ctx.status(200),
					ctx.json({
						copyright: "Jeff Dai",
						date: "2022-04-28",
						explanation:
							"For a moment, it cast a bright reflection across Lake Nian, Yunnan province, China",
						hdurl:
							"https://apod.nasa.gov/apod/image/2204/LyridoverChinaJeffDai.jpg",
						media_type: "image",
						service_version: "v1",
						title: "Lyrid of the Lake",
						url: "https://apod.nasa.gov/apod/image/2204/LyridoverChinaJeffDai1024.jpg",
					})
				);
			}
		}
	),
];
