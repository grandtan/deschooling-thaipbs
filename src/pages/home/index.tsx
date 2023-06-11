import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

const Home = () => {
  const router = useRouter();
  return (
    <div className=' h-full'>
      <Slide duration={2000}>
        <div className='each-slide-effect flex justify-center'>
          <Image
            onClick={() => router.push('/thaipbs')}
            className=' cursor-pointer'
            src='/images/deschooling.png'
            alt='what is a deschooling '
            width={1000}
            height={200}
          />
        </div>
        <div className='each-slide-effect   flex  justify-center '>
          <Image
            onClick={() => router.push('/thaipbs')}
            className='cursor-pointer'
            src='/images/whologo.png'
            alt='คุณคือใครในวงการศึกษา'
            width={1000}
            height={200}
          />
        </div>
      </Slide>
    </div>
  );
};

export default Home;
