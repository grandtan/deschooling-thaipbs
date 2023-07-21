import { useRouter } from 'next/router';
import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

import Layout from '@/components/layout/Layout';

import BabyHome from '@/icon/BabyHome';
import BabyHome2 from '@/icon/BabyHome2';
import GirlHome from '@/icon/GirlHome';
import OrganizeHome from '@/icon/OrganizeHome';
import ParentHome from '@/icon/ParentHome';
import TeacherHome from '@/icon/TeacherHome';
import BgHome1 from '@/icon/Bghome1';
import Bghome1 from '@/icon/Bghome1';
import { RiMailUnreadFill } from 'react-icons/ri';

const Home = () => {
  const router = useRouter();
  return (
    <Layout container={false}>
      <div className=' '>
        <Slide duration={2000}>
          <div
            className='each-slide-effect cursor-pointer'
            onClick={() => router.push('/thaipbs')}
            style={{
              background: `url('/images/bg-home-slide1.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
            }}
          ></div>
          <div
            className='each-slide-effect '
            style={{
              background: `url('/images/bg-home-slide2.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
            }}
          >
            <div className=' relative h-full w-full'>
              <div className='absolute inset-x-0 bottom-0 grid grid-cols-7 gap-x-1 '>
                <div className='absolute bottom-0 left-0 col-start-1 '>
                  <BabyHome
                    className='cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/baby')}
                  />
                </div>
                <div className='absolute  bottom-0 col-start-2 '>
                  <BabyHome2
                    className='cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/student')}
                  />
                </div>
                <div className='absolute  bottom-4 col-start-3 '>
                  <GirlHome
                    className='cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/government')}
                  />
                </div>
                <div className='absolute bottom-2 col-start-4'>
                  <TeacherHome
                    className='cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/teacher-all')}
                  />
                </div>
                <div className='absolute bottom-0 col-start-5 pl-10'>
                  <ParentHome
                    className='cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/parent-all')}
                  />
                </div>
                <div className='absolute bottom-0 left-10  col-start-6 '>
                  <OrganizeHome
                    className='cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/teacher-all')}
                  />
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </Layout>
  );
};

export default Home;
