import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { TfiRulerPencil } from 'react-icons/tfi';

const ThaiPbs = () => {
  return (
    <Layout backgroundImage='/images/bg-master.png'>
      <div className=' h-screen py-10'>
        <div className=' flex items-center justify-center space-x-4 font-semibold text-[#ffba00]'>
          <TfiRulerPencil size={35} />
          <div className=' text-3xl '>ความหมายของ Deschooling</div>
        </div>
      </div>
    </Layout>
  );
};

export default ThaiPbs;
