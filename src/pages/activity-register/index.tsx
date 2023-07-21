import React from 'react';

import Layout from '@/components/layout/Layout';

import { BsFillCalendarHeartFill } from 'react-icons/bs';

const ActivityRegister = () => {
  return (
    <Layout backgroundImage='/images/bg-master.png'>
      <div className='mx-24 h-screen py-10'>
        <div className=' flex flex-row items-center space-x-4 font-semibold text-[#ffba00]'>
          <BsFillCalendarHeartFill size={35} />
          <div className=' text-2xl'> สมัครเข้าร่วมกิจกรรม</div>
        </div>
      </div>
    </Layout>
  );
};

export default ActivityRegister;
