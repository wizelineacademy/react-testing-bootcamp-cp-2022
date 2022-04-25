import { render, screen } from '@testing-library/react';

import { DatePickerInput } from '../../components/DatePickerInput';

describe('Tests on datePicker component', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <DatePickerInput value={new Date('2/1/20')} />
    );
    expect(container).toMatchSnapshot();
  });

  test('should have todays date as default value', async () => {
    const defaultDate = new Date();
    render(<DatePickerInput value={defaultDate} />);
    const dateInput = screen.getByLabelText(/Pick a date/i);
    const inputDate = new Date(dateInput.value);
    expect(inputDate.toLocaleDateString()).toBe(
      defaultDate.toLocaleDateString()
    );
  });

  test('should display error message', () => {
    render(<DatePickerInput validDate={false} />);

    const errorMsg = screen.getByText(/Please provide a valid date/i);
    expect(errorMsg).toBeInTheDocument();
  });
});
