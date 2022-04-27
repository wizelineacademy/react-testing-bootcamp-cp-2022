import { render, screen, within } from '@testing-library/react';
import Body from './Body';

const setup = () => {
  render(<Body />);
};

describe('Body component', () => {
  it('should have a date picker with the current date', () => {
    setup();

    const todayDate = new Date().toISOString().split('T')[0];

    const datePickerEl = screen.getByLabelText(/choose the date/i);

    expect(datePickerEl).toBeInTheDocument();
    expect(datePickerEl.value).toBe(todayDate);
  });
  it('should not show APOD data before api is not fetched', () => {
    setup();

    const sectionEl = screen.queryByTestId('section');

    // Before the api is fetch should not be an <section>
    expect(sectionEl).not.toBeInTheDocument();
  });
  it('should show APOD data after sucefull api fetch', async () => {
    setup();

    const sectionEl = await screen.findByTestId('section');

    const imgEl = within(sectionEl).getByAltText(/apo img/i);
    const titleEl = within(sectionEl).getByRole('heading');
    const dateEl = within(sectionEl).getByText(/^\d{4}\-\d{2}\-\d{2}$/);
    const asideEl = within(sectionEl).getByRole('complementary');

    // All elements are conditional render inside section
    expect(imgEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
    expect(dateEl).toBeInTheDocument();
    expect(asideEl).toBeInTheDocument();
  });
});

// Loader
// Future date (error msg)
