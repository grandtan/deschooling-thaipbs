import React from 'react';

import Layout from '@/components/layout/Layout';

const ThaiPbs = () => {
  return (
    <Layout backgroundImage='/images/tpbs.png'>
      <div className=' h-screen pt-28'>
        <div className='flex justify-center '>
          <div className='text-9xl  text-[#ffcc00]'>ไทยพีบีเอส</div>
        </div>
        <div className='mt-2 flex justify-center'>
          <div className='text-5xl  text-[#ffcc00]'>
            กับการขับเคลื่อน "การศึกษาไทย"
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ThaiPbs;
