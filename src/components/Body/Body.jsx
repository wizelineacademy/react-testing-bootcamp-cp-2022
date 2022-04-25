import { useState } from 'react';

const Body = () => {
  const [isApiFetched, setIsApiFetched] = useState(false);

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

            <aside></aside>
          </>
        )}
      </section>
    </div>
  );
};
export default Body;
