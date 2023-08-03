import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import TreeItem from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import {
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { auto } from '@popperjs/core';
import { Kanit } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { BsFillCalendarHeartFill } from 'react-icons/bs';
import { FaPodcast } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { PiTelevisionFill } from 'react-icons/pi';
import { RiMailUnreadFill } from 'react-icons/ri';
import { SiYoutubemusic } from 'react-icons/si';
import { TbHomeHeart } from 'react-icons/tb';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

import { LogoWebNew } from '@/icon/LogoWebNew';

const fontWeb = Kanit({
  weight: '400',
  subsets: ['thai'],
  display: 'swap',
});

interface LayoutProps {
  children?: React.ReactNode;
  backgroundImage?: string;
  container?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, backgroundImage }) => {
  const router = useRouter();
  const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);
  const [menuName, setMenuName] = React.useState('');
  const theme = useTheme();
  const isIpadLayout = useMediaQuery(theme.breakpoints.down('sm'));

  const home = () => (
    <div className='hidden w-full sm:block md:w-auto'>
      <Link
        className='flex flex-col items-center  p-3  text-base text-black  hover:rounded-b-[50px] hover:bg-white hover:text-[#ffba00] focus:rounded-b-[50px] focus:bg-white focus:text-[#ffba00]  lg:text-2xl'
        href='/home'
      >
        <div className='mb-1 flex flex-col  items-center'>
          <TbHomeHeart size={35} />
        </div>
        หน้าแรก
      </Link>
    </div>
  );

  const learningSpace = () => (
    <div className='hidden w-full sm:block  md:w-auto '>
      <button className=' peer p-3 text-base text-black hover:rounded-b-[50px]  hover:bg-white  hover:text-[#ffba00] focus:rounded-b-[50px] focus:bg-white focus:text-[#ffba00] lg:text-2xl'>
        <div className='mb-1 flex flex-col  items-center'>
          <MdComputer size={35} />
        </div>
        พื้นที่เรียนรู้
      </button>
      <div className='fixed hidden w-[210px] flex-col divide-y  rounded  bg-white   text-start  text-xl drop-shadow-lg hover:flex peer-hover:flex '>
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
    <div className='hidden w-full sm:block  md:w-auto'>
      <button className=' peer p-3 text-base text-black hover:rounded-b-[50px]  hover:bg-white  hover:text-[#ffba00] focus:rounded-b-[50px] focus:bg-white focus:text-[#ffba00] lg:text-2xl '>
        <div className='mb-1 flex  flex-col items-center'>
          <SiYoutubemusic size={35} />
        </div>
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
    <div className='hidden w-full sm:block  md:w-auto'>
      <button className='peer p-3 text-base text-black hover:rounded-b-[50px]  hover:bg-white  hover:text-[#ffba00] focus:rounded-b-[50px] focus:bg-white focus:text-[#ffba00] lg:text-2xl '>
        <div className='mb-1 flex  flex-col items-center'>
          <FaPodcast size={35} />
        </div>
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

  const event = () => (
    <div className='hidden w-full sm:block  md:w-auto'>
      <button className='peer p-3 text-base text-black hover:rounded-b-[50px]  hover:bg-white  hover:text-[#ffba00] focus:rounded-b-[50px] focus:bg-white focus:text-[#ffba00] lg:text-2xl '>
        <div className='mb-1 flex  flex-col items-center'>
          <BsFillCalendarHeartFill size={35} />
        </div>
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
          href='/gallery'
        >
          ภาพกิจกรรม
        </Link>
      </div>
    </div>
  );

  const tv = () => (
    <div className='hidden w-full sm:block  md:w-auto'>
      <button className='peer p-3 text-base text-black hover:rounded-b-[50px]  hover:bg-white  hover:text-[#ffba00] focus:rounded-b-[50px] focus:bg-white focus:text-[#ffba00] lg:text-2xl '>
        <div className='mb-1 flex  flex-col items-center'>
          <PiTelevisionFill size={35} />
        </div>
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
    <div className='hidden w-full sm:block md:w-auto'>
      <Link
        className='flex flex-col items-center  p-3  text-base text-black  hover:rounded-b-[50px] hover:bg-white hover:text-[#ffba00] focus:rounded-b-[50px] focus:bg-white focus:text-[#ffba00]  lg:text-2xl'
        href='/about-us'
      >
        <div className='mb-1 flex flex-col  items-center'>
          <RiMailUnreadFill size={35} />
        </div>
        ติดต่อเรา
      </Link>
    </div>
  );

  const drowerComponent = () => (
    <Drawer
      className={fontWeb.className}
      anchor='right'
      open={isOpenDrawer}
      onClose={() => setIsOpenDrawer(false)}
    >
      <div className='flex w-80 flex-col divide-y divide-yellow-300  rounded   border-y border-yellow-300 bg-white  lg:w-96'>
        <div className='ml-8 px-4 py-4'>
          <Link className=' text-lg text-black ' href='/home'>
            หน้าแรก
          </Link>
        </div>
        <div className='px-4 py-4'>
          <TreeView
            aria-label='file system navigator'
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{
              height: auto,
              flexGrow: 1,
              overflowY: 'auto',
            }}
          >
            <TreeItem
              nodeId='1'
              label={<div className=' text-lg '>พื้นที่เรียนรู้</div>}
            >
              <TreeItem
                onClick={() => router.push('/teacher')}
                nodeId='ครูและผู้อำนวยการ'
                label='ครูและผู้อำนวยการ'
                className='my-2 '
              />
              <TreeItem
                nodeId='พ่อแม่และผู้ปกครอง'
                label='พ่อแม่และผู้ปกครอง'
                className='mt-2 '
              />
            </TreeItem>
          </TreeView>
        </div>
        <div className='px-4 py-4'>
          <TreeView
            aria-label='file system navigator'
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{
              height: auto,
              flexGrow: 1,
              overflowY: 'auto',
            }}
          >
            <TreeItem
              nodeId='1'
              label={<div className=' text-lg '>วิดีโอ</div>}
            >
              <TreeItem
                onClick={() => router.push('/vdo')}
                nodeId='VDO How to'
                label='VDO How to'
                className='mt-2 '
              />
            </TreeItem>
          </TreeView>
        </div>

        <div className='px-4 py-4'>
          <TreeView
            aria-label='file system navigator'
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{
              height: auto,
              flexGrow: 1,
              overflowY: 'auto',
            }}
          >
            <TreeItem
              nodeId='1'
              label={<div className=' text-lg '>Podcast</div>}
            >
              <TreeItem
                onClick={() => router.push('/podcast')}
                nodeId='VDO How to'
                label='ฟัง พูด อ่าน กิน'
                className='mt-2 '
              />
            </TreeItem>
          </TreeView>
        </div>

        <div className='px-4 py-4'>
          <TreeView
            aria-label='file system navigator'
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{
              height: auto,
              flexGrow: 1,
              overflowY: 'auto',
            }}
          >
            <TreeItem
              nodeId='1'
              label={<div className=' text-lg '>กิจกรรม</div>}
            >
              <TreeItem
                onClick={() => router.push('/calendar')}
                nodeId='calendar'
                label='ปฏิทินกิจกรรม'
                className='my-2 '
              />

              <TreeItem
                onClick={() => router.push('/activity-register')}
                nodeId='activity-register'
                label=' สนใจเข้าร่วม'
                className='my-2 '
              />

              <TreeItem
                onClick={() => router.push('/activity-picture')}
                nodeId='activity-picture'
                label=' ภาพกิจกรรม'
                className='mt-2 '
              />
            </TreeItem>
          </TreeView>
        </div>

        <div className='px-4 py-4'>
          <TreeView
            aria-label='file system navigator'
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{
              height: auto,
              flexGrow: 1,
              overflowY: 'auto',
            }}
          >
            <TreeItem
              nodeId='1'
              label={<div className=' text-lg '>รายการทีวี</div>}
            >
              <TreeItem
                onClick={() => router.push('/deschooling')}
                nodeId='deschooling'
                label='Deschooling'
                className='my-2 '
              />

              <TreeItem
                onClick={() => router.push('/teacher-hero')}
                nodeId='teacher-hero'
                label=' Teacher Hero'
                className='mt-2 '
              />
            </TreeItem>
          </TreeView>
        </div>

        <div className='px-4 py-4'>
          <TreeView
            aria-label='file system navigator'
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{
              height: auto,
              flexGrow: 1,
              overflowY: 'auto',
            }}
          >
            <TreeItem
              nodeId='1'
              label={<div className=' text-lg '> ติดต่อเรา</div>}
            >
              <TreeItem
                onClick={() => router.push('/about-us')}
                nodeId='about-us'
                label='AboutUs'
                className='mt-2 '
              />
            </TreeItem>
          </TreeView>
        </div>
      </div>
    </Drawer>
  );
  return (
    <div className={fontWeb.className}>
      <div className='relative h-full w-full'>
        <div className=' flex  flex-row border border-[#ffcc00]'>
          <div className='flex w-1/4 justify-center'>
            <Link href='/home'>
              <LogoWebNew width={200} />
            </Link>
          </div>

          <div className='z-40 flex flex-row rounded-bl-[50px] bg-[#ffcc00]  sm:w-3/4  md:justify-center '>
            {home()}
            {learningSpace()}
            {vdo()}
            {podCast()}
            {event()}
            {tv()}
            {aboutUs()}
          </div>

          {isIpadLayout && (
            <IconButton
              className=' mx-2 hidden cursor-pointer '
              size='large'
              edge='end'
              color='default'
              aria-label='menu'
              sx={{ mx: 1 }}
              onClick={() => setIsOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </div>

        {drowerComponent()}
        <div
          style={{
            backgroundImage: `url(${
              backgroundImage || '/images/bg-master.png'
            })`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
