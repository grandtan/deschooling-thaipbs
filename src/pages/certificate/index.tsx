import Head from 'next/head';
import React from 'react';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { PiCertificateBold } from 'react-icons/pi';

const images = [
  '/images/poster/Poster290766.jpg',
  '/images/poster/Poster290766.jpg',
  '/images/poster/Poster290766.jpg',
];

const Certificate = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>ดาวน์โหลดเกียรติบัตร : deschooling</title>
        <meta
          name='keywords'
          content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className='mx-4 my-10 h-full w-full space-y-10 md:mx-24'>
        {/* Header */}
        <div className='flex justify-center space-x-4 font-semibold text-[#ffba00] md:items-center'>
          <FaCloudDownloadAlt size={35} />
          <div className='bg-black p-0.5 text-3xl'>ดาวน์โหลดเกียรติบัตร</div>
        </div>

        {/* Section 1 */}

        <div className='flex justify-center space-x-2 bg-black p-2 font-semibold  text-white  md:items-center '>
          <PiCertificateBold size={35} />
          <div className='text-center text-2xl'>
            เกียรติบัตรกิจกรรมวันที่ 20 เดือน เม.ย. 2567
          </div>
        </div>

        <div className=' flex flex-col items-center justify-center space-y-8 md:flex-row md:space-x-24 md:space-y-0'>
          {images.map((src, index) => (
            <div key={index} className='group'>
              <Image
                src={src}
                alt='poster'
                width={350}
                height={400}
                className='rounded-xl border-2 border-dashed border-white transition-transform duration-500 ease-in group-hover:-translate-y-6'
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Certificate;
