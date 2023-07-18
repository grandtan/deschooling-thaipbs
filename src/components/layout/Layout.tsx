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
  Drawer,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Unstable_Grid2';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { auto } from '@popperjs/core';
import { useRouter } from 'next/router';

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

const Layout: React.FC<LayoutProps> = ({
  children,
  backgroundImage,
  container = true,
}) => {
  const router = useRouter();
  const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);

  const home = () => (
    <div className='hidden w-full md:w-auto lg:block'>
      <Link className=' text-base text-black  lg:text-2xl' href='/home'>
        หน้าแรก
      </Link>
    </div>
  );

  const learningSpace = () => (
    <div className='hidden  w-full md:w-auto lg:block'>
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
    <div className='hidden w-full md:w-auto lg:block'>
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
    <div className='hidden w-full md:w-auto lg:block'>
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
    <div className='hidden w-full md:w-auto lg:block'>
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
    <div className='hidden w-full md:w-auto lg:block'>
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
    <div className='hidden w-full md:w-auto lg:block'>
      <button className='peer py-8 text-base text-black lg:text-2xl'>
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

  return (
    <div className={fontWeb.className}>
      <div className='relative h-full w-full '>
        <div className=' flex flex-row  border-2 border-[#ffcc00]'>
          <div className=' w-1/4  '>
            {/* <Image
              src='/images/logoweb.png'
              alt='Picture of the author'
              width={200}
              height={200}
            /> */}
          </div>
          <div className='z-40 flex w-full flex-row items-center space-x-8 rounded-bl-[50px] bg-[#ffcc00] transition-all  duration-500 ease-in md:justify-center lg:space-x-10 '>
            {home()}
            {learningSpace()}
            {vdo()}
            {podCast()}
            {activity()}
            {tv()}
            {aboutUs()}
          </div>

          <IconButton
            className='mx-2 block cursor-pointer lg:hidden'
            size='large'
            edge='start'
            color='default'
            aria-label='menu'
            sx={{ mx: 1 }}
            onClick={() => setIsOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </div>

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
        <div className=' bg-slate-400'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
