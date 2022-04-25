import { render, screen } from '@testing-library/react';
import Body from './Body';

describe('Body component', () => {
  it('should have a date picker', () => {
    render(<Body />);

    const datePickerEl = screen.getByLabelText(/date picker/i);

    expect(datePickerEl).toBeInTheDocument();
  });
  it('should not have the NASA APOD image, title, and date', () => {
    render(<Body />);

    const imgEl = screen.queryByAltText(/apo img/i);
    const titleEl = screen.queryByRole('heading');
    const dateEl = screen.queryByRole('heading', {
      name: /^\d{2}\/\d{2}\/\d{4}$/
    });

    // Before the api is used
    expect(imgEl).not.toBeInTheDocument();
    expect(titleEl).not.toBeInTheDocument();
    expect(dateEl).not.toBeInTheDocument();
  });
  it('should have the NASA APOD Description', () => {});
});
