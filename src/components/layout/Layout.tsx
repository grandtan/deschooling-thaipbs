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

import ContactUs from '@/components/layout/components/contactus';
import Event from '@/components/layout/components/event';
import Home from '@/components/layout/components/home';
import LearningSpace from '@/components/layout/components/learningspace';
import Podcast from '@/components/layout/components/podcast';
import Tv from '@/components/layout/components/tv';
import Vdo from '@/components/layout/components/vdo';

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
  const isMobileLayout = useMediaQuery(theme.breakpoints.down('sm'));

  const drowerComponent = () => (
    <Drawer
      className='font-san drop-shadow-xl  '
      anchor='right'
      open={isOpenDrawer}
      onClose={() => setIsOpenDrawer(false)}
    >
      <div className='flex w-80 flex-col divide-y divide-yellow-300 rounded  border-y   border-yellow-300  bg-white lg:w-96'>
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
              label={<div className=' text-lg'>พื้นที่เรียนรู้</div>}
            >
              <TreeItem
                onClick={() => router.push('/teacher')}
                nodeId='teacher'
                label='ครูและผู้อำนวยการ'
                className='my-4 '
              />
              <TreeItem
                onClick={() => router.push('/parent')}
                nodeId='parent'
                label='พ่อแม่และผู้ปกครอง'
                className='my-4 '
              />
              <TreeItem
                onClick={() => router.push('/small-school')}
                nodeId='small-school'
                label='โรงเรียนเล็ก จิ๋วแต่แจ๋ว'
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

              <TreeItem
                onClick={() => router.push('/outside-classroom-podcast')}
                nodeId='outside-classroom-podcast'
                label='รู้รอบนอกห้องเรียน'
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
                label='กินอย่างไรให้ชีวิตดี๊ดี 5 นาที รู้เรื่อง'
                className='my-4'
              />
              <TreeItem
                onClick={() => router.push('/outside-classroom-vdo')}
                nodeId='outside-classroom-vdo'
                label='วิชานอกห้อง'
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
            <TreeItem nodeId='1' label={<div className='text-lg'>กิจกรรม</div>}>
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

              <TreeItem
                onClick={() => router.push('/teacher-classroom')}
                nodeId='teacher-classroom'
                label='เติมพลังครู สู่ห้องเรียน'
                className='my-4'
              />

              <TreeItem
                onClick={() => router.push('/feedback')}
                nodeId='feedback'
                label='รับฟังเสียงสะท้อน'
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
              label={<div className='text-lg'>รายการทีวี</div>}
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

              <TreeItem
                onClick={() => router.push('/first-class')}
                nodeId='first-class'
                label='First Class ห้องเรียนแรก'
                className='my-4 '
              />

              <TreeItem
                onClick={() => router.push('/the-magnet')}
                nodeId='the-magnet'
                label='The Magnet แรงดึงกลับ'
                className='my-4 '
              />

              <TreeItem
                onClick={() => router.push('/thamaitai')}
                nodeId='thamaitai'
                label='ท่าไม้ตาย'
                className='my-4 '
              />

              <TreeItem
                onClick={() => router.push('/coolcru')}
                nodeId='coolcru'
                label='COOL CRU จารย์เจ๋ง'
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
      <div className='relative flex min-h-screen w-full min-w-[320px] flex-col overflow-hidden'>
        <div className='flex flex-row items-center justify-between border-y-8 border-r-2 border-white bg-white'>
          <div className='ml-2 flex justify-center md:ml-0 md:w-1/4'>
            <Link href='/home'>
              <LogoWebNew width='200px' />
            </Link>
          </div>

          <div className='z-10 hidden w-3/4 items-center justify-center rounded-bl-[50px] rounded-tr-[50px] bg-[#ffcc00] md:flex'>
            <Home menuName='หน้าแรก' pathName={pathName} />

            <LearningSpace
              menuName='พื้นที่เรียนรู้'
              submenu1='ครูและผู้อำนวยการ'
              submenu2='พ่อแม่และผู้ปกครอง'
              submenu3='โรงเรียนเล็ก จิ๋วแต่แจ๋ว'
              submenu4='ห้องเรียนเล็ก เอาเด็กอยู่'
              pathName={pathName}
            />

            <Vdo
              menuName='วิดีโอ'
              submenu1='VDO How to ดูง่าย พอดีคำ'
              submenu2='รู้รอบนอกห้องเรียน'
              pathName={pathName}
            />

            <Podcast
              menuName=' Podcast'
              submenu1='กินอย่างไรให้ชีวิตดี๊ดี 5 นาที รู้เรื่อง'
              submenu2='วิชานอกห้อง'
              pathName={pathName}
            />

            <Event
              menuName='กิจกรรม'
              submenu1='ปฏิทินกิจกรรม '
              submenu2=' ภาพกิจกรรม'
              submenu3='เติมพลังครู สู่ห้องเรียน'
              submenu4='รับฟังเสียงสะท้อน'
              pathName={pathName}
            />

            <Tv
              menuName=' รายการทีวี '
              submenu1='Deschooling'
              submenu2='Teacher Hero'
              submenu3='First Class ห้องเรียนแรก'
              submenu4='The Magnet แรงดึงกลับ'
              submenu5='ท่าไม้ตาย'
              submenu6='COOL CRU จารย์เจ๋ง'
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
              backgroundImage ||
              'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/bg-master.png'
            })`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100%',
            overflowY: 'auto',
            backgroundAttachment: 'fixed',
          }}
          className='flex flex-grow justify-center'
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
