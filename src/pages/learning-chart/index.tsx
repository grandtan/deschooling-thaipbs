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
      <div className='mx-4 flex h-screen w-full flex-col items-center justify-center md:mx-0'>
        <h1 className='mb-10 text-center text-lg text-white md:text-3xl'>
          ท่านอยากให้การศึกษาไทยปรับเปลี่ยนเรื่องอะไรมากที่สุด
        </h1>
        <div className='flex h-3/4 w-full justify-center rounded-2xl border-4 border-yellow-500 bg-white p-4 md:w-3/4'>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </Layout>
  );
};

export default LearningChart;
