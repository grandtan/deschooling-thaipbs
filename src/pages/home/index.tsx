import { Grid } from 'antd';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { TbZoomQuestion } from 'react-icons/tb';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

import { chartData, chartOptions } from '@/components/layout/components/chart';
import Layout from '@/components/layout/Layout';

import BabyHome2 from '@/icon/BabyHome2';
import GirlHome from '@/icon/GirlHome';
import LocalGovermentHome from '@/icon/LocalGovermentHome';
import ParentHome from '@/icon/ParentHome';

const CustomReactPlayer = dynamic(
  () => import('@/components/layout/components/reactPlayer'),
  {
    ssr: false,
  }
);

const { useBreakpoint } = Grid;

const Home = () => {
  const screens = useBreakpoint();
  const router = useRouter();

  const [autoplay, setAutoplay] = useState(true);
  const [playing, setPlaying] = useState(false);

  const handleVideoPlay = () => {
    setAutoplay(false);
    setPlaying(true);
  };

  const handleVideoPause = () => {
    setAutoplay(true);
    setPlaying(false);
  };

  return (
    <Layout container={false}>
      <Head>
        <title>หน้าแรก : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className='w-full'>
        <Slide duration={4000} arrows={!screens.xs} autoplay={autoplay}>
          {!screens.xs && (
            <div className='each-slide-effect flex flex-row justify-center'>
              <div className=' flex w-full flex-col justify-center'>
                <div className='mb-6 flex w-full cursor-pointer justify-center text-3xl md:text-4xl'>
                  <div className='mr-4 font-bold text-[#ffcc00]'>VDO แนะนำ</div>
                  <div className=' bg-white font-bold text-black'>
                    Deschooling
                  </div>
                </div>

                <CustomReactPlayer
                  className='rounded-3xl border-2 border-dotted bg-black p-2'
                  playing={playing}
                  url='https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/EP36_VDO%20Presentation%20Deschooling%20Project%20-%20REExport.mp4'
                  onCustomPlay={handleVideoPlay}
                  onCustomPause={handleVideoPause}
                />
              </div>
            </div>
          )}

          <div className='each-slide-effect flex  flex-row justify-center'>
            <div className=' flex w-full  space-x-2 text-3xl sm:text-5xl md:space-x-8 md:text-5xl lg:text-7xl xl:text-8xl'>
              <div
                className='flex w-full cursor-pointer justify-center'
                onClick={() => router.push('/about-deschooling')}
              >
                <div className=' mr-4 font-bold text-[#ffcc00]'>
                  Deschooling
                </div>
                <div className=' text-white'>คืออะไร_</div>
                <div>
                  <TbZoomQuestion color='white' />
                </div>
              </div>
            </div>
          </div>

          <div className='each-slide-effect flex  flex-row justify-center '>
            <div className=' flex w-full  space-x-2 text-3xl sm:text-5xl md:space-x-8 md:text-5xl lg:text-6xl xl:text-7xl'>
              <div
                className='flex w-full cursor-pointer justify-center'
                onClick={() => router.push('/teacher-classroom')}
              >
                <div className=' font-bold text-[#ffcc00]'>โครงการ</div>
                <div className=' text-white'> "เติมพลังครู สู่ห้องเรียน"</div>
              </div>
            </div>
          </div>

          <div className='each-slide-effect flex  flex-row justify-center '>
            <div className='mx-4 flex h-screen w-full  flex-col items-center justify-center md:mx-0'>
              <div
                className='mb-10 flex cursor-pointer flex-row text-3xl sm:text-5xl md:text-3xl lg:text-3xl xl:text-4xl'
                onClick={() => router.push('/learning-chart')}
              >
                <div className='font-bold text-[#ffcc00]'>
                  ความต้องการของบุคลากรทาง
                </div>
                <div className=' text-white'>การศึกษา</div>
              </div>

              <div
                className='flex h-3/4 w-full cursor-pointer justify-center md:w-5/6'
                onClick={() => router.push('/learning-chart')}
              >
                <Bar data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>

          <div
            className='each-slide-effect'
            style={{
              background: `url('https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/bg-home-slide2.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              width: '100%',
              height: '100%',
            }}
          >
            <div className=' relative w-full '>
              <div className=' h-[25%]  w-full  md:h-[45%] '>
                <div className='absolute inset-x-0 bottom-2 flex w-full flex-row '>
                  <div className=' h-[60%] w-1/5 lg:h-full'>
                    <div className='text-center text-[8px] text-white md:text-xl'>
                      นักเรียน
                    </div>

                    <BabyHome2
                      className='h-full w-full cursor-pointer duration-700  hover:-translate-y-2 hover:ease-in-out sm:hover:-translate-y-4'
                      onClick={() => router.push('/student')}
                    />
                  </div>

                  <div className=' h-[60%] w-1/5  lg:h-full'>
                    <div className='text-center text-[8px] text-white md:text-xl'>
                      รัฐบาล
                    </div>

                    <GirlHome
                      className='h-full w-full cursor-pointer duration-700  hover:-translate-y-2 hover:ease-in-out sm:hover:-translate-y-4'
                      onClick={() => router.push('/government')}
                    />
                  </div>

                  <div className=' h-[60%] w-1/5  lg:h-full'>
                    <div className='text-center text-[8px] text-white md:text-xl'>
                      ครูและผู้อำนวยการ
                    </div>

                    <Image
                      src='/images/icon-teacher.png'
                      width={550}
                      height={450}
                      alt='local-government'
                      className='h-full w-full cursor-pointer duration-700  hover:-translate-y-2 hover:ease-in-out sm:hover:-translate-y-4'
                      onClick={() => router.push('/teachers')}
                    />
                  </div>

                  <div className=' h-[60%] w-1/5  lg:h-full'>
                    <div className='text-center text-[8px] text-white md:text-xl'>
                      พ่อแม่และผู้ปกครอง
                    </div>

                    <ParentHome
                      className='h-full w-full cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out '
                      onClick={() => router.push('/parents')}
                    />
                  </div>

                  <div className=' h-[60%] w-1/5  lg:h-full'>
                    <div className='text-center text-[8px] text-white md:text-xl'>
                      หน่วยงานท้องถิ่น
                    </div>

                    <LocalGovermentHome
                      className='h-full w-full cursor-pointer duration-700 hover:-translate-y-4 hover:ease-in-out '
                      onClick={() => router.push('/local-government')}
                    />
                  </div>
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
