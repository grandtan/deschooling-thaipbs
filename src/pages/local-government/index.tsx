import React from 'react';

import Layout from '@/components/layout/Layout';
import { RiGovernmentFill, RiParentLine } from 'react-icons/ri';
import Head from 'next/head';

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
      </div>
    </Layout>
  );
};

export default LocalGovernment;
