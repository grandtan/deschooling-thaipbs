// components/Layout.tsx
import { Kanit } from 'next/font/google';
import Link from 'next/link';
import * as React from 'react';

const fontWeb = Kanit({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

interface LayoutProps {
  children?: React.ReactNode;
  backgroundImage?: string;
  container?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  backgroundImage,
  container = true,
}) => {
  // const logo = () => (
  //   <div className=' flex w-1/4 justify-center'>
  //     <LogoWeb />
  //   </div>
  // );

  const home = () => (
    <div className=' w-1/6 '>
      <Link className=' py-8 text-4xl  ' href='/home'>
        {/* <div className='mb-2 flex justify-center '>
          {/* <GrHomeRounded size={40} /> */}
        {/* </div> */}
        หน้าแรก
      </Link>
    </div>
  );

  const learningSpace = () => (
    <div className='z-40 w-1/6 '>
      <button className=' peer py-8 text-4xl '>
        {/* <div className='flex justify-center'>
          {/* <BsBookHalf size={40} /> */}
        {/* </div> */}
        พื้นที่เรียนรู้
      </button>
      <div className=' fixed hidden w-[210px]  flex-col divide-y divide-yellow-400 rounded  bg-white  text-start  text-xl  drop-shadow-lg hover:flex peer-hover:flex'>
        <Link
          className=' px-5  py-4   hover:rounded-t hover:text-[#ffba00]'
          href='/teacher'
        >
          ครูและผู้อำนวยการ
        </Link>
        <Link
          className='px-5  py-4  hover:rounded-b  hover:text-[#ffba00]'
          href='/parent'
        >
          พ่อแม่และผู้ปกครอง
        </Link>
      </div>
    </div>
  );

  const vdo = () => (
    <div className='z-40 w-1/6'>
      <button className=' peer  py-8  text-4xl  '>
        {/* <div className='mb-2 flex justify-center'>
          {/* <BiMoviePlay size={40} /> */}
        {/* </div> */}
        วิดีโอ
      </button>

      <div className='fixed hidden w-[210px] flex-col  divide-y rounded bg-white  text-start  text-xl   drop-shadow-lg  hover:flex peer-hover:flex'>
        <Link className=' px-5 py-4  hover:text-[#ffba00]' href='/vdo'>
          VDO How to
        </Link>
      </div>
    </div>
  );

  const podCast = () => (
    <div className='z-40 w-1/6'>
      <button className=' peer py-8  text-4xl '>
        {/* <div className='mb-2 flex justify-center'>
          <BiPodcast size={40} />
        </div> */}
        Podcast
      </button>
      <div className='fixed hidden w-[210px] flex-col  divide-y rounded bg-white   text-start  text-xl   drop-shadow-lg  hover:flex peer-hover:flex'>
        <Link className=' px-5 py-4 hover:text-[#ffba00]' href='/podcast'>
          ฟัง พูด อ่าน กิน
        </Link>
      </div>
    </div>
  );

  const activity = () => (
    <div className='z-40 w-1/6 '>
      <button className=' peer  py-8 text-4xl  '>
        {/* <div className='mb-2 flex justify-center'>
          <SlCalender size={40} />
        </div> */}
        กิจกรรม
      </button>

      <div className='fixed hidden w-[210px] flex-col divide-y  divide-yellow-400 rounded bg-white  text-start  text-xl   drop-shadow-lg hover:flex peer-hover:flex'>
        <Link className='px-5 py-4 hover:text-[#ffba00]' href='/calendar'>
          ปฏิทินกิจกรรม
        </Link>

        <Link
          className='px-5 py-4 hover:text-[#ffba00]'
          href='/activity-register'
        >
          สนใจเข้าร่วม
        </Link>
        <Link
          className='px-5 py-4 hover:text-[#ffba00]'
          href='/activity-picture'
        >
          ภาพกิจกรรม
        </Link>
      </div>
    </div>
  );

  const tv = () => (
    <div className='z-40 w-1/6'>
      <button className=' peer  py-8 text-4xl  '>
        {/* <div className='mb-2 flex justify-center'>
          <BsFilm size={40} />
        </div> */}
        รายการทีวี
      </button>

      <div className='fixed hidden w-[210px] flex-col  divide-y divide-yellow-400 rounded bg-white  text-start   text-xl drop-shadow-lg  hover:flex peer-hover:flex'>
        <Link className=' px-5 py-4 hover:text-[#ffba00]' href='/deschooling'>
          Deschooling
        </Link>

        <Link className=' px-5 py-4 hover:text-[#ffba00]' href='/teacher-hero'>
          Teacher Hero
        </Link>
      </div>
    </div>
  );

  const aboutUs = () => (
    <div className='z-40 w-1/6'>
      <button className=' peer py-8 text-4xl  '>
        {/* <div className='mb-2 flex justify-center'>
          <HiOutlineMail size={40} />
        </div> */}
        ติดต่อเรา
      </button>

      <div className='fixed hidden w-[210px] flex-col divide-y rounded bg-white  text-start  text-xl  drop-shadow-lg hover:flex  peer-hover:flex '>
        <Link className=' px-5 py-4 hover:text-[#ffba00]' href='/about-us'>
          AboutUs
        </Link>
      </div>
    </div>
  );

  const checkImage = backgroundImage ? backgroundImage : '/images/bgn.png';
  return (
    <div className={fontWeb.className}>
      <div
        className='relative h-screen  min-h-full w-full min-w-[1024px] overflow-auto bg-cover bg-center '
        style={{
          backgroundImage: `url(${checkImage})`,
        }}
      >
        <div className='absolute inset-x-0 top-0 flex h-24 flex-row items-center justify-between bg-[#ffcc00] px-8 text-center'>
          {home()}
          {learningSpace()}
          {vdo()}
          {podCast()}
          {activity()}
          {tv()}
          {aboutUs()}
        </div>

        <div className={container ? ' 2xl:container ' : ''}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
