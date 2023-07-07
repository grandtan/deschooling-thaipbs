import Layout from '@/components/layout/Layout';
import React from 'react';

const Calendar = () => {
  return (
    <Layout backgroundImage='/images/bgn.png'>
      <div className=' h-screen  pt-40'>
        <div className=' mt-4 flex justify-center text-4xl font-semibold text-[#ffcc00]'>
          สมัครเข้าร่วมกิจกรรม Scan เลย
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
