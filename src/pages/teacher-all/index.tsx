import React from 'react';
import { GiTeacher } from 'react-icons/gi';
import Layout from '@/components/layout/Layout';
const TeacherAll = () => {
  return (
    <Layout backgroundImage='/images/bg-master.png'>
      <div className=' h-screen py-10'>
        <div className=' flex items-center justify-center space-x-4 font-semibold text-[#ffba00]'>
          <GiTeacher size={35} />
          <div className=' text-3xl '> ครูและผู้อำนวยการ</div>
        </div>
      </div>
    </Layout>
  );
};

export default TeacherAll;
