import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

import Layout from '@/components/layout/Layout';

const Home = () => {
  // const router = useRouter();
  return (
    <Layout container={false}>
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

        <div className='each-slide-effect '>
          <div className=' flex justify-center '>
            <Image
              src='/images/bg2.png'
              width={1920}
              height={1080}
              alt='Background home 2'
            />
          </div>
        </div>
      </Slide>
    </Layout>
  );
};

export default Home;
