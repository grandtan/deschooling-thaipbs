import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPodcast } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { RiParentLine } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';

const Parents = () => {
  return (
    <Layout backgroundImage='/images/bg-parent-all.png'>
      <Head>
        <title>
          พ่อแม่และผู้ปกครอง : คุณคือใครในวงการการศึกษา : deschooling
        </title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>
      <div className=' h-screen py-10'>
        <div className=' flex items-center justify-center space-x-4 font-semibold text-[#ffba00]'>
          <RiParentLine size={35} />
          <div className=' text-3xl '> พ่อแม่และผู้ปกครอง</div>
        </div>

        <div className='mt-8 flex flex-col items-center  justify-center gap-4 md:mt-36  md:flex-row md:gap-10   '>
          <div className='flex flex-col space-y-4 md:space-y-6'>
            <div className=' text-center text-xl text-[#ffba00] md:text-2xl'>
              Home-Based Learning
            </div>
            <div className=' flex h-[100px] w-[200px] items-center justify-center rounded-full border-4 border-black bg-white p-14 hover:border-white hover:bg-[#ffba00] hover:text-white md:h-[150px] md:w-[260px] md:rounded-[50px] md:p-0'>
              <Link href='/parent'>
                <MdComputer size={100} />
              </Link>
            </div>
          </div>

          <div className=' flex-col space-y-4 md:space-y-6'>
            <div className=' text-center text-xl text-[#ffba00] md:text-2xl'>
              Podcast
            </div>
            <div className=' flex h-[100px] w-[200px] items-center justify-center rounded-full border-4 border-black bg-white p-14 hover:border-white hover:bg-[#ffba00] hover:text-white md:h-[150px] md:w-[260px] md:rounded-[50px] md:p-0'>
              <Link href='/podcast'>
                <FaPodcast size={100} />
              </Link>
            </div>
          </div>

          <div className=' flex-col space-y-4 md:space-y-6'>
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
      </div>
    </Layout>
  );
};

export default Parents;
