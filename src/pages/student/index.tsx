import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPodcast } from 'react-icons/fa';
import { PiStudentFill } from 'react-icons/pi';

import Layout from '@/components/layout/Layout';

const Student = () => {
  return (
    <Layout backgroundImage='/images/bg-student.png'>
      <Head>
        <title>นักเรียน : คุณคือใครในวงการการศึกษา : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className='  h-screen py-10'>
        <div className=' flex items-center justify-center space-x-4 font-semibold text-[#ffba00]'>
          <PiStudentFill size={35} />
          <div className=' text-3xl '>นักเรียน</div>
        </div>

        <div className='mt-36 flex flex-col  items-center  justify-center  gap-8 md:flex-row   md:space-x-10'>
          <div className='flex flex-col space-y-6'>
            <div className=' text-center  text-xl text-[#ffba00] md:text-2xl'>
              Podcast
            </div>
            <div className=' flex h-[100px] w-[200px] items-center justify-center  rounded-full border-4 border-black bg-white p-14 hover:border-white hover:bg-[#ffba00] hover:text-white md:h-[150px] md:w-[260px] md:rounded-[50px] md:p-0'>
              <Link href='/podcast'>
                <FaPodcast size={100} />
              </Link>
            </div>
          </div>

          <div className='flex flex-col space-y-6'>
            <div className=' text-center  text-xl text-[#ffba00] md:text-2xl'>
              TV Program
            </div>
            <div className='flex h-[100px] w-[200px] items-center justify-center  rounded-full border-4 border-black bg-white p-14 hover:border-white hover:bg-[#ffba00] hover:text-white md:h-[150px] md:w-[260px] md:rounded-[50px] md:p-0'>
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

export default Student;
