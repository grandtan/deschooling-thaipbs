import React from 'react';

import Layout from '@/components/layout/Layout';
import { RiGovernmentFill, RiParentLine } from 'react-icons/ri';

const LocalGovernment = () => {
  return (
    <Layout backgroundImage='/images/bg-master.png'>
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
