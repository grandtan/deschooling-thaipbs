// components/Layout.tsx
import Link from 'next/link';
import * as React from 'react';
import { BiMoviePlay, BiPodcast } from 'react-icons/bi';
import { BsBookHalf, BsFilm } from 'react-icons/bs';
import { GrHomeRounded } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { SlCalender } from 'react-icons/sl';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const logo = () => (
    <div className='w-1/4'>
      <Link className='py-4 text-xl' href='/home'>
        LOGO
      </Link>
    </div>
  );

  const home = () => (
    <div className='w-1/12'>
      <Link className=' py-4 text-xl  ' href='/home'>
        <div className='mb-2 flex justify-center '>
          <GrHomeRounded size={40} />
        </div>
        หน้าแรก
      </Link>
    </div>
  );

  const learningSpace = () => (
    <div className='w-1/12 '>
      <button className=' peer py-3 text-xl '>
        <div className='mb-2 flex justify-center'>
          <BsBookHalf size={40} />
        </div>
        พื้นที่เรียนรู้
      </button>
      <div className='fixed hidden  w-[200px] flex-col divide-y divide-yellow-400  rounded  bg-white  text-start drop-shadow-lg  hover:flex peer-hover:flex'>
        <Link
          className=' px-5  py-3  hover:rounded-t hover:text-[#ffba00]'
          href='/teacher'
        >
          ครูและผู้อำนวยการ
        </Link>
        <Link
          className='px-5  py-3  hover:rounded-b  hover:text-[#ffba00]'
          href='/parent'
        >
          พ่อแม่และผู้ปกครอง
        </Link>
      </div>
    </div>
  );

  const vdo = () => (
    <div className='w-1/12 '>
      <button className=' peer  py-3  text-xl  '>
        <div className='mb-2 flex justify-center'>
          <BiMoviePlay size={40} />
        </div>
        วีดีโอ
      </button>

      <div className=' fixed hidden  w-[200px] flex-col divide-y  rounded  bg-white  text-start drop-shadow-lg  hover:flex peer-hover:flex'>
        <Link className=' px-5 py-3  hover:text-[#ffba00]' href='/vdo'>
          VDO How to
        </Link>
      </div>
    </div>
  );

  const podCast = () => (
    <div className='w-1/12'>
      <button className=' peer py-3  text-xl '>
        <div className='mb-2 flex justify-center'>
          <BiPodcast size={40} />
        </div>
        Podcast
      </button>
      <div className='fixed hidden  w-[200px] flex-col divide-y   rounded  bg-white  text-start drop-shadow-lg  hover:flex peer-hover:flex'>
        <Link className=' px-5 py-3 hover:text-[#ffba00]' href='/podcast'>
          ฟัง พูด อ่าน กิน
        </Link>
      </div>
    </div>
  );

  const activity = () => (
    <div className='w-1/12'>
      <button className=' peer  py-3 text-xl  '>
        <div className='mb-2 flex justify-center'>
          <SlCalender size={40} />
        </div>
        กิจกรรม
      </button>

      <div className='fixed hidden w-[200px]  flex-col divide-y divide-yellow-400  rounded  bg-white  text-start  drop-shadow-lg hover:flex peer-hover:flex'>
        <Link className='px-5 py-3 hover:text-[#ffba00]' href='/calendar'>
          ปฏิทินกิจกรรม
        </Link>

        <Link
          className='px-5 py-3 hover:text-[#ffba00]'
          href='/activity-register'
        >
          สนใจเข้าร่วม
        </Link>
        <Link
          className='px-5 py-3 hover:text-[#ffba00]'
          href='/activity-picture'
        >
          ภาพกิจกรรม
        </Link>
      </div>
    </div>
  );

  const tv = () => (
    <div className='w-1/12'>
      <button className=' peer  py-3 text-xl  '>
        <div className='mb-2 flex justify-center'>
          <BsFilm size={40} />
        </div>
        รายการทีวี
      </button>

      <div className='fixed hidden  w-[200px] flex-col divide-y divide-yellow-400  rounded  bg-white  text-start drop-shadow-lg  hover:flex peer-hover:flex'>
        <Link className=' px-5 py-3 hover:text-[#ffba00]' href='/deschooling'>
          Deschooling
        </Link>

        <Link className=' px-5 py-3 hover:text-[#ffba00]' href='/teacher-hero'>
          Teacher Hero
        </Link>
      </div>
    </div>
  );

  const aboutUs = () => (
    <div className='w-1/12 '>
      <button className=' peer py-3 text-xl  '>
        <div className='mb-2 flex justify-center'>
          <HiOutlineMail size={40} />
        </div>
        ติดต่อเรา
      </button>

      <div className='fixed hidden w-[200px] flex-col divide-y  rounded  bg-white text-start  drop-shadow-lg hover:flex  peer-hover:flex '>
        <Link className=' px-5 py-3 hover:text-[#ffba00]' href='/about-us'>
          AboutUs
        </Link>
      </div>
    </div>
  );
  return (
    <div
      className='relative h-screen w-full pt-10 '
      style={{
        backgroundImage: `url(/images/bg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className=' flex h-24 flex-initial flex-row items-center space-x-2 bg-[#ffba00] text-center font-medium'>
        {logo()}
        {home()}
        {learningSpace()}
        {vdo()}
        {podCast()}
        {activity()}
        {tv()}
        {aboutUs()}
      </div>

      {children}
    </div>
  );
};

export default Layout;
