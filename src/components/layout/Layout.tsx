// components/Layout.tsx
import { Content, Kanit } from 'next/font/google';
import Link from 'next/link';
import * as React from 'react';
import Script from 'next/script';
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
    <div className='  h-screen w-screen bg-slate-200'>
      <AppBar position='static' className='bg-[#ffcc00]'>
        <Toolbar>
          <div className=' w-1/6 bg-cyan-950 '>Logo</div>

          <Typography
            component='div'
            sx={{ flexGrow: 1 }}
            className='flex w-full flex-row items-center space-x-8 md:justify-center lg:space-x-16'
          >
            <div className='hidden w-full  md:block md:w-auto'>
              <Link
                className=' text-base text-black lg:text-2xl  '
                href='/home'
              >
                หน้าแรก
              </Link>
            </div>

            <div className='hidden w-full md:block md:w-auto'>
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

            <div className='hidden w-full md:block md:w-auto'>
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

            <div className='hidden w-full md:block md:w-auto'>
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

            <div className='hidden w-full md:block md:w-auto'>
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

            <div className='hidden w-full md:block md:w-auto'>
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

            <div className='hidden w-full md:block md:w-auto'>
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
          </Typography>
          <IconButton
            //น้อยกว่า 768px ให้แสดงตัวที่ซ่อน
            className='md:hidden'
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mx: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
    // <div className='h-screen w-screen bg-orange-100'>
    //   <nav className=' bg-amber-300 p-10'>
    //     <ul className='flex w-full flex-row bg-slate-500'>
    //       <li className='w-1/6 flex-none bg-slate-300'>Logo</li>
    //       <li className='w-1/6'>4</li>
    //       <li className='w-1/6'>4</li>
    //       <li className='w-1/6'>4</li>
    //       <li className='w-1/6'>4</li>
    //       <li className='w-1/6'>4</li>
    //       <li className='w-1/6'>4</li>
    //       <li className='md:hidden'>
    //         <MenuIcon />
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
    // <div className={fontWeb.className}>
    //   <div
    //     className='relative h-screen  min-h-full w-full min-w-[1024px] overflow-auto bg-cover bg-center '
    //     style={{
    //       backgroundImage: `url(${checkImage})`,
    //     }}
    //   >
    //     <div className='absolute inset-x-0 top-0 flex h-24 flex-row items-center justify-between bg-[#ffcc00] px-8 text-center'>
    //       {home()}
    //       {learningSpace()}
    //       {vdo()}
    //       {podCast()}
    //       {activity()}
    //       {tv()}
    //       {aboutUs()}
    //     </div>

    //     <div className={container ? ' 2xl:container ' : ''}>{children}</div>
    //   </div>
    // </div>
  );
};

export default Layout;
