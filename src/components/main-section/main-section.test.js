import { render, screen } from '@testing-library/react';
import { server } from '../../mocks/server';
import { MainSection } from '.';

const setup = () => render(<MainSection />);

describe('<MainSection />', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Should render MainSection successfully', () => {
    setup();
  });

  it('Should render a calendar picker', () => {
    setup();

    const pickerEl = screen.getByLabelText(/select a date/i);

    expect(pickerEl).toBeInTheDocument();
  });


  describe('Image section', () => {
    it('Should contain an image title', () => {
      setup();
      expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    it('Should display an img element', () => {
      setup();

      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('Should show the Picture of the Day', async () => {
      setup();

      const imageEl = await screen.findByRole('img', { name: /N11: Star Clouds of the LMC/i });
      expect(imageEl).toBeInTheDocument();
    });
  });

  describe('Text description section', () => {
    it('Should contain text', async () => {
      setup();

      const containerEl = await screen.findByText(/Some description/i);

      expect(containerEl).toBeInTheDocument();
    });
  });
});