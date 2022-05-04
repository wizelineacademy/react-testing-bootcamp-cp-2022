import { rest } from 'msw'
import { NASA_BASE_URL } from '../constants';
import nasaApodData1 from '../mocks/data/nasa-apod-01.json';
import nasaApodData2 from '../mocks/data/nasa-apod-02.json';
import nasaApod400Error from '../mocks/data/nasa-apod-400-error.json';

export const handlers = [
    rest.get(`${NASA_BASE_URL}`, async (req, res, ctx) => {
      const lowerLimitDay = new Date(1995, 5, 16);
      const requestedDayString = req.url.searchParams.get('date');
      const [year, month, day] = requestedDayString.split('-').map(Number)
      const monthIndex = month - 1;
      const requestedDay = new Date(year, monthIndex, day);
      const today = new Date();

      if (requestedDay.toDateString() === today.toDateString()) {
        // if requesting today's picture return image 1

        return res(
          ctx.status(200),
          ctx.json(nasaApodData1),
        );
      } else if (requestedDay > today || requestedDay < lowerLimitDay) {
        // if requesting a not valid date return mocker error
        const errorTemplate = nasaApod400Error.msg;
        const errorResponse = { ...nasaApod400Error, msg: errorTemplate.replace('$TODAY', today.toDateString()) }

        // return mocked expected error: 400 - BAD REQUEST
        return res(
          ctx.status(400),
          ctx.json(errorResponse),
        );
      } else {

        return res(
          ctx.status(200),
          ctx.json({ ...nasaApodData2, date: requestedDayString }),
        );
      }
    })
];
