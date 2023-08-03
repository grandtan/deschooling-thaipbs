import React from 'react';

import Layout from '@/components/layout/Layout';
import { RiGovernmentFill } from 'react-icons/ri';
import Head from 'next/head';
const Goverment = () => {
  return (
    <Layout backgroundImage='/images/bg-government.png'>
      <Head>
        <title>รัฐบาล : คุณคือใครในวงการการศึกษา : Deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>
      <div className=' h-screen py-10'>
        <div className=' flex items-center justify-center space-x-4 font-semibold text-[#ffba00]'>
          <RiGovernmentFill size={35} />
          <div className=' text-3xl '> รัฐบาล</div>
        </div>
      </div>
    </Layout>
  );
};

export default Goverment;
