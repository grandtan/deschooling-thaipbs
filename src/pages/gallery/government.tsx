import React from 'react';
import Layout from '@/components/layout/Layout';
import { Image } from 'antd';
import Link from 'next/link';

const government = () => {
  const governmentEvent = [
    '/images/government-event/government_1.jpg',
    '/images/government-event/government_2.jpg',
    '/images/government-event/government_3.jpg',
    '/images/government-event/government_4.jpg',
    '/images/government-event/government_5.jpg',
    '/images/government-event/government_6.jpg',
    '/images/government-event/government_7.jpg',
    '/images/government-event/government_8.jpg',
    '/images/government-event/government_9.jpg',
    '/images/government-event/government_10.jpg',
    '/images/government-event/government_11.jpg',
    '/images/government-event/government_12.jpg',
    '/images/government-event/government_13.jpg',
    '/images/government-event/government_14.jpg',
    '/images/government-event/government_15.jpg',
    '/images/government-event/government_16.jpg',
    '/images/government-event/government_17.jpg',
    '/images/government-event/government_18.jpg',
    '/images/government-event/government_19.jpg',
    '/images/government-event/government_20.jpg',
  ];

  return (
    <Layout backgroundImage='/images/bg-master.png'>
      <div className='mx-24 h-full py-10'>
        <div className=' flex flex-row items-center space-x-4 font-semibold text-[#ffba00]'>
          <div className=' text-3xl'>
            “ชวนพรรคร่วมคิด ฟื้นชีวิตเรียนรู้ใหม่ หนุนเด็กไทยก้าวทันโลก”
          </div>
        </div>

        <div className='my-8 grid grid-cols-2 gap-2 md:grid-cols-5'>
          <Image.PreviewGroup>
            {governmentEvent.map((image, index) => (
              <div key={index} className='m-4'>
                <Image
                  className=' rounded-xl'
                  sizes='50%'
                  src={image}
                  alt={`Government Activity ${index + 1}`}
                />
              </div>
            ))}
          </Image.PreviewGroup>
        </div>

        <div className='text-justify text-lg font-light text-white'>
          วันที่ 5 มีนาคม 2566 เวลา 10.00 - 13.00 น. ภาคีเพื่อการศึกษาไทย
          (Thailand Education Partnership: TEP) จัดเวทีเสวนา “TEP Policy Forum:
          ชวนพรรคร่วมคิด พลิกห้องเรียน เปลี่ยนไทยทันโลก”
          โดยนำเสนอความท้าทายของระบบการศึกษาไทย
          และข้อเสนอแนะเชิงนโยบายการศึกษาในโลกยุคหลังโควิด-19
          ที่ต้องเร่งฟื้นฟูการเรียนรู้ที่ถดถอย
          ไปพร้อมกับสร้างสมรรถนะให้เด็กไทยก้าวทันโลกที่เปลี่ยนแปลงอย่างรวดเร็ว
          และเปิดเวทีให้ตัวแทน 8 พรรคการเมือง ได้แก่ พรรคเพื่อไทย พรรคก้าวไกล
          พรรคไทยสร้างไทย พรรคประชาธิปัตย์ พรรคชาติพัฒนากล้า พรรคภูมิใจไทย
          พรรคชาติไทยพัฒนา และ พรรคเสรีรวมไทย
          มาร่วมคิดทางออกเชิงนโยบายให้ระบบการศึกษาไทยก้าวข้ามความท้าทายได้ตรงจุดและตรงกับความต้องการของสังคม
        </div>

        <div className='mt-10 flex justify-center text-lg text-[#ffba00]'>
          <Link
            href='/pdf/government-event.pdf'
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

export default government;
