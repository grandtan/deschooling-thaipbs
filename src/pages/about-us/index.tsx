import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLine } from 'react-icons/fa';
import { BiQrScan } from 'react-icons/bi';

import Layout from '@/components/layout/Layout';
import { RiMailUnreadFill } from 'react-icons/ri';
import { Stack } from '@mui/material';
import Item from 'antd/es/descriptions/Item';

const AboutUs = () => {
  return (
    <Layout backgroundImage='/images/bg-activity-register.png'>
      <div className=' mx-24 h-screen py-10'>
        <div className=' flex items-center space-x-4 font-semibold text-[#ffba00]'>
          <RiMailUnreadFill size={35} />
          <div className=' text-3xl '>ติดต่อเรา</div>
        </div>

        <div className='mt-20 flex flex-row items-center justify-center space-x-28 '>
          <div className='flex flex-col space-y-6'>
            <div className=' text-center text-xl text-[#ffba00] md:text-2xl'>
              EMAIL
            </div>
            <div className=' rounded-full  border-2 border-black bg-white p-6 text-2xl hover:border-[#ffba00] hover:bg-[#ffba00] hover:text-white'>
              <Link href='mailto:deschooling.thaipbs@gmail.com'>
                <RiMailUnreadFill size={100} />
              </Link>
            </div>
          </div>

          <div className=' flex-col space-y-6'>
            <div className=' text-center text-xl text-[#ffba00] md:text-2xl'>
              LINE
            </div>
            <div className='rounded-full border-2 border-black bg-white p-6 text-2xl hover:border-[#ffba00] hover:bg-[#ffba00] hover:text-white'>
              <Link
                href='https://line.me/R/ti/p/@deschooling?from=page'
                passHref
                target='_blank'
              >
                <FaLine size={100} />
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-10 flex  flex-row items-center justify-center space-x-28 '>
          <div className='text-center font-mono text-2xl  text-white'>
            Compose & Scan Me !
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
