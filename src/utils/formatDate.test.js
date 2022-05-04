import { formatDate } from "./formatDate";

describe('formatDate', () => {
  it('Should format a date with YYYY-MM-DD', () => {
    expect(formatDate(new Date('2/1/22'))).toBe('2022-02-01');
  });
})