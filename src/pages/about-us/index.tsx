import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLine } from 'react-icons/fa';

import Layout from '@/components/layout/Layout';
import { RiMailUnreadFill } from 'react-icons/ri';
import { Stack } from '@mui/material';
import Item from 'antd/es/descriptions/Item';

const AboutUs = () => {
  return (
    <Layout container={false}>
      <div className=' mx-24 h-screen  py-10'>
        <div className=' flex items-center justify-center space-x-4 font-semibold text-[#ffba00]'>
          <RiMailUnreadFill size={35} />
          <div className=' text-4xl '>ติดต่อเรา</div>
        </div>

        <div
          className='px-4'
          style={{
            background: `url('/images/bg-aboutus.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
          }}
        >
          <div className=' flex flex-row justify-center space-x-36'>
            <div className='  mt-52 flex flex-col items-center  justify-center space-y-4'>
              <div className=' text-3xl font-bold'>Email</div>
              <div className=' rounded-full  border-2 border-black bg-white p-3 text-2xl hover:border-[#ffba00] hover:text-red-500 '>
                <Link href='mailto:deschooling.thaipbs@gmail.com'>
                  <RiMailUnreadFill size={50} />
                </Link>
              </div>
            </div>
            <div className=' mt-52 flex flex-col items-center  justify-center space-y-4'>
              <div className=' text-3xl font-bold'>Line</div>
              <div className=' rounded-full  border-2 border-black bg-white p-3 text-2xl hover:border-[#ffba00] hover:text-green-500 '>
                <Link href='mailto:deschooling.thaipbs@gmail.com'>
                  <FaLine size={50} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
