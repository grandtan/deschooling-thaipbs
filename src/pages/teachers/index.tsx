import React from 'react';
import { GiTeacher } from 'react-icons/gi';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { FaPodcast } from 'react-icons/fa';
import Image from 'next/image';
import { SiYoutubemusic } from 'react-icons/si';
import { MdComputer } from 'react-icons/md';
import Head from 'next/head';

const TeacherAll = () => {
  return (
    <Layout backgroundImage='/images/bg-teacher-all.png'>
      <Head>
        <title>
          ครูและผู้อำนวยการ : คุณคือใครในวงการการศึกษา : Deschooling
        </title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className=' h-screen py-10'>
        <div className=' flex items-center justify-center space-x-4 font-semibold text-[#ffba00]'>
          <GiTeacher size={35} />
          <div className=' text-3xl'> ครูและผู้อำนวยการ</div>
        </div>

        <div className=' mt-20  flex flex-row items-center justify-center space-x-28'>
          <div className='flex flex-col space-y-6'>
            <div className=' text-center text-xl text-[#ffba00] md:text-2xl'>
              VDO How to
            </div>
            <div className=' flex h-[100px] w-[200px] items-center justify-center  rounded-[50px] border-4 border-black bg-white p-8 hover:border-white hover:bg-[#ffba00] hover:text-white md:h-[150px] md:w-[260px] md:p-0'>
              <Link href='/vdo'>
                <SiYoutubemusic size={100} />
              </Link>
            </div>
          </div>

          <div className=' flex-col space-y-6'>
            <div className=' text-center text-xl text-[#ffba00] md:text-2xl'>
              Podcast
            </div>
            <div className=' flex h-[100px] w-[200px] items-center justify-center  rounded-[50px] border-4 border-black bg-white p-8 hover:border-white hover:bg-[#ffba00] hover:text-white md:h-[150px] md:w-[260px] md:p-0'>
              <Link href='/podcast'>
                <FaPodcast size={100} />
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-20 flex  flex-row items-center justify-center space-x-28 '>
          <div className='flex flex-col space-y-6'>
            <div className=' text-center text-xl text-[#ffba00] md:text-2xl'>
              Learning Space
            </div>
            <div className=' flex h-[100px] w-[200px] items-center justify-center  rounded-[50px] border-4 border-black bg-white p-8 hover:border-white hover:bg-[#ffba00] hover:text-white md:h-[150px] md:w-[260px] md:p-0'>
              <Link href='/teacher'>
                <MdComputer size={100} />
              </Link>
            </div>
          </div>

          <div className=' flex-col space-y-6'>
            <div className=' text-center text-xl text-[#ffba00] md:text-2xl'>
              TV Program
            </div>
            <div className='flex h-[100px] w-[200px] items-center justify-center  rounded-[50px] border-4 border-black bg-white p-8 hover:border-white hover:bg-[#ffba00] hover:text-white md:h-[150px] md:w-[260px] md:p-0'>
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
      </div>
    </Layout>
  );
};

export default TeacherAll;
