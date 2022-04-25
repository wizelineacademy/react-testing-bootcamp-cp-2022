import { render, screen } from '@testing-library/react'
import { Apod } from '.'

const mock = {
  "date":"2022-04-21",
  "explanation":"Fifty years ago, April 20, 1972, Apollo 16's lunar module Orion touched down on the Moon's near side in the south-central Descartes Highlands. While astronaut Ken Mattingly orbited overhead in Casper the friendly command and service module the Orion brought John Young and Charles Duke to the lunar surface. The pair would spend nearly three days on the Moon. Constructed from images (AS16-117-18814 to AS16-117-18820) taken near the end of their third and final surface excursion this panoramic view puts the lunar module in the distance toward the left. Their electric lunar roving vehicle in the foreground, Duke is operating the camera while Young aims the high gain communications antenna skyward, toward planet Earth.   Celebrate: Earth Day",
  "hdurl":"https://apod.nasa.gov/apod/image/2204/Apollo-16-station-10.jpg",
  "media_type":"image",
  "service_version":"v1",
  "title":"Apollo 16 Moon Panorama",
  "url":"https://apod.nasa.gov/apod/image/2204/Apollo-16-station-10crop1110.jpg",
}

const setup = () => render(<Apod {...mock} />)

describe('Apod', () => {
  it('should display apod title as "Apollo 16 Moon Panorama"', () => {
    setup()

    const apodTitle = screen.getByRole('heading')

    expect(apodTitle).toBeInTheDocument()
    expect(apodTitle).toHaveTextContent(/apollo 16 moon panorama/i)
  })

  it('should display apod date as "2022-04-21"', () => {
    setup()

    const apodDate = screen.getByText('2022-04-21')

    expect(apodDate).toBeInTheDocument()
    expect(apodDate).toHaveAttribute('datetime')
  })

  it('should display apod image', () => {
    setup()

    const apodImage = screen.getByRole('img')

    expect(apodImage).toBeInTheDocument()
    expect(apodImage).toHaveAttribute('alt')
  })

  it('should display apod explanation', () => {
    setup()

    const apodExplanation = screen.getByText(/fifty years ago, april 20, 1972/i)

    expect(apodExplanation).toBeInTheDocument()
  })
})
