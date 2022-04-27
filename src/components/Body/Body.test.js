import { render, screen, within } from '@testing-library/react';
import Body from './Body';

describe('Body component', () => {
  it('should have a date picker', () => {
    render(<Body />);

    const datePickerEl = screen.getByLabelText(/choose the date/i);

    expect(datePickerEl).toBeInTheDocument();
  });
  it('should not show APOD data before api is not fetched', () => {
    render(<Body />);

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
    render(<Body />);

    const imgEl = await screen.findByAltText(/apo img/i);
    const titleEl = await screen.findByRole('heading');
    const dateEl = await screen.findByRole('heading', {
      name: /^\d{2}\/\d{2}\/\d{4}$/
    });
    const asideEl = await screen.findByRole('complementary');

    // Before the api is used
    expect(imgEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
    expect(dateEl).toBeInTheDocument();
    expect(asideEl).toBeInTheDocument();
  });
});

// Loader
// Future date (error msg)
