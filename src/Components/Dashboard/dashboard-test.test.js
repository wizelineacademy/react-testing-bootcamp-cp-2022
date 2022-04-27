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
        const input = await screen.findByLabelText(/input-date/i)
        fireEvent.change(input, {target: {value: '2021-02-12'}})
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        const imgResult = await screen.findByRole('img', {altText: '2021-02-12'})
        expect(input.value).toMatch(regex)
        expect(imgResult).toBeInTheDocument();
    })
})