export const getApodBy = async ({ date }) => {
  try {
    const url = new URL(process.env.REACT_APP_NASA_APOD_URL)

    url.searchParams.set('date', date)

    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()

      return [data, null]
    } else {
      const error = await response.json()

      return [null, error]
    }
  } catch (error) {
    console.log(error)
  }
}
