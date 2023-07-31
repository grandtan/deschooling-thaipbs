import React from 'react';
import Layout from '@/components/layout/Layout';

const government = () => {
  return (
    <Layout backgroundImage='/images/bg-master.png'>
      <div className='mx-24 h-screen py-10'>
        <div className=' flex flex-row items-center space-x-4 font-semibold text-[#ffba00]'>
          <div className=' text-3xl'>
            “ชวนพรรคร่วมคิด ฟื้นชีวิตเรียนรู้ใหม่ หนุนเด็กไทยก้าวทันโลก”
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default government;
