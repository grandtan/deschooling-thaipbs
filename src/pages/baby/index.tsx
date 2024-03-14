import React from 'react';
import { LuBaby } from 'react-icons/lu';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';

const Baby = () => {
  return (
    <Layout backgroundImage='/images/bg-baby.png'>
      <Head>
        <title>เด็กทารก : คุณคือใครในวงการการศึกษา : Deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>
      <div className='  py-10'>
        <div className=' flex items-center justify-center space-x-4 font-semibold text-[#ffba00]'>
          <LuBaby size={35} />
          <div className=' text-3xl '> เด็กทารก </div>
        </div>
      </div>
    </Layout>
  );
};

export default Baby;
