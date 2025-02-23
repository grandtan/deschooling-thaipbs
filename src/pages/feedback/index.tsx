import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { IoDocumentText } from 'react-icons/io5';

import Layout from '@/components/layout/Layout';

const Feedback = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>รับฟังเสียงสะท้อน : deschooling</title>
        <meta
          name='keywords'
          content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className='flex h-full w-full flex-col border-t-4 border-yellow-400 bg-white pb-10'>
        <div className='bg-[#2b2a2a]'>
          <div className='mx-4 py-14 md:mx-24'>
            <div className='flex flex-col space-y-6 font-semibold'>
              <div className='flex justify-center space-x-4'>
                <IoDocumentText size={35} className='text-[#ffba00]' />
                <div className='text-3xl font-bold text-white'>
                  <div>รับฟังเสียงสะท้อน</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-4 flex flex-col space-x-0 space-y-4 pt-12 md:mx-24 md:flex-row md:space-x-4 md:space-y-0'>
          <div className='flex w-full flex-col justify-center  md:w-1/2'>
            <div className=' space-y-4 text-center text-2xl  font-extrabold text-[#2b2a2a] '>
              <div className='text-3xl underline underline-offset-4'>
                เพราะเราเชื่อว่า “การศึกษาไทยดีได้กว่าที่คิด”
              </div>

              <div>โครงการ “ห้องเรียนข้ามเส้น” หรือ ED Possible</div>

              <div>
                จึงได้เปิดพื้นที่รับฟังเสียงสะท้อนจากบุคลากรทางการศึกษาเพื่อการปรับเปลี่ยนนโยบาย
              </div>
            </div>
          </div>

          <div className='w-full space-y-2 text-2xl  font-extrabold  text-[#2b2a2a] md:w-1/2 '>
            <div>
              <Image
                alt='image'
                src='/images/idea/P1177223.JPG'
                width={650}
                height={500}
                style={{ borderRadius: '20px' }}
              />
            </div>
          </div>
        </div>

        <div className='mx-4 flex flex-col space-x-0 space-y-4 pt-12 md:mx-24 md:flex-row md:space-x-4 md:space-y-0'>
          <div className='w-full space-y-2 text-2xl font-extrabold  text-[#2b2a2a] md:w-1/2 '>
            <div>
              <Image
                alt='image'
                src='/images/idea/P1177074.JPG'
                width={650}
                height={500}
                style={{ borderRadius: '20px' }}
              />
            </div>
          </div>

          <div className='flex w-full flex-col justify-center  md:w-1/2'>
            <div className=' space-y-4 text-center text-2xl  font-extrabold text-[#2b2a2a] '>
              <div className='text-3xl underline underline-offset-4'>
                พร้อมด้วยกิจกรรม “เติมไอเดีย เติมไฟ ให้ครูเจ๋งได้ในห้องเรียน”
              </div>
              <div> ภายใต้ความตั้งใจของ</div>
              <div>องค์การกระจายเสียงและแพร่ภาพสาธารณะแห่งประเทศไทย</div>
            </div>
          </div>
        </div>

        <div className='mx-4 flex flex-col space-x-0 space-y-4 pt-14 md:mx-24 md:flex-row md:space-x-4 md:space-y-0'>
          <div className='flex w-full flex-col justify-center  '>
            <div className='space-y-2 text-xl text-[#2b2a2a] '>
              <div className='indent-10'>
                โดยกิจกรรมนี้เราเน้นให้เกิดความหลากหลายในการรับฟังเสียงสะท้อนด้วยตัวแทนของครูจากสถานศึกษาต่าง
                ๆ รวมถึงผู้บริหารสถานศึกษา เพื่อให้เกิดการรับฟังปัญหา
                และสร้างไอเดียใหม่ ๆ หลายมุมมอง
                และหลายมิติเพื่อนำไปสู่การปลดล็อกปัญหาการศึกษาแง่มุมต่าง ๆ
                สู่การขับเคลื่อนทางนโยบายทางการศึกษา
                ซึ่งเป็นต้นทางสำคัญของการการเปลี่ยนแปลงการศึกษาไทยให้ดีขึ้นได้
              </div>

              <div className='pt-4 indent-10 font-semibold underline underline-offset-4'>
                ข้อเสนอเรื่องหลักสูตร
              </div>

              <div className='indent-10'>
                โดยกิจกรรมนี้เราเน้นให้เกิดความหลากหลายในการรับฟังเสียงสะท้อนด้วยตัวแทนของครูจากสถานศึกษาต่าง
                ๆ รวมถึงผู้บริหารสถานศึกษา เพื่อให้เกิดการรับฟังปัญหา
                และสร้างไอเดียใหม่ ๆ หลายมุมมอง
                และหลายมิติเพื่อนำไปสู่การปลดล็อกปัญหาการศึกษาแง่มุมต่าง ๆ
                สู่การขับเคลื่อนทางนโยบายทางการศึกษา
                ซึ่งเป็นต้นทางสำคัญของการการเปลี่ยนแปลงการศึกษาไทยให้ดีขึ้นได้
              </div>

              <ul className='list-outside list-disc space-y-2 pl-6 md:pl-20'>
                <li>
                  หลักสูตรสอดคล้องกับบริบทสถานศึกษา
                  เพื่อให้เรียนในสิ่งที่เหมาะสมและนำไปสู่การประกอบอาชีพในอนาคต
                </li>
                <li>
                  หลักสูตรควรได้รับการประกาศอย่างเป็นทางการจากต้นสังกัด
                  หรือกระทรวงศึกษาธิการมีช่องทางในการส่งหลักสูตรสถานศึกษาและประกาศใช้อย่างเป็นสาธารณะ
                </li>
                <li>
                  หลักสูตรต้องถูกลงรายละเอียดในแต่ละวิชาให้เชื่อมโยงกับเอกลักษณ์ของท้องถิ่นและประเทศเพื่อนบ้าน
                  เช่น การอ่านที่จะต้องสอดคล้องกับวัฒนธรรมท้องถิ่นอย่างไร
                </li>
                <li>หลักสูตรจะต้องมีระบบติดตามผลลัพธ์การนำไปใช้</li>
                <li>
                  หลักสูตรต้องเกิดการส่งต่อการใช้ในแต่ละระดับ
                  เกิดการใช้จริงอย่างต่อเนื่อง
                </li>
                <li>
                  หลักสูตรสามารถตอบโจทย์การประเมินผลรายคนได้
                  ให้สามารถผ่านระดับชั้นได้
                </li>
                <li>หลักสูตรจะต้องสอดคล้องกับยุคสมัย และต้องนำไปใช้ได้จริง</li>
                <li>
                  หลักสูตรที่รองรับกับเด็กพิเศษ
                  เพื่อให้เขาสามารถจบการศึกษาภาคบังคับได้
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mx-4 flex flex-col  space-y-4 pt-14 md:mx-24 md:flex-row  md:space-y-0'>
          <div className='flex w-full flex-col items-center justify-center  md:w-1/2 '>
            <div>
              <Image
                alt='image'
                src='/images/idea/M63C3538.JPG'
                width={550}
                height={400}
                style={{ borderRadius: '20px' }}
              />
            </div>
          </div>

          <div className='flex w-full flex-col items-center justify-center md:w-1/2'>
            <div>
              <Image
                alt='image'
                src='/images/idea/M63C3428.JPG'
                width={550}
                height={400}
                style={{ borderRadius: '20px' }}
              />
            </div>
          </div>
        </div>

        <div className='mx-4 flex flex-col space-x-0 space-y-4 pt-6 md:mx-24 md:flex-row md:space-x-4 md:space-y-0'>
          <div className='flex w-full flex-col justify-center  '>
            <div className='space-y-2 text-xl text-[#2b2a2a] '>
              <div className='pt-4 indent-10 font-semibold underline underline-offset-4'>
                ข้อเสนอเรื่องอัตรากำลังครู
              </div>

              <ul className='list-outside list-disc space-y-2 pl-6 md:pl-20'>
                <li>
                  ปรับแนวคิดเรื่องการจัดสรรจำนวนอัตรากำลังครูให้เหมาะสมกับโรงเรียนให้มีความยืดหยุ่น
                </li>
                <li>มีเจ้าหน้าที่การเงิน พัสดุ บัญชี โดยเฉพาะ</li>
              </ul>

              <div className='pt-4 indent-10 font-semibold underline underline-offset-4'>
                ข้อเสนอหลักสูตรสำหรับเด็กเรียนร่วม จากการศึกษาพิเศษ
              </div>

              <ul className='list-outside list-disc space-y-2 pl-6 md:pl-20'>
                <li>เน้นหลักสูตรการอาชีพที่เน้นการสร้างรายได้</li>
                <li>กำหนดเกณฑ์ให้เหมาะสมกับเด็กรายบุคคล</li>
                <li>มีการคัดกรองเด็กจากแพทย์ผู้เชี่ยวชาญอย่างต่อเนื่อง</li>
              </ul>

              <div className='pt-4 indent-10 font-semibold underline underline-offset-4'>
                ข้อเสนอเรื่องเทียบโอน
              </div>

              <ul className='list-outside list-disc space-y-2 pl-6 md:pl-20'>
                <li>
                  เด็กจะต้องสามารถเทียบโอนวิชา จากการไปมีประสบการณ์นอกห้องเรียน
                  เช่น การซ่อมรถมอเตอร์ไซค์ การไปช่วยเกี่ยวข้าว เป็นต้น
                  ซึ่งอาจจะเกี่ยวข้องกับการศึกษาตามอัธยาศัย (กศน.)
                </li>
                <li>
                  มีการวัดผลเด็กจากผลลัพธ์ โดยที่อาจจะไม่ต้องใช้เวลาในห้องเรียน
                </li>
              </ul>

              <div className='pt-4 indent-10 font-semibold underline underline-offset-4'>
                ข้อเสนอเรื่องระบบดูแลช่วยเหลือ
              </div>

              <ul className='list-outside list-disc space-y-2 pl-6 md:pl-20'>
                <li>
                  มีการสร้างระบบดูแลช่วยเหลืออย่างเข้มแข็งในโรงเรียน
                  ให้เกิดเป็นนิเวศการดูแลเด็กครบวงจร
                </li>
                <li>
                  ครูแนะแนวควรมีในระดับชั้นป.4-6 เพื่อที่จะส่งต่อเด็กต่อเนื่อง
                </li>
              </ul>

              <div className='pt-4 indent-10 font-semibold underline underline-offset-4'>
                ข้อเสนอต่อระบบผลิตครู
              </div>

              <ul className='list-outside list-disc space-y-2 pl-6 md:pl-20'>
                <li>ผลิตครูให้ตรงกับความต้องการของแต่ละโรงเรียน</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mx-4 flex flex-col  space-y-4 pt-14 md:mx-24 md:flex-row  md:space-y-0'>
          <div className='flex w-full flex-col items-center justify-center  md:w-1/2 '>
            <div>
              <Image
                alt='image'
                src='/images/idea/M63C3465.JPG'
                width={550}
                height={400}
                style={{ borderRadius: '20px' }}
              />
            </div>
          </div>

          <div className='flex w-full flex-col items-center justify-center md:w-1/2'>
            <div>
              <Image
                alt='image'
                src='/images/idea/Screen Shot6.png'
                width={550}
                height={400}
                style={{ borderRadius: '20px' }}
              />
            </div>
          </div>
        </div>

        <div className='mx-4 flex flex-col space-x-0 space-y-4 pt-6 md:mx-24 md:flex-row md:space-x-4 md:space-y-0'>
          <div className='flex w-full flex-col justify-center  '>
            <div className='space-y-2 text-xl text-[#2b2a2a] '>
              <div className='pt-4 indent-10 font-semibold underline underline-offset-4'>
                ข้อเสนอต่อการพัฒนาสื่อเนื้อหาที่มีประโยชน์ต่อบุคคลากรทางการศึกษา
              </div>

              <div className='indent-16 font-semibold'>ประเภทเนื้อหา</div>

              <ul className='list-outside list-disc space-y-2 pl-6 md:pl-20'>
                <li>
                  เนื้อหาส่งเสริมเรื่องเทรนด์การศึกษา/การเรียนรู้พื้นฐานที่มีประโยชน์ต่อชีวิต
                </li>

                <li>เนื้อหาส่งเสริมการเรียนรู้ตลอดชีวิต เช่น แนวอาชีพ</li>

                <li>
                  เนื้อหาต้องตอบโจทย์คนทุกวัย เด็กเรียนรู้ได้
                  ผู้ใหญ่ก็เรียนรู้ได้
                </li>

                <li>
                  เนื้อหาเกี่ยวกับการออกแบบการสอนที่ช่วยคุณครูให้ออกแบบเนื้อหาที่ตอบโจทย์ชีวิต
                </li>

                <li>
                  เนื้อหาแนวเติมพลังให้คุณครู เติมพลังใจ สร้างแพชชั่นในการทำงาน
                </li>

                <li>
                  เนื้อหาที่เชื่อมโยงกับชีวิตคน ชาวบ้านทั่วไป เช่น สอนการทำอาหาร
                  สอนการซ่อมต่างๆ
                </li>

                <li>
                  เนื้อหาแนวสัมภาษณ์เด็กๆ ติดตามชีวิตเด็กๆ
                  ที่ผ่านการเรียนรู้จากโรงเรียนที่พัฒนาแล้ว
                </li>

                <li>
                  เนื้อหาแนวฉายแสง เสริมพลังโรงเรียนเล็กๆ
                  ที่สร้างการเปลี่ยนแปลงได้จริง
                </li>

                <li>
                  เนื้อหาตามรอยวรรณคดี/เรื่องเก่าๆ
                  เพื่อเพิ่มเติมสีสันให้เรื่องราว เป็นการตามหาเรื่องราวจริงๆ
                </li>

                <li>
                  เนื้อหาทักษะที่เกี่ยวข้องกับชีวิตประจำวันจากข่าว เช่น
                  การเสียชีวิตบนรถบัส เด็กควรจะต้องเอาตัวรอดอย่างไร
                </li>

                <li>
                  เนื้อหานำเสนอแนวคิดของเด็กในการจัดการแก้ปัญหาในชีวิตประจำวัน
                </li>

                <li>
                  เนื้อหาสร้างแรงบันดาลใจให้แก่ผู้ประกอบการ
                  ติดตามชีวิตเด็กนอกระบบ
                  โดยมีการเชื่อมโยงกับผู้ประกอบการเข้ามาสนับสนุนการเรียนรู้ของเด็ก
                  (ข้อควรระวัง : ไม่ชักจูงมากจนเกินไป)
                </li>

                <li>
                  เนื้อหาติดตาม “นักเรียนเจ๋ง” เช่น เด็กคนนี้เก่งตกปลา เก่งกีฬา
                  เพื่อให้เห็นว่าการเรียนรู้อยู่รอบตัว
                </li>

                <li>
                  เนื้อหาเพื่อ “ครูฝึกสอน” การเตรียมตัว การฝึกทักษะต่างๆ
                  เพื่อสร้างแรงบันดาลใจให้ครูฝึกสอน
                </li>

                <li>
                  เนื้อหาแนว “คุณแม่รุ่นใหม่” ที่สอนลูกให้เป็น
                  ไม่ใช่ต้องฝากลูกไว้กลับโรงเรียน ลูกก็ได้เรียนและได้เล่นไปด้วย
                </li>
              </ul>

              <div className='pt-4 indent-10 font-semibold underline underline-offset-4'>
                ประเภทกิจกรรม
              </div>

              <ul className='list-outside list-disc space-y-2 pl-6 md:pl-20'>
                <li>
                  มีกิจกรรมการจัดการแข่งขัน หรือ มอบรางวัลให้แก่ครู จากการดู
                  ALTV
                </li>

                <li>
                  Event รวมตัวครูมาเจอกัน (ทั้งครูที่ออกรายกาย
                  และไม่ได้ออกรายการ) เพื่อเสริมพลังในการกลับไปทำในห้องเรียน
                  เช่น มาแชร์ไอเดียกัน สาธิตการสอนในวิชาต่างๆ
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mx-4 flex flex-col  space-y-4 pt-14 md:mx-24 md:flex-row  md:space-y-0'>
          <div className='flex w-full flex-col items-center justify-center  md:w-1/2 '>
            <div>
              <Image
                alt='image'
                src='/images/idea/P1177115.JPG'
                width={550}
                height={400}
                style={{ borderRadius: '20px' }}
              />
            </div>
          </div>

          <div className='flex w-full flex-col items-center justify-center md:w-1/2'>
            <div>
              <Image
                alt='image'
                src='/images/idea/P1177169.JPG'
                width={550}
                height={400}
                style={{ borderRadius: '20px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Feedback;
