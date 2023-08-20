import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import TreeItem from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import { Drawer, IconButton, useTheme } from '@mui/material';
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

  const theme = useTheme();

  const isIpadLayout = useMediaQuery(theme.breakpoints.down('md'));

  const pathName = router.pathname;

  const home = () => {
    const baseClasses =
      'flex flex-col items-center p-3 text-base text-black hover:rounded-b-[50px] hover:bg-white hover:text-[#ffba00] lg:text-2xl';
    const activeClasses =
      pathName === '/home' ||
      pathName === '/student' ||
      pathName === '/government' ||
      pathName === '/teachers' ||
      pathName === '/parents' ||
      pathName === '/local-government'
        ? 'rounded-b-[50px] bg-white text-[#ffba00]'
        : '';

    return (
      <div className='hidden w-full sm:block md:w-auto'>
        <Link className={`${baseClasses} ${activeClasses}`} href='/home'>
          <div className='mb-1 flex flex-col  items-center'>
            <TbHomeHeart size={35} />
          </div>
          หน้าแรก
        </Link>
      </div>
    );
  };

  const learningSpace = () => {
    const baseButtonClasses =
      'peer p-3 text-base text-black hover:rounded-b-[50px] hover:bg-white hover:text-[#ffba00] lg:text-2xl';
    const activeButtonClasses =
      pathName === '/teacher' || pathName === '/parent'
        ? 'rounded-b-[50px] bg-white text-[#ffba00]'
        : '';

    return (
      <div className='hidden w-full sm:block md:w-auto'>
        <button className={`${baseButtonClasses} ${activeButtonClasses}`}>
          <div className='mb-1 flex flex-col  items-center'>
            <MdComputer size={35} />
          </div>
          พื้นที่เรียนรู้
        </button>
        <div className='fixed hidden w-[210px] flex-col divide-y rounded bg-white text-start text-xl drop-shadow-lg hover:flex peer-hover:flex'>
          <Link
            className='px-5 py-3 text-black hover:text-[#ffba00]'
            href='/teacher'
          >
            ครูและผู้อำนวยการ
          </Link>
          <Link
            className='px-5 py-3 text-black hover:text-[#ffba00]'
            href='/parent'
          >
            พ่อแม่และผู้ปกครอง
          </Link>
        </div>
      </div>
    );
  };

  const vdo = () => {
    const baseButtonClasses =
      'peer p-3 text-base text-black hover:rounded-b-[50px] hover:bg-white hover:text-[#ffba00] lg:text-2xl';
    const activeButtonClasses =
      pathName === '/vdo' ? 'rounded-b-[50px] bg-white text-[#ffba00]' : '';

    return (
      <div className='hidden w-full sm:block md:w-auto'>
        <button className={`${baseButtonClasses} ${activeButtonClasses}`}>
          <div className='mb-1 flex flex-col items-center'>
            <SiYoutubemusic size={35} />
          </div>
          วิดีโอ
        </button>

        <div className='fixed hidden w-[210px] flex-col divide-y rounded bg-white text-start text-xl drop-shadow-lg hover:flex peer-hover:flex'>
          <Link
            className='px-5 py-3 text-black hover:text-[#ffba00]'
            href='/vdo'
          >
            VDO How to
          </Link>
        </div>
      </div>
    );
  };

  const podCast = () => {
    const baseButtonClasses =
      'peer p-3 text-base text-black hover:rounded-b-[50px] hover:bg-white hover:text-[#ffba00] lg:text-2xl';
    const activeButtonClasses =
      pathName === '/podcast' ? 'rounded-b-[50px] bg-white text-[#ffba00]' : '';

    return (
      <div className='hidden w-full sm:block md:w-auto'>
        <button className={`${baseButtonClasses} ${activeButtonClasses}`}>
          <div className='mb-1 flex flex-col items-center'>
            <FaPodcast size={35} />
          </div>
          Podcast
        </button>

        <div className='fixed hidden w-[310px] flex-col divide-y rounded bg-white text-start text-xl drop-shadow-lg hover:flex peer-hover:flex'>
          <Link
            className='px-5 py-3 text-black hover:text-[#ffba00]'
            href='/podcast'
          >
            กินอย่างไรให้ชีวิตดี๊ดี 5 นาที รู้เรื่อง
          </Link>
        </div>
      </div>
    );
  };

  const event = () => {
    const baseButtonClasses =
      'peer p-3 text-base text-black hover:rounded-b-[50px] hover:bg-white hover:text-[#ffba00] lg:text-2xl';
    const activeButtonClasses =
      pathName === '/calendar' || pathName === '/gallery'
        ? 'rounded-b-[50px] bg-white text-[#ffba00]'
        : '';

    return (
      <div className='hidden w-full sm:block md:w-auto'>
        <button className={`${baseButtonClasses} ${activeButtonClasses}`}>
          <div className='mb-1 flex flex-col items-center'>
            <BsFillCalendarHeartFill size={35} />
          </div>
          กิจกรรม
        </button>

        <div className='fixed hidden w-[210px] flex-col divide-y rounded bg-white text-start text-xl drop-shadow-lg hover:flex peer-hover:flex'>
          <Link
            className='px-5 py-3 text-black hover:text-[#ffba00]'
            href='/calendar'
          >
            ปฏิทินกิจกรรม
          </Link>

          <Link
            className='px-5 py-3 text-black hover:text-[#ffba00]'
            href='/gallery'
          >
            ภาพกิจกรรม
          </Link>
        </div>
      </div>
    );
  };

  const tv = () => {
    const baseButtonClasses =
      'peer p-3 text-base text-black hover:rounded-b-[50px] hover:bg-white hover:text-[#ffba00] lg:text-2xl';
    const activeButtonClasses =
      pathName === '/deschooling' || pathName === '/teacher-hero'
        ? 'rounded-b-[50px] bg-white text-[#ffba00]'
        : '';

    return (
      <div className='hidden w-full sm:block md:w-auto'>
        <button className={`${baseButtonClasses} ${activeButtonClasses}`}>
          <div className='mb-1 flex flex-col items-center'>
            <PiTelevisionFill size={35} />
          </div>
          รายการทีวี
        </button>

        <div className='fixed hidden w-[210px] flex-col divide-y rounded bg-white text-start text-xl drop-shadow-lg hover:flex peer-hover:flex'>
          <Link
            className='px-5 py-3 text-black hover:text-[#ffba00]'
            href='/deschooling'
          >
            Deschooling
          </Link>

          <Link
            className='px-5 py-3 text-black hover:text-[#ffba00]'
            href='/teacher-hero'
          >
            Teacher Hero
          </Link>
        </div>
      </div>
    );
  };

  const ContactUs = () => {
    const baseClasses =
      'flex flex-col items-center p-3 text-base text-black hover:rounded-b-[50px] hover:bg-white hover:text-[#ffba00] lg:text-2xl';
    const activeClasses =
      pathName === '/contact-us'
        ? 'rounded-b-[50px] bg-white text-[#ffba00]'
        : '';

    return (
      <div className='hidden w-full sm:block md:w-auto'>
        <Link className={`${baseClasses} ${activeClasses}`} href='/contact-us'>
          <div className='mb-1 flex flex-col  items-center'>
            <RiMailUnreadFill size={35} />
          </div>
          ติดต่อเรา
        </Link>
      </div>
    );
  };

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
                onClick={() => router.push('/parent')}
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
                onClick={() => router.push('/gallery')}
                nodeId='gallery'
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

        <div className='px-12 py-4 '>
          <Link className=' text-lg text-black ' href='/contact-us'>
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </Drawer>
  );
  return (
    <div className={fontWeb.className}>
      <div className='relative h-screen w-full '>
        <div className='flex flex-row items-center justify-between border-y-8 border-r-2 border-white bg-white'>
          <div className='flex justify-center md:w-1/4 '>
            <Link href='/home'>
              <LogoWebNew width='200px' />
            </Link>
          </div>

          <div className='z-20 hidden w-3/4 items-center justify-center rounded-bl-[50px] rounded-tr-[50px] bg-[#ffcc00]  md:flex'>
            {home()}
            {learningSpace()}
            {vdo()}
            {podCast()}
            {event()}
            {tv()}
            {ContactUs()}
          </div>

          {isIpadLayout && (
            <IconButton
              className=' cursor-pointer justify-end md:hidden '
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
