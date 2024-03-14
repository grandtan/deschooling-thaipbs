import React from 'react';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';

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

      <div className=' py-8 md:py-20'>
        <div className='flex flex-row items-center justify-center '>
          <div className=' w-[768px] px-4 text-lg leading-6 text-white md:px-0 md:leading-10 lg:w-[940px] lg:text-2xl lg:leading-10'>
            <div className='text-center'>
              เราเชื่อว่า "ทุกคนเป็นส่วนหนึ่งในการเปลี่ยนแปลงการศึกษาไทยได้"
              <span className='mx-2 text-[#f05223]'>Thai PBS</span>
              จึงมีความตั้งใจ
            </div>
            <div className=' text-center'>
              ที่อยากจะขับเคลื่อนการศึกษาไทยด้วยการข้ามข้อจำกัดเดิม ๆ
              ผ่านการนำเสนอ นวัตกรรม วิธีการ
            </div>
            <div className=' text-center'>
              และแนวคิดใหม่ ๆ เพื่อเป็นพื้นที่แลกเปลี่ยนเรียนรู้ร่วมกัน
              พร้อมกับสร้าง
            </div>
            <div className='indent-0 md:indent-12'>
              ความร่วมมือจากบุคลากรหลากหลายภาคส่วนทั้งหน่วยงาน ภาครัฐ ภาคเอกชน
              ครู นักเรียน
            </div>

            <div className=' text-center'>
              ผู้อำนวยการโรงเรียน พ่อแม่ ผู้ปกครอง ชุมชน ท้องถิ่น
              ตลอดจนความร่วมมือจากประชาชนคนรุ่นใหม่
            </div>

            <div className=' text-center'>
              ที่อยากเข้ามามี ส่วนร่วมในการพลิกโฉมการศึกษาไทย ผ่านช่องทาง Online
              และ On Air
            </div>
            <div className=' text-center'>
              ตรงกับความต้องการที่หลากหลาย (On Demand)
              เพื่อให้เกิดการเข้าถึงกลุ่มเป้าหมาย
              <div>
                ได้ทุกที่ทุกเวลา และต่อยอดไปสู่การเปลี่ยนแปลง ในสังคมวงกว้าง
                ด้วยการก้าวข้ามทุกปัญหา
              </div>
              <div>การศึกษาไทยกับแนวคิดแบบ</div>
            </div>

            <div className='mx-2 mt-12 text-center text-4xl font-extrabold text-[#ffcc00]'>
              “Deschooling ห้องเรียนข้ามเส้น”
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutDeschooling;
