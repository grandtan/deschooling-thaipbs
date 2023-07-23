import React from 'react';
import { PiStudentFill } from 'react-icons/pi';
import Layout from '@/components/layout/Layout';

const Student = () => {
  return (
    <Layout backgroundImage='/images/bg-master.png'>
      <div className=' h-screen py-10'>
        <div className=' flex items-center justify-center space-x-4 font-semibold text-[#ffba00]'>
          <PiStudentFill size={35} />
          <div className=' text-3xl '>นักเรียน</div>
        </div>
      </div>
    </Layout>
  );
};

export default Student;
