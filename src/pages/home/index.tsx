import Link from 'next/link';
import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

import Layout from '@/components/layout/Layout';

const Home = () => {
  // const router = useRouter();
  return (
    <Layout container={false}>
      <div className=' '>
        <Slide duration={20000}>
          <div className='each-slide-effect '>
            <div className='flex justify-center'>
              <Link href='/thaipbs' className=' flex items-center '>
                <div className='text-9xl  text-[#ffcc00]'>Deschooling</div>
                <div className=' pl-10 pt-4 text-8xl italic text-white'>
                  คืออะไร ?
                </div>
              </Link>
            </div>
          </div>

          <div
            className='each-slide-effect px-60 '
            style={{
              background: `url('/images/bg2.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
            }}
          >
            <div className=' flex  justify-between space-x-10  '>
              <div className=' h-16 w-[40px] bg-red-800'>aaaa</div>
              <div className=' h-16 w-[40px] bg-red-800'>aaaa</div>
              <div className=' h-16 w-[40px] bg-red-800'>aaaa</div>
              <div className=' h-16 w-[40px] bg-red-800'>aaaa</div>
              <div className=' h-16 w-[40px] bg-red-800'>aaaa</div>
              <div className=' h-16 w-[40px] bg-red-800'>aaaa</div>
              <div className=' h-16 w-[40px] bg-red-800'>aaaa</div>
              <div className=' h-16 w-[40px] bg-red-800'>aaaa</div>d
            </div>
          </div>
        </Slide>
      </div>
    </Layout>
  );
};

export default Home;
