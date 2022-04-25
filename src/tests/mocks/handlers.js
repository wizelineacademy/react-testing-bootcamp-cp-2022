import { rest } from 'msw';
import testResponse from './testResponse.json';

export const handlers = [
  rest.get('https://api.nasa.gov/planetary/apod', (req, res, ctx) => {
    const requestedDate = req.url.searchParams.get('date');

    return res(ctx.status(200), ctx.json({ ...testResponse, requestedDate }));
  }),
];
