import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.nasa.gov/planetary/apod', (req, res, ctx) => {

    const date = req.url.searchParams.get('date');

    if (date === '2100-01-01') {
      return res(
        ctx.status(400)
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        date: "2022-04-12",
        explanation: "Some description",
        hdurl: "https://apod.nasa.gov/apod/image/2204/N11_HubbleLake_1600.jpg",
        media_type: "image",
        service_version: "v1",
        title: "N11: Star Clouds of the LMC",
        url: "https://apod.nasa.gov/apod/image/2204/N11_HubbleLake_960.jpg"
      }),
    )
  }),
]