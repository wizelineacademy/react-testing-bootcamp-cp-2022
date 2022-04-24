import { rest } from "msw";

export const handlers = [
	rest.get("https://api.nasa.gov/planetary/apod", (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				copyright: "Soumyadeep Mukherjee",
				date: "2022-01-01",
				explanation:
					"very Full Moon of 2021 shines in this year-spanning astrophoto project, a composite portrait of the familiar lunar nearside at each brightest lunar phase. Arranged by moonth, the year progresses in stripes beginning at the top. Taken with the same camera and lens the stripes are from Full Moon images all combined at the same pixel scale. The stripes still look mismatched, but they show that the Full Moon's angular size changes throughout the year depending on its distance from Kolkata, India, planet Earth. The calendar month, a full moon name, distance in kilometers, and angular size is indicated for each stripe. Angular size is given in minutes of arc corresponding to 1/60th of a degree. The largest Full Moon is near a perigee or closest approach in May. The smallest is near an apogee, the most distant Full Moon in December. Of course the full moons of May and November also slid into Earth's shadow during 2021's two lunar eclipses.",
				hdurl:
					"https://apod.nasa.gov/apod/image/2201/MoonstripsAnnotatedIG.jpg",
				media_type: "image",
				service_version: "v1",
				title: "The Full Moon of 2021",
				url: "https://apod.nasa.gov/apod/image/2201/MoonstripsAnnotatedIG_crop1024.jpg",
			})
		);
	}),
];
