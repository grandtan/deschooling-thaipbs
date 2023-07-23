import React from 'react';
import { PiStudentFill, PiTelevisionFill } from 'react-icons/pi';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { RiMailUnreadFill } from 'react-icons/ri';
import { FaLine, FaPodcast } from 'react-icons/fa';

import Image from 'next/image';
const Student = () => {
  return (
    <Layout backgroundImage='/images/bg-master.png'>
      <div className=' mx-24 h-screen py-10'>
        <div className=' flex items-center space-x-4 font-semibold text-[#ffba00]'>
          <PiStudentFill size={35} />
          <div className=' text-3xl '>นักเรียน</div>
        </div>

        <div className=' mt-60 flex flex-row items-center justify-center space-x-28 '>
          <div className=' rounded-full  border-2 border-black bg-white p-10 text-2xl hover:border-[#ffba00] hover:bg-[#ffba00] hover:text-white'>
            <Link href='mailto:deschooling.thaipbs@gmail.com'>
              <FaPodcast size={60} />
            </Link>
          </div>

          <div className='rounded-[50px]  border-2 border-black bg-white p-10 text-2xl hover:border-[#ffba00] hover:bg-[#ffba00] hover:text-white'>
            <Link
              href='https://line.me/R/ti/p/@deschooling?from=page'
              passHref
              target='_blank'
            >
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
    </Layout>
  );
};

export default Student;
