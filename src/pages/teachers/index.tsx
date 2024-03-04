import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPodcast } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { MdComputer } from 'react-icons/md';
import { SiYoutubemusic } from 'react-icons/si';

import Layout from '@/components/layout/Layout';

const TeacherAll = () => {
  return (
    <Layout backgroundImage='/images/bg-teacher-all.png'>
      <Head>
        <title>
          ครูและผู้อำนวยการ : คุณคือใครในวงการการศึกษา : deschooling
        </title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className='h-full py-4 sm:h-screen md:py-10'>
        <div className=' flex items-center justify-center space-x-4 font-semibold text-[#ffba00]'>
          <GiTeacher size={35} />
          <div className=' text-3xl'> ครูและผู้อำนวยการ</div>
        </div>

        <div className='flex flex-col items-center justify-center gap-6 pt-6 md:flex-row md:gap-10  md:pt-24'>
          <div className='flex flex-col space-y-2 md:space-y-6'>
            <div className=' text-center text-xl text-[#ffba00] md:text-2xl'>
              VDO How to
            </div>
            <div className=' flex h-[100px] w-[200px] items-center justify-center rounded-full border-4 border-black bg-white p-14 hover:border-white hover:bg-[#ffba00] hover:text-white md:h-[150px] md:w-[260px] md:rounded-[50px] md:p-0'>
              <Link href='/vdo'>
                <SiYoutubemusic size={100} />
              </Link>
            </div>
          </div>

          <div className=' flex flex-col space-y-2 md:space-y-6'>
            <div className=' text-center text-xl text-[#ffba00] md:text-2xl'>
              Podcast
            </div>
            <div className=' flex h-[100px] w-[200px] items-center justify-center rounded-full border-4 border-black bg-white p-14 hover:border-white hover:bg-[#ffba00] hover:text-white md:h-[150px] md:w-[260px] md:rounded-[50px] md:p-0'>
              <Link href='/podcast'>
                <FaPodcast size={100} />
              </Link>
            </div>
          </div>

          <div className=' flex-col space-y-2 md:space-y-6'>
            <div className=' text-center text-xl text-[#ffba00] md:text-2xl'>
              TV Program
            </div>
            <div className='flex h-[100px] w-[200px] items-center justify-center rounded-full border-4 border-black bg-white p-14 hover:border-white hover:bg-[#ffba00] hover:text-white md:h-[150px] md:w-[260px] md:rounded-[50px] md:p-0'>
              <Link href='https://www.altv.tv/home' passHref target='_blank'>
                <Image
                  src='/images/logoaltv.png'
                  alt='Picture of the author'
                  width={200}
                  height={200}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center  gap-6 pt-4 md:flex-row  md:gap-10   md:pt-8'>
          <div className='flex flex-col space-y-2 md:space-y-6'>
            <div className=' text-center text-xl text-[#ffba00] md:text-2xl'>
              Learning Space
            </div>
            <div className=' flex h-[100px] w-[200px] items-center justify-center rounded-full border-4 border-black bg-white p-14 hover:border-white hover:bg-[#ffba00] hover:text-white md:h-[150px] md:w-[260px] md:rounded-[50px] md:p-0'>
              <Link href='/teacher'>
                <MdComputer size={100} />
              </Link>
            </div>
          </div>

          <div className='flex flex-col space-y-2 md:space-y-6'>
            <div className=' text-center text-xl text-[#ffba00] md:text-2xl'>
              โรงเรียนเล็ก จิ๋วแต่แจ๋ว
            </div>
            <div className=' flex h-[100px] w-[200px] items-center justify-center rounded-full border-4 border-black bg-white p-14 hover:border-white hover:bg-[#ffba00] hover:text-white md:h-[150px] md:w-[260px] md:rounded-[50px] md:p-0'>
              <Link href='/small-school'>
                <MdComputer size={100} />
              </Link>
            </div>
          </div>

          <div className='flex flex-col space-y-2 md:space-y-6'>
            <div className=' text-center text-xl text-[#ffba00] md:text-2xl'>
              ห้องเรียนเล็ก เอาเด็กอยู่
            </div>
            <div className=' flex h-[100px] w-[200px] items-center justify-center rounded-full border-4 border-black bg-white p-14 hover:border-white hover:bg-[#ffba00] hover:text-white md:h-[150px] md:w-[260px] md:rounded-[50px] md:p-0'>
              <Link href='/classroom'>
                <MdComputer size={100} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeacherAll;
