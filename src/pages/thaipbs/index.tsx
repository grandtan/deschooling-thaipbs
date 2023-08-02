import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { TfiRulerPencil } from 'react-icons/tfi';
import Head from 'next/head';

const ThaiPbs = () => {
  return (
    <Layout backgroundImage='/images/bg-master.png'>
      <Head>
        <title>ความหมาย : DeschoolingDoc</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className=' h-screen py-10'>
        <div className=' flex items-center justify-center space-x-4 font-semibold text-[#ffba00]'>
          <TfiRulerPencil size={35} />
          <div className=' text-3xl '>ความหมายของ Deschooling</div>
        </div>
      </div>
    </Layout>
  );
};

export default ThaiPbs;
