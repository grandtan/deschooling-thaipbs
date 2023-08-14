import Head from 'next/head';
import React from 'react';
import { RiGovernmentFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import Grid from '@mui/material/Grid';

const LocalGovernment = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>หน่วยงานท้องถิ่น : คุณคือใครในวงการการศึกษา : Deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>
      <div className=' mx-24 h-full py-10'>
        <div className=' flex space-x-4 font-semibold text-[#ffba00]'>
          <RiGovernmentFill size={35} />
          <div className=' text-3xl '> หน่วยงานท้องถิ่น</div>
        </div>

        <div className=' mt-10 flex flex-col space-y-8'>
          <div className='flex flex-row justify-center space-x-6 '>
            <div className='aspect-video  rounded-t-xl rounded-bl-xl  duration-500 hover:-translate-y-6 hover:border-[#ffba00]  hover:text-yellow-900 hover:ease-in '>
              <div>
                <iframe
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/kkJqmf25xzk'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className='aspect-video  rounded-t-xl rounded-bl-xl  duration-500 hover:-translate-y-6 hover:border-[#ffba00]  hover:text-yellow-900 hover:ease-in '>
              <div>
                <iframe
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/OG_OGyNXDXQ'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className='flex flex-row justify-center space-x-6 '>
            <div className='aspect-video  rounded-t-xl rounded-bl-xl  duration-500 hover:-translate-y-6 hover:border-[#ffba00]  hover:text-yellow-900 hover:ease-in '>
              <div>
                <iframe
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/2MjVUkt8JBQ'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className='aspect-video rounded-t-xl rounded-bl-xl  duration-500 hover:-translate-y-6 hover:border-[#ffba00]  hover:text-yellow-900 hover:ease-in '>
              <div className=' target:blank'>
                <iframe
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/5UcbCjUYLdY'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LocalGovernment;
