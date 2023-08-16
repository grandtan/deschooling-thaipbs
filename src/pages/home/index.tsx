import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { TbZoomQuestion } from 'react-icons/tb';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

import Layout from '@/components/layout/Layout';

import BabyHome2 from '@/icon/BabyHome2';
import GirlHome from '@/icon/GirlHome';
import LocalGovermentHome from '@/icon/LocalGovermentHome';
import ParentHome from '@/icon/ParentHome';

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

      <div className='w-full'>
        <Slide duration={3000}>
          <div
            className='each-slide-effect flex cursor-pointer flex-row justify-center'
            onClick={() => router.push('/about-deschooling')}
          >
            <div className=' flex flex-row space-x-8 text-8xl'>
              <div className=' font-bold text-[#ffcc00]'>Deschooling</div>
              <div className=' text-white'>คืออะไร_</div>
              <div>
                <TbZoomQuestion color='white' size={70} />
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
            <div className=' relative h-full w-full '>
              <div className=' absolute inset-x-0 bottom-0 grid grid-cols-5  '>
                <div className='absolute bottom-0 col-start-1'>
                  <div className='absolute left-[110px] top-[-10px] text-xl text-white '>
                    นักเรียน
                  </div>
                  <BabyHome2
                    className='cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/student')}
                  />
                </div>
                <div className='absolute  bottom-4 col-start-2 '>
                  <div className='absolute left-[110px] top-[-30px] text-xl text-white'>
                    รัฐบาล
                  </div>
                  <GirlHome
                    className='cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/government')}
                  />
                </div>

                <div className='absolute bottom-2 left-[-70px] col-start-3 '>
                  <div className='absolute left-[120px] top-[-30px] text-xl text-white '>
                    ครูและผู้อำนวยการ
                  </div>
                  <Image
                    src='/images/icon-teacher.png'
                    width={350}
                    height={350}
                    alt='local-government'
                    className=' cursor-pointer  duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/teachers')}
                  />
                </div>

                <div className='absolute bottom-0 left-[-30px]  col-start-4'>
                  <div className='absolute left-[70px] top-[-30px]  text-xl text-white'>
                    พ่อแม่และผู้ปกครอง
                  </div>
                  <ParentHome
                    className='cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out'
                    onClick={() => router.push('/parents')}
                  />
                </div>

                <div className='absolute bottom-2 left-[-80px] col-start-5'>
                  <div className='absolute left-[100px] top-[220px] text-xl text-white'>
                    หน่วยงานท้องถิ่น
                  </div>
                  <LocalGovermentHome
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
