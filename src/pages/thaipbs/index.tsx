import React from 'react';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import { RiQuestionnaireFill } from 'react-icons/ri';

const ThaiPbs = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>ความหมาย : Deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>
      <div className=' h-screen py-10'>
        <div className=' flex items-center justify-center space-x-4 font-semibold text-[#ffba00]'>
          <div className='text-3xl'> Deschooling คือ_ </div>
          <RiQuestionnaireFill size={35} />
        </div>
      </div>
    </Layout>
  );
};

export default ThaiPbs;
