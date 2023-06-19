import React from 'react';

import Layout from '@/components/layout/Layout';

const ThaiPbs = () => {
  return (
    // <Layout container={false}>
    //   <Image
    //     src='/images/bg-tpbs.png'
    //     width={2880}
    //     height={1616}
    //     alt='Background home 2'
    //   />
    // </Layout>

    <Layout backgroundImage='/images/bg-tpbs.png'>
      <div className=' m-auto h-screen pt-40'>
        <div className='flex justify-center '>
          <div className='text-9xl  text-[#ffcc00]'>ไทยพีบีเอส</div>
        </div>
        <div className='mt-2 flex justify-center'>
          <div className='px-6  text-5xl text-[#ffcc00]'>กับการขับเคลื่อน</div>
          <div className=' text-5xl text-white'>"การศึกษาไทย"</div>
        </div>
      </div>
    </Layout>
  );
};

export default ThaiPbs;
