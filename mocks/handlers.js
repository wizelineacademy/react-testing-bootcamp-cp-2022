import { rest } from "msw";
import moment from "moment";

export const handlers = [
  rest.get("https://api.nasa.gov/planetary/apod", (req, res, ctx) => {
    const date = req.url.searchParams.get("date");
    const today = moment().format("YYYY-MM-DD");
    if (moment(date).isBefore(today)) {
      return res(
        ctx.status(200),
        ctx.json({
          date: date,
          explanation:
            "What does a black hole look like? To find out, radio telescopes from around the Earth coordinated observations of black holes with the largest known event horizons on the sky.  Alone, black holes are just black, but these monster attractors are known to be surrounded by glowing gas.  This first image resolves the area around the black hole at the center of galaxy M87 on a scale below that expected for its event horizon.  Pictured, the dark central region is not the event horizon, but rather the black hole's shadow -- the central region of emitting gas darkened by the central black hole's gravity. The size and shape of the shadow is determined by bright gas near the event horizon, by strong gravitational lensing deflections, and by the black hole's spin.  In resolving this black hole's shadow, the Event Horizon Telescope (EHT) bolstered evidence that Einstein's gravity works even in extreme regions, and gave clear evidence that M87 has a central spinning black hole of about 6 billion solar masses.  Since releasing this featured image in 2019, the EHT has expanded to include more telescopes, observe more black holes, track polarized light,and is working to observe the immediately vicinity of the black hole",
          hdurl: "https://apod.nasa.gov/apod/image/2205/M87bh_EHT_2629.jpg",
          media_type: "image",
          service_version: "v1",
          title: "Astronomy Picture of the Day",
          url: "https://apod.nasa.gov/apod/image/2205/M87bh_EHT_960.jpg",
        })
      );
    } else {
      const todayFormat = moment().format("MMM DD, YYYY");
      return res(
        ctx.status(400),
        ctx.json({
          code: 400,
          msg: `Date must be between Jun 16, 1995 and ${todayFormat}.`,
          service_version: "v1",
        })
      );
    }
  }),
];
