/**
 * @jest-environment jsdom
*/
import React from 'react'

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Header from "../../sections/Header"; 

describe("Header Component", () => {

    test("must display the main page title", () => {
        render(<Header />)
        expect(screen.getByText(/Picture of the Day/i)).toBeInTheDocument()
    })

});
