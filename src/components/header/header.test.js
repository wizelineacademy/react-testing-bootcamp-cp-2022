import {render, screen} from '@testing-library/react';
import { Header } from '.';

const setup = () => render(<Header />);

describe('<header />', () => {
  it('Should render header component successfully', () => {
    setup();
  });

  it('Should contains TDD is an awesome philosophy', () => {
    setup();

    const textHeader = screen.getByRole('heading', { name: /tdd is an awesome philosophy/i });

    expect(textHeader).toBeInTheDocument();
  });
})