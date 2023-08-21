import React from 'react';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import { BiRightArrow } from 'react-icons/bi';

const AboutDeschooling = () => {
  return (
    <Layout backgroundImage='/images/bg-deschooling.png'>
      <Head>
        <title>ความเป็นมา : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className='h-screen  w-full '>
        <div className='flex flex-row items-center justify-center pt-20'>
          <div className='max-w-4xl'>
            <div className='px-4  text-start  indent-10 text-xl leading-6 text-white md:px-0 md:text-justify md:text-2xl md:leading-10'>
              เราเชื่อว่า "ทุกคนเป็นส่วนหนึ่งในการเปลี่ยนแปลงการศึกษาไทยได้"
              <span className='ml-4 mr-2 text-[#f05223]'>Thai PBS</span>
              จึงมีความตั้งใจที่อยากจะขับเคลื่อนการศึกษาไทย
              ด้วยการข้ามข้อจำกัดเดิม ๆ ผ่านการนำเสนอ นวัตกรรม วิธีการ
              และแนวคิดใหม่ ๆ เพื่อเป็นพื้นที่แลกเปลี่ยนเรียนรู้ร่วมกัน
              พร้อมกับสร้าง
            </div>
            <div className='px-4  text-start  indent-10 text-xl leading-6 text-white md:px-0 md:text-justify md:text-2xl md:leading-10'>
              ความร่วมมือจากบุคลากรหลากหลายภาคส่วนทั้งหน่วยงานภาครัฐ ภาคเอกชน
              ผู้อำนวยการโรงเรียน ครู ชุมชน ท้องถิ่น พ่อแม่ ผู้ปกครอง นักเรียน
              ตลอดจนความร่วมมือจากประชาชนคนรุ่นใหม่
              ที่อยากเข้ามามีส่วนร่วมในการพลิกโฉมการศึกษาไทย ผ่านช่องทาง Online
              และ On Air ตรงกับความต้องการที่หลากหลาย (On Demand)
              เพื่อให้เกิดการเข้าถึงกลุ่มเป้าหมาย ได้ทุกที่ ทุกเวลา
              และต่อยอดไปสู่การเปลี่ยนแปลงในสังคมวงกว้าง
              ด้วยการก้าวข้ามทุกปัญหาการศึกษาไทยกับแนวคิดแบบ
            </div>

            <div className='mx-2 mt-12  text-center text-2xl font-extrabold text-[#ffcc00] md:text-4xl'>
              “Deschooling ห้องเรียนข้ามเส้น”
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutDeschooling;
