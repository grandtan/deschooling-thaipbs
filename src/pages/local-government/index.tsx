import Head from 'next/head';
import React from 'react';
import { RiGovernmentFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';

const LocalGovernment = () => {
  return (
    <Layout backgroundImage='/images/local-government.png'>
      <Head>
        <title>หน่วยงานท้องถิ่น : คุณคือใครในวงการการศึกษา : Deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>
      <div className=' h-screen py-10'>
        <div className=' flex items-center justify-center space-x-4 font-semibold text-[#ffba00]'>
          <RiGovernmentFill size={35} />
          <div className=' text-3xl '> หน่วยงานท้องถิ่น</div>
        </div>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/M_jcdqHPiFo'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
    </Layout>
  );
};

export default LocalGovernment;
