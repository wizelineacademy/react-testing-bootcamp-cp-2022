import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { server } from '../mocks/server';
import { rest } from 'msw';
import Pictures from './Pictures';
import { NASA_BASE_URL } from "../constants";

const setup = () => render(<Pictures />);

describe('Pictures Component', () => {
    it('should render correctly the header', async ()=>{
        setup();
        await waitFor(() => screen.findByRole('img', { name: /picture of the day/i }, { timeout: 3000 }));
        const headingEl = screen.getByRole('heading', { name: /picture of the day/i });
        expect(headingEl).toBeInTheDocument();
    });
    
    it('should render correctly the footer', async () => {
        setup();
        await waitFor(() => screen.findByRole('img', { name: /picture of the day/i }, { timeout: 3000 }));
        const footerEl = screen.getByRole('contentinfo', { text : /project created during wizeline academy react testing bootcamp/i });
        expect(footerEl).toBeInTheDocument();
    });

    it('should render correctly the main content', async () => {
        setup();
        await waitFor(() => screen.findByRole('img', { name: /picture of the day/i }, { timeout: 3000 }));
        const mainEl = screen.getByRole('main');
        expect(mainEl).toBeInTheDocument();
    });
    
    it('should show the picture of the day', async () => {
        setup();
        const imageEl = await waitFor(() => screen.findByRole('img', { name: /picture of the day/i }, { timeout: 3000 }));
        expect(imageEl).toBeInTheDocument();
        expect(imageEl.src).toEqual('https://apod.nasa.gov/apod/image/2203/VenusMars_Fairbairn_960.jpg');
    });
    
    it('should show picture of the day info', async () => {
        setup();
        await waitFor(() => screen.findByRole('img', { name: /picture of the day/i }, { timeout: 3000 }));

        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/venus and mars: passing in the night/i);
        expect(screen.getByTestId('picture-date')).toHaveTextContent('2022-03-29');
        expect(screen.getByTestId('picture-explanation')).toHaveTextContent(/when two planets pass on the night sky/i);
        expect(screen.getByText(/copyright/i)).toHaveTextContent(/carlos kiko fairbairn/i);
    });

    it('should show the picture of the day for the given date', async () => {
        const { click } = userEvent.setup();
        setup()
        // wait for the current day image to load (default img)
        const firstImageEl = await waitFor(() => screen.findByRole('img', { name: /picture of the day/i }, { timeout: 3000 }));
        expect(firstImageEl).toBeInTheDocument();
        expect(firstImageEl.src).toEqual('https://apod.nasa.gov/apod/image/2203/VenusMars_Fairbairn_960.jpg');

        // get all buttons from the UI, there should be only 2
        // 0. datepicker - clear date button
        // 1. datepicker - open calendar button
        const originalButtonEls = screen.getAllByRole('button');
        expect(originalButtonEls).toHaveLength(2);
        const datePickerButton = originalButtonEls[1];

        await click(datePickerButton);

        // get all button from the UI, there should be more than 30 buttons
        // since the date-picker component doesn't render a table, but a button for each day in the calendar
        const buttonEls = screen.getAllByRole('button');
        expect(buttonEls.length).toBeGreaterThan(30);

        // get the current selected button
        const activeDayButton = buttonEls.find(btn => btn.className.includes('react-calendar__tile--active'));
        // get the current selected day
        const currDay = Number(activeDayButton.textContent);
        // calculate the next day, less thant 27 to be within a safe range
        const nextDay = currDay > 27 ? 1 : currDay + 1;
        // get the next day button
        const nextDayButton = buttonEls.find(btn => btn.textContent === nextDay.toString());

        // change the selected day in the calendar
        await click(nextDayButton);

        // wait for the next day image to load
        const secondImageEl = await waitFor(() => screen.findByRole('img', { name: /picture of the day/i }, { timeout: 3000 }));
        expect(secondImageEl).toBeInTheDocument();
        expect(secondImageEl.src).toEqual('https://apod.nasa.gov/apod/image/2204/CmbDipole_cobe_960.jpg');
    });

    // 404 - unexpected error
    it('should show the message: "There was an error, please try again." when there is an unexpected error while fetching the API', async () => {
        // mock 
        server.use(
            rest.get(`${NASA_BASE_URL}`, async (req, res, ctx) => {
                return res(ctx.status(500), ctx.json({message: 'Unexpected Error!'}))
            })
        );
        setup();
        const errorEl = await waitFor(() => screen.findByText(/there was an error/i, { timeout: 3000 }));
        expect(errorEl).toHaveTextContent(/there was an error, please try again/i);
    });

    // expected error
    it.todo('should show a message from the API response (e.g., a day after the current date.), when the user selects an invalid date value and clicks on the show button');
});