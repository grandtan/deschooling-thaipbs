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
        <div className='flex h-[70%] w-full flex-col space-y-14 px-44 py-10'>
          <div className=' flex flex-row items-center justify-center text-4xl'>
            <div className=' space-y-4 text-center '>
              <p className=' text-white'>ความเป็นมาของ</p>
              <p className='text-[#ffcc00]'>"Deschooling"</p>
            </div>
          </div>

          <div className='flex flex-row items-center justify-center '>
            <div className=' rounded-b-xl  rounded-t-xl  border-2 border-dotted  p-4 text-xl leading-10 text-white'>
              <p className='text-justify indent-10'>
                เราเชื่อว่า “ทุกคนเป็นส่วนหนึ่งในการเปลี่ยนแปลงการศึกษาไทยได้
                <span className='ml-4 mr-2 font-mono text-xl font-extrabold text-[#f05223]'>
                  Thai PBS
                </span>
                จึงมีความตั้งใจที่อยากจะขับเคลื่อนการศึกษาไทย
                ด้วยการข้ามข้อจำกัดเดิม ๆ ผ่านการนำเสนอ นวัตกรรม
                วิธีการและแนวคิดใหม่ ๆ เพื่อเป็นพื้นที่แลกเปลี่ยนเรียนรู้ร่วมกัน
                พร้อมกับสร้างความร่วมมือจากบุคลากรหลากหลายภาคส่วนทั้งจากการหน่วยงานภาครัฐ
                ภาคเอกชน ครู ผู้อำนวยการโรงเรียน ชุมชน ท้องถิ่น พ่อแม่ ผู้ปกครอง
                นักเรียน ตลอดจนความร่วมมือจากประชาชนคนรุ่นใหม่
                ที่อยากเข้ามามีส่วนร่วมในการพลิกโฉมการศึกษาไทย ผ่านช่องทาง
                <span className='mx-2 font-mono text-xl font-extrabold text-[#73fa61]'>
                  Online
                </span>
                และ
                <span className='mx-2 font-mono text-xl font-extrabold text-[#73fa61]'>
                  On Air
                </span>
                ตรงกับความต้องการที่หลากหลาย (On Demand)
                เพื่อให้เกิดการเข้าถึงกลุ่มเป้าหมาย ได้ทุกที่ ทุกเวลา
                และต่อยอดไปสู่การเปลี่ยนแปลงในสังคมวงกว้าง
                ด้วยการก้าวข้ามทุกปัญหาการศึกษาไทยกับหลักคิดแบบ
              </p>

              <p className='mx-2 mt-4 text-center font-mono text-2xl font-extrabold text-[#ffcc00] underline underline-offset-2'>
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
