import React from 'react';

import Layout from '@/components/layout/Layout';
import { RiParentLine } from 'react-icons/ri';
const ParentAll = () => {
  return (
    <Layout backgroundImage='/images/bg-master.png'>
      <div className=' h-screen py-10'>
        <div className=' flex items-center justify-center space-x-4 font-semibold text-[#ffba00]'>
          <RiParentLine size={35} />
          <div className=' text-3xl '> พ่อแม่และผู้ปกครอง</div>
        </div>
      </div>
    </Layout>
  );
};

export default ParentAll;
