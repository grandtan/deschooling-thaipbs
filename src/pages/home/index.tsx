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

const Home = () => {
  const router = useRouter();
  return (
    <Layout container={false}>
      <div className=' '>
        <Slide duration={200000}>
          <div
            className='each-slide-effect cursor-pointer'
            onClick={() => router.push('/thaipbs')}
            style={{
              background: `url('/images/bg-home1.png')`,
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
              background: `url('/images/bg-homewho.png')`,
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
                    className='cursor-pointer'
                    onClick={() => router.push('/baby')}
                  />
                </div>
                <div className='absolute  bottom-0 col-start-2 cursor-pointer'>
                  <BabyHome2
                    className=''
                    onClick={() => router.push('/student')}
                  />
                </div>
                <div className='absolute  bottom-4 col-start-3 cursor-pointer '>
                  <GirlHome
                    className=''
                    onClick={() => router.push('/government')}
                  />
                </div>
                <div className='absolute  bottom-4 col-start-4 cursor-pointer'>
                  <TeacherHome
                    className=''
                    onClick={() => router.push('/teacher-all')}
                  />
                </div>
                <div className='absolute bottom-0  col-start-5 cursor-pointer '>
                  <ParentHome
                    className=''
                    onClick={() => router.push('/parent-all')}
                  />
                </div>
                <div className='absolute bottom-0 left-2 col-start-6  cursor-pointer  '>
                  <OrganizeHome
                    className=''
                    onClick={() => router.push('/teacher-all')}
                  />
                </div>
              </div>
            </div>
            {/* <div className=' flex  items-end justify-between space-x-2'>
              <BabyHome
                className=' h-60 bg-slate-300'
                onClick={() => router.push('/parent')}
              />
              <BabyHome2
                className='  bg-slate-300'
                onClick={() => router.push('/parent')}
              />
              <div className=' h-16 w-[40px] bg-red-800'>aaaa</div>
              <div className=' h-16 w-[40px] bg-red-800'>aaaa</div>
              <div className=' h-16 w-[40px] bg-red-800'>aaaa</div>
              <div className=' h-16 w-[40px] bg-red-800'>aaaa</div>
              <div className=' h-16 w-[40px] bg-red-800'>aaaa</div>
              <div className=' h-16 w-[40px] bg-red-800'>aaaa</div>
              <div className=' h-16 w-[40px] bg-red-800'>aaaa</div>d
            </div> */}
          </div>
        </Slide>
      </div>
    </Layout>
  );
};

export default Home;
