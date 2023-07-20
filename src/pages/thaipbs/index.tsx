import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { PiPencilLine } from 'react-icons/pi';

const ThaiPbs = () => {
  return (
    <Layout backgroundImage='/images/bghome1-1.png'>
      <div className=' h-screen py-10'>
        <div className=' flex items-center justify-center font-semibold text-[#ffba00]'>
          <PiPencilLine size={30} />
          <div className=' text-2xl '>ความหมายของ Deschooling</div>
        </div>
      </div>
    </Layout>
  );
};

export default ThaiPbs;
