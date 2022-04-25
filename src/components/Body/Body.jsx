import { useEffect, useState } from 'react';

const Body = () => {
  const [isApiFetched, setIsApiFetched] = useState(false);
  const [apiData, setApiData] = useState({});
  const handleApi = async () => {
    // set to the isApiFetched state false
    try {
      //  make ajax call
      // set to the apiData state
    } catch (error) {
      //  handleError
    }

    // set to the isApiFetched state true
  };

  useEffect(() => {});

  return (
    <div>
      <div>
        <label htmlFor='apoDate'>Choose the date</label>
        <input type='date' id='apoDate' name='apoDate'></input>
      </div>
      <section>
        {isApiFetched &
        (
          <>
            <h1>Image title</h1>
            <span>apo date</span>
            <img src='' alt='apo img' />

            <aside>api content</aside>
          </>
        )}
      </section>
    </div>
  );
};
export default Body;
