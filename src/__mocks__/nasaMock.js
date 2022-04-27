import { rest } from "msw";

import { setupServer } from "msw/node";

const server = setupServer(

    rest.get("https://api.nasa.gov/planetary/apod", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(
                {
                    copyright: "Mia Stålnacke",
                    date: "2021-03-14",
                    explanation: "It appeared, momentarily, like a 50-km tall banded flag.  In mid-March of 2015, an energetic Coronal Mass Ejection directed toward a clear magnetic channel to Earth led to one of the more intense geomagnetic storms of recent years.",
                    hdurl: "https://apod.nasa.gov/apod/image/2103/AuroraFlag_Stalnacke_6677.jpg",
                    media_type: "image",
                    service_version: "v1",
                    title: "A Flag Shaped Aurora over Sweden",
                    url: "https://apod.nasa.gov/apod/image/2103/AuroraFlag_Stalnacke_960.jpg"
                }
            )
        );
    }),

    rest.get("https://api.nasa.gov/planetary/apod/1993-03-14", (req, res, ctx) => {
        return res(
            ctx.status(400),
            ctx.json(
                {
                    code: 400,
                    msg: "Date must be between Jun 16, 1995 and Apr 27, 2022.","service_version":"v1"
                }

            )
        );
    })
);

module.exports = server;
