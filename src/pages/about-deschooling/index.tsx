import React from 'react';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import { RiQuestionnaireFill } from 'react-icons/ri';
import Image from 'next/image';
import { LiaSchoolSolid } from 'react-icons/lia';
import { LuBaby } from 'react-icons/lu';
import { BsFillCalendarHeartFill } from 'react-icons/bs';

const AboutDeschooling = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>ความหมาย : Deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className=' flex h-screen w-full flex-row p-10 '>
        <div className='flex w-1/2 flex-col items-center justify-center  px-6'>
          <Image
            src='/images/bg-about-des.png'
            width={1500}
            height={1000}
            alt='Picture of the author'
          />
        </div>

        <div className='flex  w-1/2 flex-col items-center justify-center rounded-b-[20%] rounded-t-[20%] border-2 border-dotted border-[#ffba00] px-14'>
          <div className=' mb-8 flex flex-row space-x-2'>
            <div className='text-3xl text-[#ffba00]'>
              ความเป็นมาของ Deschooling
            </div>
          </div>
          <div className='text-center  text-lg leading-10 text-white'>
            เราเชื่อว่า “ทุกคนเป็นส่วนหนึ่งในการเปลี่ยนแปลงการศึกษาไทยได้
            <span className='mx-2 font-mono text-xl font-extrabold text-[#f05223]'>
              Thai PBS
            </span>
            จึงมีความ ตั้งใจที่อยากจะขับเคลื่อนการศึกษาไทย
            ด้วยการข้ามข้อจำกัดเดิม ๆ ผ่านการนำเสนอ นวัตกรรม
            วิธีการและแนวคิดใหม่ ๆ เพื่อเป็นพื้นที่แลกเปลี่ยนเรียนรู้ร่วมกัน
            พร้อมกับสร้างความร่วมมือจากบุคลากรหลากหลายภาคส่วนทั้งจากการหน่วยงานภาครัฐ
            ภาคเอกชน ครู ผู้อำนวยการโรงเรียน ชุมชน ท้องถิ่น พ่อแม่ ผู้ปกครอง
            นักเรียน ตลอดจนความร่วมมือจากประชาชนคนรุ่นใหม่
            ที่อยากเข้ามามีส่วนร่วมในการพลิกโฉมการศึกษาไทย ผ่านช่องทาง Online
            และ On Air ตรงกับความต้องการที่หลากหลาย (On Demand)
            เพื่อให้เกิดการเข้าถึงกลุ่มเป้าหมาย ได้ทุกที่ ทุกเวลา
            และต่อยอดไปสู่การเปลี่ยนแปลงในสังคมวงกว้าง
            ด้วยการก้าวข้ามทุกปัญหาการศึกษาไทย กับหลักคิดแบบ
            <span className='mx-2 font-mono text-xl font-extrabold text-[#ffba00]'>
              “Deschooling ห้องเรียนข้ามเส้น”
            </span>
          </div>
        </div>
      </div>

      {/* <div className=' h-full'>
        <div className='relative'>
          <div className='absolute left-[30%] top-[8%] mx-24 flex space-x-4 font-semibold text-[#ffba00]'>
            <LiaSchoolSolid size={35} />
            <div className=' text-3xl'>ความเป็นมาของ Deschooling</div>
          </div>

          <div className='absolute left-[35%] top-[34%] w-[40%] text-start text-sm leading-8 lg:text-lg'>
            <p className='indent-8'>
              เพราะเราเชื่อว่า
              “ทุกคนเป็นส่วนหนึ่งในการเปลี่ยนแปลงการศึกษาไทยได้” จนเกิดเป็น
              <span className='mx-2 text-xl font-extrabold text-[#ffba00]'>
                Deschooling
              </span>
              Project โครงการภายใต้ความมุ่งมั่นตั้งใจของ
            </p>
            <p className=' text-center '>
              องค์การกระจายเสียงและแพร่ภาพสาธารณะแห่งประเทศไทย (
              <span className='text-xl font-extrabold text-[#f05223]'>
                Thai PBS
              </span>
              )
            </p>
            <p>
              ที่อยากจะขับเคลื่อนการศึกษาไทย ด้วยการข้ามเส้นข้อจำกัดเดิม ๆ
              ผ่านการนำเสนอ นวัตกรรม วิธีการและแนวคิดใหม่ ๆ
              เพื่อเป็นพื้นที่แลกเปลี่ยนเรียนรู้ร่วมกัน
              พร้อมกับสร้างความร่วมมือที่ไม่ได้จำกัดแค่บุคลากรทางการศึกษาเท่านั้น
              แต่ยังรวมถึง ชุมชน หน่วยงานท้องถิ่น ภาครัฐ พ่อแม่ ผู้ปกครอง ครู
              ผู้อำนวยการโรงเรียน นักเรียน ตลอดจนความร่วมมือจากคนรุ่นใหม่
              ที่อยากเข้ามามีส่วนร่วมในการพลิกโฉมการศึกษาไทย ผ่านช่องทาง Online
              และ On Air ตรงกับความต้องการที่หลากหลาย (On Demand)
              เพื่อให้เกิดการเข้าถึงกลุ่มเป้าหมาย ได้ทุกที่ ทุกเวลา
              และต่อยอดไปสู่การเปลี่ยนแปลงในสังคมวงกว้างต่อไป
            </p>
          </div>
          <Image

            src='/images/bg-what-deschooling.png'
            alt='Descholling คืออะไร'
            width='1500'
            height='400'
          />
        </div>
      </div> */}
    </Layout>
  );
};

export default AboutDeschooling;
