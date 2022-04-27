import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.nasa.gov/planetary/apod', (req, res, ctx) => {
    // req queryString date if > off currrent date

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        date: '2022-04-24',
        explanation:
          "Just now, before you hit the button, two future universes are possible.  After pressing the button, though, you will live in only one.  A real-web version of the famous Schr\u00f6dinger's cat experiment clicking the red button in the featured astronaut image should transform that image into a picture of the same astronaut holding one of two cats -- one living, or one dead.  The timing of your click, combined with the wiring of your brain and the millisecond timing of your device, will all conspire together to create a result dominated, potentially, by the randomness of quantum mechanics.  Some believe that your personally-initiated quantum decision will split the universe in two, and that both the live-cat and dead-cat universes exist in separate parts of a larger multiverse. Others believe that the result of your click will collapse the two possible universes into one -- in a way that could not have been predicted beforehand.  Yet others believe that the universe is classically deterministic, so that by pressing the button you did not really split the universe, but just carried out an action predestined since time began.   We at APOD believe that however silly you may feel clicking the red button, and regardless of the outcome,  you should have a thought-provoking day.  Or two.",
        hdurl:
          'https://apod.nasa.gov/apod/image/1704/SatelliteSale_NASA_960_split3.jpg',
        media_type: 'image',
        service_version: 'v1',
        title: 'Split the Universe',
        url: 'https://apod.nasa.gov/apod/image/1704/SatelliteSale_NASA_960_split3.jpg'
      })
    );
  })
];
