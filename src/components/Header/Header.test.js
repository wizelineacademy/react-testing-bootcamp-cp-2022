import { render } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('should have the project title', () => {
    render(<Header />);
  });
});
