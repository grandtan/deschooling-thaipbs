import React from 'react';
import Layout from '@/components/layout/Layout';
import { BsImages } from 'react-icons/bs';
import { Image } from 'antd';
import Link from 'next/link';
import Head from 'next/head';

const Gallery = () => {
  const governmentEvent = [
    '/images/government-event/government_1.jpg',
    '/images/government-event/government_2.jpg',
    '/images/government-event/government_3.jpg',
    '/images/government-event/government_4.jpg',
    '/images/government-event/government_5.jpg',
  ];

  const schoolEvent = [
    '/images/school-event/school_1.jpg',
    '/images/school-event/school_2.jpg',
    '/images/school-event/school_3.jpg',
    '/images/school-event/school_4.jpg',
    '/images/school-event/school_5.jpg',
  ];

  return (
    <Layout backgroundImage='/images/bg-master.png'>
      <Head>
        <title>ภาพกิจกรรม : DeschoolingDoc</title>
        <meta
          name='keywords'
          content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>
      <div className='mx-24 py-10'>
        <div className=' flex flex-row items-center space-x-4 font-semibold text-[#ffba00]'>
          <BsImages size={35} />
          <div className=' text-3xl'>ภาพกิจกรรม</div>
        </div>

        <div className='  grid h-screen grid-cols-1 place-content-center gap-4  md:grid-cols-2'>
          <div className=' grid grid-cols-4 gap-1 md:grid-cols-4'>
            <div className='col-span-4 grid content-center  rounded-t-3xl  bg-[#ffcc00] p-4 text-center text-xl'>
              เวทีเสวนา “ชวนพรรคร่วมคิด ฟื้นชีวิตเรียนรู้ใหม่ หนุนเด็กไทย
              ก้าวทันโลก”
            </div>
            <Image.PreviewGroup>
              {governmentEvent.map((image, index) => (
                <div key={index} className={index === 0 ? 'col-span-4 ' : ''}>
                  <Image src={image} sizes='50%' alt='Government Event' />
                </div>
              ))}
            </Image.PreviewGroup>
            <Link
              className='col-span-4  grid content-center rounded-b-3xl bg-[#ffd666]  p-2 text-center '
              href='/gallery/government'
            >
              รายละเอียดเพิ่มเติม
            </Link>
          </div>

          <div className=' grid grid-cols-4  gap-x-1  md:grid-cols-4'>
            <div className='col-span-4 grid   content-center rounded-t-3xl  bg-[#ffcc00] p-4 text-center text-xl'>
              เวทีเสวนา “โรงเรียนเล็ก โรงเรียนใหญ่แก้ปัญหาอย่างไรให้ตรงจุด”
            </div>
            <Image.PreviewGroup>
              {schoolEvent.map((image, index) => (
                <div key={index} className={index === 0 ? 'col-span-4  ' : ''}>
                  <Image src={image} sizes='100%' alt='School Event' />
                </div>
              ))}
            </Image.PreviewGroup>
            <Link
              className='col-span-4  grid content-center rounded-b-3xl bg-[#ffd666]  p-2 text-center '
              href='/gallery/school'
            >
              รายละเอียดเพิ่มเติม
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
