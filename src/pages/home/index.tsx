import { useRouter } from 'next/router';
import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

import Layout from '@/components/layout/Layout';

import BabyHome from '@/icon/BabyHome';
import BabyHome2 from '@/icon/BabyHome2';
import GirlHome from '@/icon/GirlHome';
import OrganizeHome from '@/icon/LocalGovermentHome';
import ParentHome from '@/icon/ParentHome';
import TeacherHome from '@/icon/TeacherHome';
import BgHome1 from '@/icon/Bghome1';
import Bghome1 from '@/icon/Bghome1';
import { ImSearch } from 'react-icons/im';
import LocalGovermentHome from '@/icon/LocalGovermentHome';
import LocalGovernmentHome from '@/icon/LocalGovermentHome';
import Head from 'next/head';

const Home = () => {
  const router = useRouter();
  return (
    <Layout container={false}>
      <Head>
        <title>หน้าแรก : DeschoolingDoc</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className=' '>
        <Slide duration={20000}>
          <div
            className='each-slide-effect flex cursor-pointer flex-row justify-center '
            onClick={() => router.push('/thaipbs')}
            // style={{
            //   background: `url('/images/bg-home-1.png')`,
            //   backgroundSize: 'cover',
            //   backgroundPosition: 'center',
            //   backgroundRepeat: 'no-repeat',
            //   width: '100%',
            //   height: '100%',
            // }}
          >
            <div className=' flex flex-row space-x-8 text-7xl'>
              <div className='text-[#ffcc00]'>Deschooling</div>
              <div className='text-white'>คืออะไร ?</div>
              <ImSearch color='white' size={50} />
            </div>
          </div>
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
              <div className=' absolute inset-x-0 bottom-0 grid grid-cols-7 '>
                <div className='absolute bottom-0 left-0 col-start-1 '>
                  <div className='absolute left-[110px] top-[110px] text-xl text-white '>
                    เด็กทารก
                  </div>
                  <BabyHome
                    className='cursor-pointer  duration-700 hover:-translate-y-4   hover:ease-in-out'
                    onClick={() => router.push('/baby')}
                  />
                </div>
                <div className='absolute  bottom-0 col-start-2 '>
                  <div className='absolute left-[110px] top-[-10px] text-xl text-white '>
                    นักเรียน
                  </div>
                  <BabyHome2
                    className='cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/student')}
                  />
                </div>
                <div className='absolute  bottom-4 col-start-3 '>
                  <div className='absolute left-[110px] top-[-30px] text-xl text-white '>
                    รัฐบาล
                  </div>
                  <GirlHome
                    className='cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/government')}
                  />
                </div>
                <div className='absolute bottom-2 col-start-4'>
                  <div className='absolute left-[110px] top-[240px] text-xl text-white '>
                    ครูและผู้อำนวยการ
                  </div>
                  <TeacherHome
                    className='cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/teacher-all')}
                  />
                </div>
                <div className='absolute bottom-0 col-start-5 pl-10'>
                  <div className='absolute left-[110px] top-[-20px] text-xl text-white '>
                    พ่อแม่และผู้ปกครอง
                  </div>
                  <ParentHome
                    className='cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/parent-all')}
                  />
                </div>
                <div className='absolute bottom-0 left-10  col-start-6 '>
                  <div className='absolute left-[100px] top-[350px] text-xl text-white '>
                    หน่วยงานท้องถิ่น
                  </div>
                  <LocalGovernmentHome
                    className='cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/local-government')}
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
