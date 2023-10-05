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

import { ContactUs } from '@/components/layout/components/contactus';
import { Event } from '@/components/layout/components/event';
import { Home } from '@/components/layout/components/home';
import { LearningSpace } from '@/components/layout/components/learningspace';
import { Podcast } from '@/components/layout/components/podcast';
import { Tv } from '@/components/layout/components/tv';
import { Vdo } from '@/components/layout/components/vdo';

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
  const pathName = router.pathname;

  const theme = useTheme();

  const isIpadLayout = useMediaQuery(theme.breakpoints.down('md'));

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
              label={<div className=' text-lg  '>พื้นที่เรียนรู้</div>}
            >
              <TreeItem
                onClick={() => router.push('/teacher')}
                nodeId='ครูและผู้อำนวยการ'
                label='ครูและผู้อำนวยการ'
                className='my-4 '
              />
              <TreeItem
                onClick={() => router.push('/parent')}
                nodeId='พ่อแม่และผู้ปกครอง'
                label='พ่อแม่และผู้ปกครอง'
                className='my-4 '
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
                className='my-4'
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
                className='my-4'
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
                className='my-4'
              />

              <TreeItem
                onClick={() => router.push('/gallery')}
                nodeId='gallery'
                label=' ภาพกิจกรรม'
                className='my-4'
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
                className='my-4'
              />

              <TreeItem
                onClick={() => router.push('/teacher-hero')}
                nodeId='teacher-hero'
                label=' Teacher Hero'
                className='my-4 '
              />
            </TreeItem>
          </TreeView>
        </div>

        <div className='px-12 py-4 '>
          <Link className=' text-lg ' href='/contact-us'>
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
          <div className='ml-2 flex justify-center md:ml-0 md:w-1/4'>
            <Link href='/home'>
              <LogoWebNew width='200px' />
            </Link>
          </div>

          <div className='z-20 hidden w-3/4 items-center justify-center rounded-bl-[50px] rounded-tr-[50px] bg-[#ffcc00]  md:flex '>
            <Home menuName='หน้าแรก' pathName={pathName} />

            <LearningSpace
              menuName='พื้นที่เรียนรู้'
              submenu1='ครูและผู้อำนวยการ'
              submenu2='พ่อแม่แลผู้ปกครอง'
              pathName={pathName}
            />

            <Vdo
              menuName='วิดีโอ'
              submenu1='VDO How to ดูง่าย พอดีคำ'
              pathName={pathName}
            />

            <Podcast
              menuName=' Podcast'
              submenu1='กินอย่างไรให้ชีวิตดี๊ดี 5 นาที รู้เรื่อง'
              pathName={pathName}
            />

            <Event
              menuName=' กิจกรรม '
              submenu1='ปฏิทินกิจกรรม '
              submenu2=' ภาพกิจกรรม'
              pathName={pathName}
            />

            <Tv
              menuName=' รายการทีวี '
              submenu1='Deschooling'
              submenu2='Teacher Hero'
              pathName={pathName}
            />

            <ContactUs menuName='  ติดต่อเรา' pathName={pathName} />
          </div>

          {isIpadLayout && (
            <IconButton
              className='cursor-pointer justify-end md:hidden'
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
