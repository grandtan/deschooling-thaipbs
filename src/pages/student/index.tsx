import React from 'react';
import { PiStudentFill, PiTelevisionFill } from 'react-icons/pi';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { RiMailUnreadFill } from 'react-icons/ri';
import { FaLine, FaPodcast } from 'react-icons/fa';

import Image from 'next/image';
import { Grid } from '@mui/material';
import Item from 'antd/es/descriptions/Item';
const Student = () => {
  return (
    <Layout backgroundImage='/images/bg-student.png'>
      <div className=' mx-24 h-screen py-10'>
        <div className=' flex items-center justify-center space-x-4 font-semibold text-[#ffba00]'>
          <PiStudentFill size={35} />
          <div className=' text-3xl '>นักเรียน</div>
        </div>

        {/* <div className=' my-24 flex flex-row justify-center text-xl text-white md:text-3xl'>
          สวัสดีค่ะ น้อง ๆ สนใจเรื่องไหนคลิกเลยค่ะ !
        </div> */}

        <div className='mt-36 flex  flex-row items-center justify-center space-x-28'>
          <div className='flex flex-col space-y-6'>
            <div className=' text-center text-xl text-[#ffba00] md:text-2xl'>
              Podcast ฟัง พูด อ่าน กิน
            </div>
            <div className=' flex h-[100px] w-[200px] items-center justify-center  rounded-[50px] border-4 border-black bg-white p-8 hover:border-white hover:bg-[#ffba00] hover:text-white md:h-[150px] md:w-[260px] md:p-0'>
              <Link href='/podcast'>
                <FaPodcast size={100} />
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

export default Student;
