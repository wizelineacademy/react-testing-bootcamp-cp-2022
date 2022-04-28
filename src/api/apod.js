const apodPI = process.env.REACT_APP_NASA_API;
const apodKey = process.env.REACT_APP_NASA_KEY;

export const fetchPictureOfTheDay = async (date) => {
  let formatedDate = date || new Date();
  formatedDate = formatedDate.toLocaleDateString('en-CA');
  try {
    const response = await fetch(
      `${apodPI}/planetary/apod?api_key=${apodKey}&date=${formatedDate}`
    );
    const data = await response.json();

    return response.ok ? data : Promise.reject(data);
  } catch (error) {
    throw new Error(error);
  }
};
