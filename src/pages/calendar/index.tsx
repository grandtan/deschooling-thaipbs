import React from 'react';

import Layout from '@/components/layout/Layout';

const Calendar = () => {
  return (
    <Layout backgroundImage='/images/bg-activity2.png'>
      <div className=' h-screen  pt-40'>
        <div className=' mt-4 flex justify-center text-4xl font-semibold text-[#ffcc00]'>
          ปฏิทินกิจกรรม
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
