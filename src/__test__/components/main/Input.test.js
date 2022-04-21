/**
 * @jest-environment jsdom
*/
import React from 'react'

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Input from "../../../components/main/Input"; 

const setup = () => {
    const utils = render(<Input />)
    const input = utils.getByLabelText('input-date')
    return {
        input,
        ...utils,
    }
}

describe("Header Component", () => {

    test("must display date on format YYYY/MM/DD", () => {

        const { input } = setup()
        fireEvent.change(input, {target: {value: '1993/03/14'}})

        expect(input.value).toMatch(/^\d{4}\/(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])$/)
    })

    

});
