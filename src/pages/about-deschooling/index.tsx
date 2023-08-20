import React from 'react';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import { BiRightArrow } from 'react-icons/bi';

const AboutDeschooling = () => {
  return (
    <Layout backgroundImage='/images/bg-deschooling.png'>
      <Head>
        <title>ความหมาย : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className=' h-screen'>
        <div className='flex h-[70%] w-full flex-col space-y-8 pt-20'>
          <div className='flex  flex-row items-center justify-center'>
            <div className='w-[500px] text-start text-2xl leading-10 text-white md:w-[1100px] md:text-justify '>
              <p className='indent-10'>
                เราเชื่อว่า "ทุกคนเป็นส่วนหนึ่งในการเปลี่ยนแปลงการศึกษาไทยได้"
                Thai PBS จึงมีความตั้งใจที่อยากจะขับเคลื่อนการศึกษาไทย
                ด้วยการข้ามข้อจำกัดเดิม ๆ ผ่านการนำเสนอ นวัตกรรม วิธีการ
                และแนวคิดใหม่ ๆ เพื่อเป็นพื้นที่แลกเปลี่ยนเรียนรู้ร่วมกัน
                พร้อมกับสร้าง
              </p>

              <p className=' indent-10  '>
                ความร่วมมือจากบุคลากรหลากหลายภาคส่วนทั้งหน่วยงานภาครัฐ ภาคเอกชน
                ครู ผู้อำนวยการโรงเรียน ชุมชน ท้องถิ่น พ่อแม่ ผู้ปกครอง นักเรียน
                ตลอดจนความร่วมมือจากประชาชนคนรุ่นใหม่
                ที่อยากเข้ามามีส่วนร่วมในการพลิกโฉมการศึกษาไทย ผ่านช่องทาง
                Online และ On Air ตรงกับความต้องการที่หลากหลาย (On Demand)
                เพื่อให้เกิดการเข้าถึงกลุ่มเป้าหมาย ได้ทุกที่ ทุกเวลา
                และต่อยอดไปสู่การเปลี่ยนแปลงในสังคมวงกว้าง
                ด้วยการก้าวข้ามทุกปัญหาการศึกษาไทยกับแนวคิดแบบ
              </p>
              <p className='mx-2 mt-12  text-center  text-4xl font-extrabold text-[#ffcc00] '>
                “Deschooling ห้องเรียนข้ามเส้น”
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutDeschooling;
