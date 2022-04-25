import { render, screen, within } from '@testing-library/react';
import Body from './Body';

describe('Body component', () => {
  it('should have a date picker', () => {
    render(<Body />);

    const datePickerEl = screen.getByLabelText(/choose the date/i);

    expect(datePickerEl).toBeInTheDocument();
  });
  it('should not show APOD data before api is not fetched', () => {
    const { container } = render(<Body />);

    const sectionEl = container.querySelector('section');

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
  it('should not show APOD data after sucefull api fetch ', () => {
    const { container } = render(<Body />);

    const sectionEl = container.querySelector('section');

    const imgEl = within(sectionEl).queryByAltText(/apo img/i);
    const titleEl = within(sectionEl).queryByRole('heading');
    const dateEl = within(sectionEl).queryByRole('heading', {
      name: /^\d{2}\/\d{2}\/\d{4}$/
    });
    const asideEl = within(sectionEl).queryByRole('complementary');

    // Before the api is used
    expect(imgEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
    expect(dateEl).toBeInTheDocument();
    expect(asideEl).toBeInTheDocument();
  });
  it('should have the NASA APOD Description', () => {});
});
