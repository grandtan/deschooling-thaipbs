import React from 'react';
import Layout from '@/components/layout/Layout';
import { Image } from 'antd';
import Link from 'next/link';
import Head from 'next/head';

const school = () => {
  const schoolEvent = [
    '/images/school-event/school_1.jpg',
    '/images/school-event/school_2.jpg',
    '/images/school-event/school_3.jpg',
    '/images/school-event/school_4.jpg',
    '/images/school-event/school_5.jpg',
    '/images/school-event/school_6.jpg',
    '/images/school-event/school_7.jpg',
    '/images/school-event/school_8.jpg',
    '/images/school-event/school_9.jpg',
    '/images/school-event/school_10.jpg',
    '/images/school-event/school_11.jpg',
    '/images/school-event/school_12.jpg',
    '/images/school-event/school_13.jpg',
    '/images/school-event/school_14.jpg',
    '/images/school-event/school_15.jpg',
    '/images/school-event/school_16.jpg',
    '/images/school-event/school_17.jpg',
    '/images/school-event/school_18.jpg',
    '/images/school-event/school_19.jpg',
    '/images/school-event/school_20.jpg',
  ];

  return (
    <Layout backgroundImage='/images/bg-master.png'>
      <Head>
        <title>
          เวทีเสวนา “โรงเรียนเล็ก โรงเรียนใหญ่แก้ปัญหาอย่างไรให้ตรงจุด”
        </title>
        <meta
          name='keywords'
          content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>
      <div className='mx-4 h-full py-10 md:mx-24'>
        <div className=' flex flex-row items-center space-x-4 font-semibold text-[#ffba00]'>
          <div className='text-xl md:text-3xl'>
            “โรงเรียนเล็ก โรงเรียนใหญ่แก้ปัญหาอย่างไรให้ตรงจุด”
          </div>
        </div>

        <div className='my-8 grid grid-cols-1 gap-2 md:grid-cols-5'>
          <Image.PreviewGroup>
            {schoolEvent.map((image, index) => (
              <div key={index} className='m-4'>
                <Image
                  className=' rounded-xl'
                  sizes='50%'
                  src={image}
                  alt={`School Event ${index + 1}`}
                />
              </div>
            ))}
          </Image.PreviewGroup>
        </div>

        <div className='text-center indent-0 text-lg font-light text-white md:text-justify md:indent-8'>
          วันที่ 5 มีนาคม 2566 เวลา 14.00 - 15.30 น. ดร.สมเกียรติ ตั้งกิจวานิชย์
          ประธานสถาบันวิจัยเพื่อการพัฒนาประเทศไทยนำเสนอภาพระบบการศึกษาไทยที่มีปัญหาตั้งแต่ก่อนเกิดสถานการณ์โควิด-19
          ทั้งคุณภาพโดยรวมที่อยู่ในระดับต่ำความเหลื่อมล้ำทางการศึกษาเพิ่มสูงขึ้น
          ยิ่งไปกว่านั้นวิกฤตการแพร่ระบาดของโควิด-19 ตอกย้ำปัญหาเก่า
          ทำให้เด็กไทยสูญเสียการเรียนรู้เป็นวงกว้างและมีความเสี่ยงหลุดจากระบบการศึกษามากขึ้น
        </div>

        <div className='mt-10 flex justify-center text-lg text-[#ffba00]'>
          <Link
            href='/pdf/school-event.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            อ่านเพิ่มเติม
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default school;
