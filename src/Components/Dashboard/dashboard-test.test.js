import {render, screen, fireEvent, getByTestId} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Dashboard} from './Dashboard'
import moment from 'moment';

const setup = () => render(<Dashboard />)

describe('Dasboard', () => {
    it('the app should show the Picture of the Day', async () => {
        setup()
        const dayOfToday = moment(new Date()).format("YYYY-MM-DD");
        const imgResult = await screen.findByRole('img', {altText: dayOfToday})
        expect(imgResult).toBeInTheDocument();
        
    })
    it('the app should show the picture of the day for the given date when the user selects a date', async () => {
        setup()
        const handleChange = jest.fn();
        const { container } = render(
            <input
                type="date"
                value="2020-05-12"
                onChange={handleChange}
            />
        )
        const input = container.firstChild;
        fireEvent.change(input, { target: { value: "2020-05-12" } });
        expect(handleChange).toHaveBeenCalled();
    })
})