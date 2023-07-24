import React from 'react';

import Layout from '@/components/layout/Layout';
import { RiGovernmentFill } from 'react-icons/ri';
const Goverment = () => {
  return (
    <Layout backgroundImage='/images/bg-government.png'>
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
