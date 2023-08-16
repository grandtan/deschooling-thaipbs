import React from 'react';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import { BiRightArrow } from 'react-icons/bi';

const AboutDeschooling = () => {
  return (
    <Layout backgroundImage='/images/bg-deschooling.png'>
      <Head>
        <title>ความหมาย : Deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className=' h-screen '>
        <div className='flex h-[70%] w-full flex-row '>
          <div className=' flex w-1/3 items-center justify-end  space-x-10 text-5xl'>
            <div className=' space-y-4 text-center '>
              <p className=' text-white'>ความเป็นมาของ</p>
              <p className='text-[#ffba00]'>'Deschooling'</p>
            </div>
            <div className=' text-[#3ba30a]'>
              <BiRightArrow />
            </div>
          </div>

          <div className=' flex w-2/3 items-center justify-start px-8 pr-20'>
            <div className=' text-xl leading-10 text-white'>
              <p className='text-center '>
                เราเชื่อว่า “ทุกคนเป็นส่วนหนึ่งในการเปลี่ยนแปลงการศึกษาไทยได้
                <span className='mx-2 font-mono text-2xl font-extrabold text-[#f05223]'>
                  Thai PBS
                </span>
                จึงมีความตั้งใจที่อยากจะขับเคลื่อนการศึกษาไทย
                ด้วยการข้ามข้อจำกัดเดิม ๆ ผ่านการนำเสนอ นวัตกรรม
                วิธีการและแนวคิดใหม่ ๆ เพื่อเป็นพื้นที่แลกเปลี่ยนเรียนรู้ร่วมกัน
                พร้อมกับสร้างความร่วมมือจากบุคลากรหลากหลายภาคส่วนทั้งจากการหน่วยงานภาครัฐ
                ภาคเอกชน ครู ผู้อำนวยการโรงเรียน ชุมชน ท้องถิ่น พ่อแม่ ผู้ปกครอง
                นักเรียน ตลอดจนความร่วมมือจากประชาชนคนรุ่นใหม่
                ที่อยากเข้ามามีส่วนร่วมในการพลิกโฉมการศึกษาไทย ผ่านช่องทาง
                Online และ On Air ตรงกับความต้องการที่หลากหลาย (On Demand)
                เพื่อให้เกิดการเข้าถึงกลุ่มเป้าหมาย ได้ทุกที่ ทุกเวลา
                และต่อยอดไปสู่การเปลี่ยนแปลงในสังคมวงกว้าง
                ด้วยการก้าวข้ามทุกปัญหาการศึกษาไทย กับหลักคิดแบบ
                <span className='mx-2 font-mono text-2xl font-extrabold text-[#ffba00] underline underline-offset-2'>
                  “Deschooling ห้องเรียนข้ามเส้น”
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutDeschooling;
