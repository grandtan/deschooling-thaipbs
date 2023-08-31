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

      <div className='h-screen w-full'>
        <div className='flex flex-row items-center justify-center pt-20'>
          <div className=' px-4 md:max-w-5xl md:px-2 md:text-2xl lg:px-0 lg:leading-10'>
            <div className='shrink-0 text-white'>
              <div className=' text-center'>
                <div className=' indent-10 '>
                  เราเชื่อว่า "ทุกคนเป็นส่วนหนึ่งในการเปลี่ยนแปลงการศึกษาไทยได้"
                  <span className='mx-2 text-[#f05223]'>Thai PBS</span>
                  จึงมีความตั้งใจ
                </div>
                <div>
                  ที่อยากจะขับเคลื่อนการศึกษาไทย ด้วยการข้ามข้อจำกัดเดิม ๆ
                  ผ่านการนำเสนอ นวัตกรรม วิธีการ
                </div>
                <div>
                  และแนวคิดใหม่ ๆ เพื่อเป็นพื้นที่แลกเปลี่ยนเรียนรู้ร่วมกัน
                  พร้อมกับสร้าง
                </div>
              </div>

              <div className=' mt-2 text-center'>
                <div className='indent-10'>
                  ความร่วมมือจากบุคลากรหลากหลายภาคส่วนทั้งหน่วยงานภาครัฐ
                  ภาคเอกชน ผู้อำนวยการโรงเรียน
                </div>
                <div>
                  ครู ชุมชน ท้องถิ่น พ่อแม่ ผู้ปกครอง นักเรียน
                  ตลอดจนความร่วมมือจากประชาชนคนรุ่นใหม่
                </div>
                <div>
                  ที่อยากเข้ามามีส่วนร่วมในการพลิกโฉมการศึกษาไทย ผ่านช่องทาง
                  Online และ On Air
                  <div>
                    ตรงกับความต้องการที่หลากหลาย (On Demand)
                    เพื่อให้เกิดการเข้าถึงกลุ่มเป้าหมาย ได้ทุกที่ทุกเวลา
                    <div>
                      และต่อยอดไปสู่ การเปลี่ยนแปลงในสังคมวงกว้าง
                      ด้วยการก้าวข้ามทุกปัญหาการศึกษาไทยกับแนวคิดแบบ
                    </div>
                  </div>
                </div>
              </div>

              <div className='mx-2 mt-12 text-center text-4xl font-extrabold text-[#ffcc00]'>
                “Deschooling ห้องเรียนข้ามเส้น”
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutDeschooling;
