import React from 'react';
import { LuBaby } from 'react-icons/lu';
import Layout from '@/components/layout/Layout';

const Baby = () => {
  return (
    <Layout backgroundImage='/images/bg-baby.png'>
      <div className=' h-screen py-10'>
        <div className=' flex items-center justify-center space-x-4 font-semibold text-[#ffba00]'>
          <LuBaby size={35} />
          <div className=' text-3xl '> เด็กทารก </div>
        </div>
      </div>
    </Layout>
  );
};

export default Baby;
