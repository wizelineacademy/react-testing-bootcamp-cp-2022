import {render, screen} from '@testing-library/react';
import { Footer } from '.';

const setup = () => render(<Footer />);

describe('<Footer />', () => {
  it('Should render the Footer successfully', () => {
    setup();
  });

  it('Must contain the text "Project created during Wizeline Academy React Testing Bootcamp"', () => {
    setup();

    const textInFooter = screen.getByText(/Project created during Wizeline Academy React Testing Bootcamp/);

    expect(textInFooter).toBeInTheDocument();
  });
})