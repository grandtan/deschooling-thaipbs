import React from 'react';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import { RiQuestionnaireFill } from 'react-icons/ri';
import Image from 'next/image';
import { LiaSchoolSolid } from 'react-icons/lia';
import { LuBaby } from 'react-icons/lu';
import { BsFillCalendarHeartFill } from 'react-icons/bs';
import { Spa } from '@mui/icons-material';

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

      <div className=' h-screen px-44 pt-20'>
        <div className='flex flex-col items-center justify-center '>
          <div className=' mb-10 flex flex-row space-x-2'>
            <div className='font-mono text-3xl  font-extrabold'>
              <span className='text-white'>"ความเป็นมาของ </span>
              <span className='text-[#ffba00] underline decoration-double decoration-1 underline-offset-4'>
                Deschooling"
              </span>
            </div>
          </div>
          <div className='text-justify indent-8 text-xl  leading-10 text-white'>
            เราเชื่อว่า “ทุกคนเป็นส่วนหนึ่งในการเปลี่ยนแปลงการศึกษาไทยได้
            <span className='mx-2 font-mono text-2xl font-extrabold text-[#f05223]'>
              Thai PBS
            </span>
            จึงมีความ ตั้งใจที่อยากจะขับเคลื่อนการศึกษาไทย
            ด้วยการข้ามข้อจำกัดเดิม ๆ ผ่านการนำเสนอ นวัตกรรม
            วิธีการและแนวคิดใหม่ ๆ เพื่อเป็นพื้นที่แลกเปลี่ยนเรียนรู้ร่วมกัน
            พร้อมกับสร้างความร่วมมือจากบุคลากรหลากหลายภาคส่วนทั้งจากการหน่วยงานภาครัฐ
            ภาคเอกชน ครู ผู้อำนวยการโรงเรียน ชุมชน ท้องถิ่น พ่อแม่ ผู้ปกครอง
            นักเรียน ตลอดจนความร่วมมือจากประชาชนคนรุ่นใหม่
            ที่อยากเข้ามามีส่วนร่วมในการพลิกโฉมการศึกษาไทย ผ่านช่องทาง Online
            และ On Air ตรงกับความต้องการที่หลากหลาย (On
            Demand)เพื่อให้เกิดการเข้าถึงกลุ่มเป้าหมาย ได้ทุกที่ ทุกเวลา
            และต่อยอดไปสู่การเปลี่ยนแปลงในสังคมวงกว้าง
            ด้วยการก้าวข้ามทุกปัญหาการศึกษาไทย กับหลักคิดแบบ
            <span className='mx-2 font-mono text-2xl font-extrabold text-[#ffba00] '>
              “Deschooling ห้องเรียนข้ามเส้น”
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutDeschooling;
