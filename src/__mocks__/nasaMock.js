import { rest } from "msw";

import { setupServer } from "msw/node";

const server = setupServer(
    rest.get("https://api.nasa.gov/planetary/apod?api_key=GSO3Vs2HqGBMUFc4nTahTtnVTTOyrQtRvleRUZHn&date=2021-03-14", (req, res, ctx) => {
        
        return res(ctx.json({
            "copyright": "Mia Stålnacke",
            "date": "2021-03-14",
            "explanation": "It appeared, momentarily, like a 50-km tall banded flag.  In mid-March of 2015, an energetic Coronal Mass Ejection directed toward a clear magnetic channel to Earth led to one of the more intense geomagnetic storms of recent years. A visual result was wide spread auroras being seen over many countries near Earth's magnetic poles.  Captured over Kiruna, Sweden, the image features an unusually straight auroral curtain with the green color emitted low in the Earth's atmosphere, and red many kilometers higher up. It is unclear where the rare purple aurora originates, but it might involve an unusual blue aurora at an even lower altitude than the green, seen superposed with a much higher red.  Now past Solar Minimum, colorful nights of auroras over Earth are likely to increase.   Follow APOD: Through the Free NASA App",
            "hdurl": "https://apod.nasa.gov/apod/image/2103/AuroraFlag_Stalnacke_6677.jpg",
            "media_type": "image",
            "service_version": "v1",
            "title": "A Flag Shaped Aurora over Sweden",
            "url": "https://apod.nasa.gov/apod/image/2103/AuroraFlag_Stalnacke_960.jpg"
        }));
    })
);

module.exports = server;
