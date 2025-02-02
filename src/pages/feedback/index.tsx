import Head from 'next/head';
import React from 'react';
import { IoDocumentText } from 'react-icons/io5';

import Layout from '@/components/layout/Layout';

const Feedback = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>รับฟังเสียงสะท้อน : deschooling</title>
        <meta
          name='keywords'
          content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className='flex h-screen w-full flex-col border-t-4 border-yellow-400 bg-white pb-10'>
        <div className='bg-[#2b2a2a]'>
          <div className='mx-4 py-14 md:mx-24'>
            <div className='flex flex-col space-y-6 font-semibold'>
              <div className='flex justify-center space-x-4'>
                <IoDocumentText size={35} className='text-[#ffba00]' />
                <div className='text-3xl font-bold text-white'>
                  <div>บทความ : รับฟังเสียงสะท้อน</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Feedback;
