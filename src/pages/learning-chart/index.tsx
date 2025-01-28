import Head from 'next/head';
import React from 'react';
import { Bar } from 'react-chartjs-2';

import { chartData, chartOptions } from '@/components/layout/components/chart';
import Layout from '@/components/layout/Layout';

const LearningChart: React.FC = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>Learning Chart : Deschooling</title>
        <meta
          name='keywords'
          content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>
      <div className='flex h-screen w-full flex-col items-center justify-center px-20'>
        <div className='mb-10 bg-black p-1 text-center text-lg text-white md:text-3xl'>
          ความต้องการของบุคลากรทางการศึกษา
        </div>
        <div className=' flex h-3/4 w-full items-center justify-center'>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </Layout>
  );
};

export default LearningChart;
