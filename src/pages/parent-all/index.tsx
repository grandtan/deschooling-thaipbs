import React from 'react';

import Layout from '@/components/layout/Layout';
const ParentAll = () => {
  return (
    <Layout backgroundImage='/images/bgn.png'>
      <div className=' h-screen  pt-40'>
        <div className=' mt-4 flex justify-center text-4xl font-semibold text-[#ffcc00]'>
          สวัสดีค่ะ คุณพ่อคุณแม่สนใจเรื่องไหนคลิกเลยค่ะ !
        </div>
      </div>
    </Layout>
  );
};

export default ParentAll;
