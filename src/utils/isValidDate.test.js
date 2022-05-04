import { isValidDate } from "./isValidDate";

describe('isValidDate', () => {
  it('Should return valid date for new Date instances', () =>{
    expect(isValidDate(new Date())).toBeTruthy();
  });
});