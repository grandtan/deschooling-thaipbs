import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { TbZoomQuestion } from 'react-icons/tb';
import { Slide } from 'react-slideshow-image';
import { Grid } from 'antd';
import 'react-slideshow-image/dist/styles.css';

import Layout from '@/components/layout/Layout';

import BabyHome2 from '@/icon/BabyHome2';
import GirlHome from '@/icon/GirlHome';
import LocalGovermentHome from '@/icon/LocalGovermentHome';
import ParentHome from '@/icon/ParentHome';

const { useBreakpoint } = Grid;
const Home = () => {
  const screens = useBreakpoint();
  const router = useRouter();

  console.log('screens :', screens);
  return (
    <Layout container={false}>
      <Head>
        <title>หน้าแรก : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className=' w-full '>
        <Slide duration={30000} arrows={!screens.xs}>
          <div className='each-slide-effect flex  flex-row justify-center '>
            <div className=' flex w-full  space-x-2 text-3xl sm:text-5xl md:space-x-8 md:text-6xl lg:text-7xl xl:text-8xl'>
              <div
                className='flex w-full cursor-pointer justify-center'
                onClick={() => router.push('/about-deschooling')}
              >
                <div className=' font-bold text-[#ffcc00]'>Deschooling</div>
                <div className=' text-white'>คืออะไร_</div>
                <div>
                  <TbZoomQuestion color='white' />
                </div>
              </div>
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
            <div className='relative '>
              <div className='grid  grid-cols-5 pt-[400px]  '>
                <div className='flex flex-col items-center'>
                  <div className='mb-2 text-xl text-white'>นักเรียน</div>
                  <BabyHome2
                    className='cursor-pointer duration-700 hover:-translate-y-2 hover:ease-in-out sm:hover:-translate-y-4'
                    onClick={() => router.push('/student')}
                  />
                </div>
                <div className=' flex flex-col items-center'>
                  <div className='mb-2  mr-8 text-center  text-xl text-white'>
                    รัฐบาล
                  </div>
                  <GirlHome
                    className='cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/government')}
                  />
                </div>

                <div className=' flex  flex-col items-center'>
                  <div className='mb-2 text-xl text-white'>
                    ครูและผู้อำนวยการ
                  </div>
                  <Image
                    src='/images/icon-teacher.png'
                    width={350}
                    height={350}
                    alt='local-government'
                    className=' cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/teachers')}
                  />
                </div>

                <div className=' flex flex-col items-center'>
                  <div className='mb-2 text-xl text-white'>
                    พ่อแม่และผู้ปกครอง
                  </div>
                  <ParentHome
                    className='cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/parents')}
                    width={230}
                    height={310}
                  />
                </div>

                <div className='  flex flex-col items-center'>
                  <div className='mb-2 text-xl text-white'>
                    หน่วยงานท้องถิ่น
                  </div>
                  <LocalGovermentHome
                    className='cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/local-government')}
                    width={230}
                    height={310}
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
