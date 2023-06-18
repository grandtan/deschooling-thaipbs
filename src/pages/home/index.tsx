import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

import Layout from '@/components/layout/Layout';

const Home = () => {
  const router = useRouter();
  return (
    <Layout container={false}>
      <Slide duration={2000}>
        <div className='each-slide-effect '>
          <div className='flex justify-center '>
            <Link href='/thaipbs' className=' flex items-center '>
              <div className='text-9xl  text-[#ffcc00]'>Deschooling</div>
              <div className=' pl-10 pt-4 text-8xl italic text-white'>
                คืออะไร ?
              </div>
            </Link>
          </div>
        </div>

        <div className='each-slide-effect '>
          <div className='flex justify-center'>
            <img
              onClick={() => router.push('/')}
              className=' cursor-pointer'
              src='/images/bgslide2.png'
              alt='คุณคือใครในวงการ การศึกษา'
            />
          </div>
        </div>
      </Slide>
    </Layout>
  );
};

export default Home;
