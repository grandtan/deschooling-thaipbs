import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

const Home = () => {
  return (
    <div className=' h-full'>
      <Slide duration={1000}>
        <div className='each-slide-effect '>
          <div
            className=' my-10 '
            style={{
              backgroundImage: `url(/images/deschooling.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
        <div className='each-slide-effect'>
          <div
            className=' my-10 '
            style={{
              backgroundImage: `url(/images/whologo.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </Slide>
    </div>
  );
};

export default Home;
