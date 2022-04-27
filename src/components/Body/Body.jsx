import { useEffect, useState } from 'react';
import axios from 'axios';

const fetchData = async ({ setApiData, date }) => {
  // set to the isApiFetched state false
  try {
    //  make ajax call
    const info = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
    );

    if (info.status === 200) {
      setApiData(info.data);
    }
    // set to the apiData state
  } catch (error) {
    //  handleError
  }
};

const todayDate = new Date().toISOString().split('T')[0];

const Body = () => {
  const [apiData, setApiData] = useState({});
  const [date, setDate] = useState(todayDate);

  useEffect(() => {
    fetchData({ setApiData, date });
  }, [date]);

  const changeDate = e => {
    setDate(e.target.value);
  };

  let ApodView;
  if (Object.keys(apiData).length !== 0) {
    ApodView = (
      <section data-testid='section'>
        {apiData.title && <h1>{apiData.title}</h1>}
        {apiData.date && <div>{apiData.date}</div>}
        {apiData.url && <img src={apiData.url} alt='apo img' />}
        {apiData.explanation && <aside>{apiData.explanation}</aside>}
      </section>
    );
  }
  return (
    <div>
      <div>
        <label htmlFor='apoDate'>Choose the date</label>
        <input
          type='date'
          id='apoDate'
          name='apoDate'
          defaultValue={date}
          onChange={changeDate}
        ></input>
      </div>
      {ApodView}
    </div>
  );
};
export default Body;
