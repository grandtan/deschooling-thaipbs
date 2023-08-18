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
import Head from 'next/head';

const ContactUs = () => {
  return (
    <Layout backgroundImage='/images/bg-contact-us.png'>
      <Head>
        <title>ติดต่อเรา : deschooling</title>
        <meta
          name='keywords'
          content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>
      <div className='h-screen pt-10'>
        <div className=' flex h-[70%] flex-col items-center justify-center  space-y-16'>
          <div className=' flex  space-x-4 font-semibold text-[#ffba00]'>
            <RiMailUnreadFill size={45} />
            <div className=' text-4xl '>ติดต่อเรา</div>
          </div>

          <div className='flex flex-row  space-x-28 rounded-3xl border-2 border-dotted  p-10 font-mono'>
            <div className='flex flex-col space-y-6'>
              <div className=' text-center text-xl text-[#ffba00] md:text-2xl'>
                EMAIL
              </div>
              <div className=' rounded-full  border-2 border-black bg-white p-4 text-2xl hover:border-[#ffba00] hover:bg-[#ffba00] hover:text-white'>
                <Link href='mailto:deschooling.thaipbs@gmail.com'>
                  <RiMailUnreadFill size={55} />
                </Link>
              </div>
            </div>

            <div className=' flex-col space-y-6'>
              <div className=' text-center text-xl text-[#ffba00] md:text-2xl'>
                LINE
              </div>
              <div className='rounded-full border-2 border-black bg-white p-4 text-2xl hover:border-[#ffba00] hover:bg-[#ffba00] hover:text-white'>
                <Link
                  href='https://line.me/R/ti/p/@deschooling?from=page'
                  passHref
                  target='_blank'
                >
                  <FaLine size={55} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='mt-10 flex  flex-row items-center justify-center space-x-28 '>
          <div className='text-center font-mono text-2xl  text-white'>
            Compose & Scan Me !
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default ContactUs;
