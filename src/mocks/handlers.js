import { rest } from 'msw'
import { NASA_BASE_URL } from '../constants';
import nasaApodData1 from '../mocks/data/nasa-apod-01.json';
import nasaApodData2 from '../mocks/data/nasa-apod-02.json';

const pad2 = (n) => n.toString().length < 2 ? `0${n}` : `${n}`;

export const handlers = [
    rest.get(`${NASA_BASE_URL}`, async (req, res, ctx) => {
      const dateParam = req.url.searchParams.get('date');
      const curr = new Date();
      const todayString = `${curr.getFullYear()}-${pad2(curr.getMonth())}-${pad2(curr.getDate())}`;

      if (dateParam === todayString) {
        return res(
          ctx.status(200),
          ctx.json(nasaApodData1),
        );
      } else {
        return res(
          ctx.status(200),
          ctx.json(nasaApodData2),
        );
      }
    })
];
