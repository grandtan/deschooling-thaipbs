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

      <div className='px-auto  h-screen  max-w-full '>
        <div className='flex flex-row items-center justify-center px-28 pt-20 '>
          <div className=' text-justify text-lg leading-7 text-white md:text-2xl md:leading-10 '>
            <p className='indent-10'>
              เราเชื่อว่า "ทุกคนเป็นส่วนหนึ่งในการเปลี่ยนแปลงการศึกษาไทยได้"
              Thai PBS จึงมีความตั้งใจที่อยากจะขับเคลื่อนการศึกษาไทย
              ด้วยการข้ามข้อจำกัดเดิม ๆ ผ่านการนำเสนอ นวัตกรรม วิธีการ
              และแนวคิดใหม่ ๆ เพื่อเป็นพื้นที่แลกเปลี่ยนเรียนรู้ร่วมกัน
              พร้อมกับสร้าง
            </p>

            <div className=' indent-10 '>
              ความร่วมมือจากบุคลากรหลากหลายภาคส่วนทั้งหน่วยงานภาครัฐ ภาคเอกชน
              ครู ผู้อำนวยการโรงเรียน ชุมชน ท้องถิ่น พ่อแม่ ผู้ปกครอง นักเรียน
              ตลอดจนความร่วมมือจากประชาชนคนรุ่นใหม่
              ที่อยากเข้ามามีส่วนร่วมในการพลิกโฉมการศึกษาไทย ผ่านช่องทาง Online
              และ On Air ตรงกับความต้องการที่หลากหลาย (On Demand)
              เพื่อให้เกิดการเข้าถึงกลุ่มเป้าหมาย ได้ทุกที่ ทุกเวลา
              และต่อยอดไปสู่การเปลี่ยนแปลงในสังคมวงกว้าง
              ด้วยการก้าวข้ามทุกปัญหาการศึกษาไทยกับแนวคิดแบบ
            </div>
            <p className='mx-2 mt-12  text-center text-4xl font-extrabold text-[#ffcc00] '>
              “Deschooling ห้องเรียนข้ามเส้น”
            </p>
          </div>
        </div>

        {/* <div className='flex flex-col space-y-8 px-24 pt-20 md:px-32'>
          <div className='flex flex-row items-center justify-center'>
            <div className=' text-justify text-lg leading-7  text-white md:text-2xl md:leading-10'>
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
              <p className='mx-2 mt-12  text-center text-4xl font-extrabold text-[#ffcc00] '>
                “Deschooling ห้องเรียนข้ามเส้น”
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default AboutDeschooling;
