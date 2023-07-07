// components/Layout.tsx
import { Content, Kanit } from 'next/font/google';
import Link from 'next/link';
import * as React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Unstable_Grid2';

const fontWeb = Kanit({
  weight: '500',
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
  const home = () => (
    <div className='hidden w-full md:w-auto xl:block'>
      <Link className=' text-base text-black lg:text-2xl  ' href='/home'>
        หน้าแรก
      </Link>
    </div>
  );

  const learningSpace = () => (
    <div className='hidden w-full md:w-auto xl:block'>
      <button className='peer py-8  text-base text-black lg:text-2xl'>
        พื้นที่เรียนรู้
      </button>

      <div className='fixed hidden w-[210px] flex-col divide-y rounded bg-white  text-start  text-xl  drop-shadow-lg hover:flex  peer-hover:flex '>
        <Link
          className=' px-5 py-3 text-black hover:text-[#ffba00]'
          href='/teacher'
        >
          ครูและผู้อำนวยการ
        </Link>
        <Link
          className=' px-5 py-3 text-black hover:text-[#ffba00]'
          href='/parent'
        >
          พ่อแม่และผู้ปกครอง
        </Link>
      </div>
    </div>
  );

  const vdo = () => (
    <div className='hidden w-full md:w-auto xl:block'>
      <button className='peer py-8  text-base text-black lg:text-2xl'>
        วิดีโอ
      </button>

      <div className='fixed hidden w-[210px] flex-col divide-y rounded bg-white  text-start  text-xl  drop-shadow-lg hover:flex  peer-hover:flex '>
        <Link
          className=' px-5 py-3 text-black hover:text-[#ffba00]'
          href='/vdo'
        >
          VDO How to
        </Link>
      </div>
    </div>
  );

  const podCast = () => (
    <div className='hidden w-full md:w-auto xl:block'>
      <button className='peer py-8  text-base text-black lg:text-2xl'>
        Podcast
      </button>

      <div className='fixed hidden w-[210px] flex-col divide-y rounded bg-white  text-start  text-xl  drop-shadow-lg hover:flex  peer-hover:flex '>
        <Link
          className=' px-5 py-3 text-black hover:text-[#ffba00]'
          href='/podcast'
        >
          ฟัง พูด อ่าน กิน
        </Link>
      </div>
    </div>
  );

  const activity = () => (
    <div className='hidden w-full md:w-auto xl:block'>
      <button className='peer py-8  text-base text-black lg:text-2xl'>
        กิจกรรม
      </button>

      <div className='fixed hidden w-[210px] flex-col divide-y rounded bg-white  text-start  text-xl  drop-shadow-lg hover:flex  peer-hover:flex '>
        <Link
          className=' px-5 py-3 text-black hover:text-[#ffba00]'
          href='/calendar'
        >
          ปฏิทินกิจกรรม
        </Link>
        <Link
          className=' px-5 py-3 text-black hover:text-[#ffba00]'
          href='/activity-register'
        >
          สนใจเข้าร่วม
        </Link>
        <Link
          className=' px-5 py-3 text-black hover:text-[#ffba00]'
          href='/activity-picture'
        >
          ภาพกิจกรรม
        </Link>
      </div>
    </div>
  );

  const tv = () => (
    <div className='hidden w-full md:w-auto xl:block'>
      <button className='peer py-8  text-base text-black lg:text-2xl'>
        รายการทีวี
      </button>

      <div className='fixed hidden w-[210px] flex-col divide-y rounded bg-white  text-start  text-xl  drop-shadow-lg hover:flex  peer-hover:flex '>
        <Link
          className=' px-5 py-3 text-black hover:text-[#ffba00]'
          href='/deschooling'
        >
          Deschooling
        </Link>

        <Link
          className=' px-5 py-3 text-black hover:text-[#ffba00]'
          href='/teacher-hero'
        >
          Teacher Hero
        </Link>
      </div>
    </div>
  );

  const aboutUs = () => (
    <div className='hidden w-full md:w-auto xl:block'>
      <button className='peer py-8  text-base text-black lg:text-2xl'>
        ติดต่อเรา
      </button>

      <div className='fixed hidden w-[210px] flex-col divide-y rounded bg-white  text-start  text-xl  drop-shadow-lg hover:flex  peer-hover:flex '>
        <Link
          className=' px-5 py-3 text-black hover:text-[#ffba00]'
          href='/about-us'
        >
          AboutUs
        </Link>
      </div>
    </div>
  );

  const checkImage = backgroundImage ? backgroundImage : '/images/bgn.png';
  return (
    <div className='h-screen w-full'>
      <div className='h-24 bg-amber-100'>
        <Toolbar>
          <div className='w-1/6'>
            <Image
              src='/images/logoweb.png'
              alt='Picture of the author'
              width={500}
              height={500}
            />
          </div>

          <div className='flex w-full flex-row items-center space-x-8 md:justify-center xl:space-x-16'>
            {home()}
            {learningSpace()}
            {vdo()}
            {podCast()}
            {activity()}
            {tv()}
            {aboutUs()}
          </div>

          <IconButton
            className='xl:hidden '
            size='large'
            edge='start'
            color='default'
            aria-label='menu'
            sx={{ mx: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </div>
      <div className='h-full bg-white'>{children}</div>
    </div>
  );
};

export default Layout;
