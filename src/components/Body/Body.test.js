import { render, screen, within } from '@testing-library/react';
import Body from './Body';

const setup = () => {
  render(<Body />);
};

describe('Body component', () => {
  it('should have a date picker', () => {
    setup();

    const datePickerEl = screen.getByLabelText(/choose the date/i);

    expect(datePickerEl).toBeInTheDocument();
  });
  it('should not show APOD data before api is not fetched', () => {
    setup();

    const sectionEl = screen.getByTestId('section');

    const imgEl = within(sectionEl).queryByAltText(/apo img/i);
    const titleEl = within(sectionEl).queryByRole('heading');
    const dateEl = within(sectionEl).queryByRole('heading', {
      name: /^\d{2}\/\d{2}\/\d{4}$/
    });
    const asideEl = within(sectionEl).queryByRole('complementary');

    // Before the api is used
    expect(imgEl).not.toBeInTheDocument();
    expect(titleEl).not.toBeInTheDocument();
    expect(dateEl).not.toBeInTheDocument();
    expect(asideEl).not.toBeInTheDocument();
  });
  it.only('should show APOD data after sucefull api fetch', async () => {
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
