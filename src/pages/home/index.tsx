import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

import Layout from '@/components/layout/Layout';

const Home = () => {
  const router = useRouter();
  return (
    <Layout>
      <Slide duration={2000}>
        <div className='each-slide-effect '>
          <div className='flex justify-center '>
            <Link href='/thaipbs' className=' pr-8 text-9xl text-[#ffba00]'>
              Deschooling
            </Link>
            <Link href='/thaipbs' className=' text-8xl italic text-white'>
              คืออะไร ?
            </Link>
          </div>
        </div>

        <div className='each-slide-effect '>
          <div className='flex justify-center'>
            <Image
              onClick={() => router.push('/thaipbs')}
              className=' cursor-pointer'
              src='/images/bgslide2.png'
              alt='คุณคือใครในวงการ การศึกษา'
              width={1024}
              height={400}
            />
          </div>
        </div>
      </Slide>
    </Layout>
  );
};

export default Home;
