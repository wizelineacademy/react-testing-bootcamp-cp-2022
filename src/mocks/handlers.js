import { rest } from "msw";

export const handlers = [
  rest.get("https://api.nasa.gov/planetary/apod", (req, res, ctx) => {
    const date = req.url.searchParams.get("date");
    console.log("fecha:", date);
    if (date === "2020-01-01") {
      return res(
        ctx.status(200),
        ctx.json({
          date: "2020-01-01",
          explanation:
            "Why is Betelgeuse fading?  No one knows.  Betelgeuse, one of the brightest and most recognized stars in the night sky, is only half as bright as it used to be only five months ago.  Such variability is likely just  normal behavior for this famously variable supergiant, but the recent dimming has rekindled discussion on how long it may be before Betelgeuse does go supernova.  Known for its red color, Betelgeuse is one of the few stars to be resolved by modern telescopes, although only barely.  The featured artist's illustration imagines how Betelgeuse might look up close. Betelgeuse is thought to have a complex and tumultuous surface that frequently throws impressive flares.  Were it to replace the Sun (not recommended), its surface would extend out near the orbit of Jupiter, while gas plumes would bubble out past Neptune.  Since Betelgeuse is about 700 light years away, its eventual supernova will not endanger life on Earth even though its brightness may rival that of a full Moon.  Astronomers -- both amateur and professional -- will surely continue to monitor Betelgeuse as this new decade unfolds.    Free Presentation: APOD Editor to show best astronomy images of 2019 -- and the decade -- in NYC on January 3",
          hdurl:
            "https://apod.nasa.gov/apod/image/2001/BetelgeuseImagined_EsoCalcada_2662.jpg",
          media_type: "image",
          service_version: "v1",
          title: "Betelgeuse Imagined",
          url: "https://apod.nasa.gov/apod/image/2001/BetelgeuseImagined_EsoCalcada_960.jpg",
        })
      );
    }
    if (date === "2030-01-01") {
      return res(
        ctx.status(400),
        ctx.json({
          code: 400,
          msg: "Date must be between Jun 16, 1995 and May 03, 2022.",
          service_version: "v1",
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        copyright: "Jeff Dai",
        date: "2022-04-28",
        explanation:
          "In the early hours of April 24 this bright Lyrid meteor flashed along the central Milky Way. For a moment, it cast a bright reflection across Lake Nian, Yunnan province, China. The annual Lyrid meteor shower, one of the oldest known, is active in late April, as our fair planet plows through dust left along the orbit of long-period comet Thatcher. The trail of the bright fireball points back toward the shower's radiant in the constellation Lyra high in the northern springtime sky and off the top of the frame. Just rising in that starry sky, light from a third quarter moon also cast a glow on the peaceful waters of the lake.",
        hdurl:
          "https://apod.nasa.gov/apod/image/2204/LyridoverChinaJeffDai.jpg",
        media_type: "image",
        service_version: "v1",
        title: "Lyrid of the Lake",
        url: "https://apod.nasa.gov/apod/image/2204/LyridoverChinaJeffDai1024.jpg",
      })
    );
  }),
];
