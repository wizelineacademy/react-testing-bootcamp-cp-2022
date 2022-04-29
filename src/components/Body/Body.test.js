import { render, screen, within, fireEvent } from '@testing-library/react';
import Body, { todayDate } from '.';

const setup = () => {
  render(<Body />);
};

const getDatePickerEl = () => {
  return screen.getByLabelText(/choose the date/i);
};

describe('Body component', () => {
  it('should have a date picker with the current date', () => {
    setup();

    const datePickerEl = getDatePickerEl();

    expect(datePickerEl).toBeInTheDocument();
    expect(datePickerEl.value).toBe(todayDate);
  });

  it('should show a loader', () => {
    setup();

    const contentEl = screen.queryByTestId('content');

    const loaderEl = screen.queryByTestId('loader');

    // Before the api is fetch should not show
    expect(contentEl).not.toBeInTheDocument();

    // Get loader
    expect(loaderEl).toBeInTheDocument();
  });
  it('should show APOD data after sucefull api fetch', async () => {
    setup();

    const contentEl = await screen.findByTestId('content');

    const imgEl = within(contentEl).getByAltText(/apo img/i);
    const titleEl = within(contentEl).getByRole('heading');
    const dateEl = within(contentEl).getByText(/^\d{4}\-\d{2}\-\d{2}$/);
    const asideEl = within(contentEl).getByRole('complementary');

    // All elements are conditional render inside section
    expect(imgEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
    expect(dateEl).toBeInTheDocument();
    expect(asideEl).toBeInTheDocument();
  });
  it('should show an error if user select and invalid date', async () => {
    setup();

    let date = new Date();
    // add 5 days
    date = new Date(date.setDate(date.getDate() + 5))
      .toISOString()
      .split('T')[0];

    const datePickerEl = getDatePickerEl();

    // trigger the onChange event
    fireEvent.change(datePickerEl, {
      target: { value: date }
    });

    // should show the error msg
    const errorEl = await screen.findByTestId('error');

    const msgEl = within(errorEl).getByRole('heading');

    expect(msgEl).toBeInTheDocument();
  });
});

// Loader
