import Head from 'next/head';

import React from 'react';

import Layout from '@/components/layout/Layout';
import Konkaen from '@/pages/cooperation/component/konkaen';
import { IoDocumentText } from 'react-icons/io5';
import Rayong from '@/pages/cooperation/component/rayong';

const Cooperation = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>ความร่วมมือ : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className='flex h-full w-full flex-col border-t-4 border-yellow-400 bg-white pb-10'>
        <div className='bg-[#2b2a2a]'>
          <div className='mx-4 py-14 md:mx-24'>
            <div className='flex flex-col space-y-6 font-semibold'>
              <div className='flex justify-center space-x-4'>
                <IoDocumentText size={35} className='text-[#ffba00]' />
                <div className='text-3xl font-bold text-white'>
                  <div>บทความสรุปกิจกรรม</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Konkaen />
        <Rayong />
      </div>
    </Layout>
  );
};

export default Cooperation;
