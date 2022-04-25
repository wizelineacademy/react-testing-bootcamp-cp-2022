const apodPI = process.env.REACT_APP_NASA_API;
const apodKey = process.env.REACT_APP_NASA_KEY;

export const fetchPictureOfTheDay = async (date) => {
  let formatedDate = date ? date : new Date();
  formatedDate = formatedDate.toLocaleDateString('en-CA');
  try {
    const response = await fetch(
      `${apodPI}?api_key=${apodKey}&date=${formatedDate}`
    );
    if (response.ok) {
      return response.json();
    } else {
      const res = await response.json();
      return Promise.reject(res);
    }
  } catch (error) {
    throw new Error(error);
  }
};
