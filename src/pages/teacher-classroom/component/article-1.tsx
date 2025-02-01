import Image from 'next/image';
import React from 'react';
import { IoDocumentText } from 'react-icons/io5';

const ArticleOne = () => {
  return (
    <div className='flex h-full w-full flex-col border-t-4 border-yellow-400 bg-white pb-10'>
      <div className='bg-[#2b2a2a]'>
        <div className='mx-4 py-14 md:mx-24'>
          <div className='flex flex-col space-y-6 font-semibold'>
            <div className='flex justify-center space-x-4'>
              <IoDocumentText size={35} className='text-[#ffba00]' />
              <div className='text-3xl font-bold text-white'>
                <div>บทความ : โครงการ “เติมพลังครู สู่ห้องเรียน”</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-4 flex flex-col space-x-0 space-y-4 pt-12 md:mx-24 md:flex-row md:space-x-4 md:space-y-0'>
        <div className='flex w-full flex-col justify-center  md:w-1/2'>
          <div className=' space-y-4 text-center text-2xl  font-extrabold text-[#2b2a2a] '>
            <div className='text-3xl underline underline-offset-4'>
              โครงการ “เติมพลังครู สู่ห้องเรียน”
            </div>
            <div>ภายใต้ โครงการ “ห้องเรียนข้ามเส้น” Deschooling </div>
            <div> องค์การกระจายเสียงและแพร่ภาพสาธารณะแห่งประเทศไทย</div>
          </div>
        </div>

        <div className='w-full space-y-2 text-2xl  font-extrabold  text-[#2b2a2a] md:w-1/2 '>
          <div>
            <Image
              alt='image'
              src='/images/1/P1166934.JPG'
              width={650}
              height={500}
              style={{ borderRadius: '20px' }}
            />
          </div>
        </div>
      </div>

      <div className='mx-4 flex flex-col space-x-0 space-y-4 pt-14 md:mx-24 md:flex-row md:space-x-4 md:space-y-0'>
        <div className='flex w-full flex-col justify-center  '>
          <div className='space-y-2 text-xl text-[#2b2a2a] '>
            <div className='indent-10'>
              เมื่อพูดถึงคำว่า การศึกษาไทย
              หลายคนอาจจะมีมุมมองต่อประเด็นนี้ที่แตกต่างกัน
              ทั้งเรื่องการตั้งคำถามว่าทำไมเวลามีการจัดอันดับเรื่องคุณภาพเรากลับอยู่รั้งท้าย
              หรือการตั้งคำถามกับหลักสูตรว่าทำไมไม่สอดคล้องกับความเปลี่ยนแปลงของโลก
              ถ้าเรามองอีกมุมที่ลึกลงไปถึงสถานการณ์ภาพรวมของการศึกษาในประเทศไทย
              ที่เชื่อมโยงทั้งในระบบโครงสร้างทางนโยบายจากส่วนกลางของภาครัฐบาลที่มีค่อนข้างเปลี่ยนแปลงบ่อยตามผู้บริหารกระทรวงฯ
              ไปจนถึงรูปแบบการจัดสรรงบประมาณที่ยังเน้นการนับจำนวนรายหัวนักเรียน
              ส่งผลให้เกิดความเหลื่อมล้ำของการทำงานระหว่างโรงเรียนขนาดเล็กและโรงเรียนขนาดใหญ่
              บุคลากรที่เราเรียกว่า พ่อพิมพ์ แม่พิมพ์ ของชาติ
              ต้องเผชิญกับข้อจำกัดและอุปสรรคต่าง ๆ
            </div>
          </div>
        </div>
      </div>

      <div className='mx-4 flex flex-col space-x-0 space-y-4 pt-14 md:mx-24 md:flex-row md:space-x-4 md:space-y-0'>
        <div className='flex w-full flex-col justify-center  md:w-1/2 '>
          <div>
            <Image
              alt='image'
              src='/images/1/P1155764.JPG'
              width={650}
              height={500}
              style={{ borderRadius: '20px' }}
            />
          </div>
        </div>

        <div className='flex w-full flex-col justify-center  md:w-1/2'>
          <div>
            <Image
              alt='image'
              src='/images/2/P1166948.JPG'
              width={650}
              height={500}
              style={{ borderRadius: '20px' }}
            />
          </div>
        </div>
      </div>

      <div className='mx-4 flex flex-col space-x-0 space-y-6 pt-14 md:mx-24 md:flex-row md:space-x-4 md:space-y-0'>
        <div className='flex w-full flex-col justify-center'>
          <div className='space-y-4 text-xl text-[#2b2a2a]'>
            <div className='indent-10'>
              ในเวลาเดียวกันครูจำนวนมากหนีไม่พ้นปัญหาวัฒนธรรมองค์กร
              วัฒนธรรมการทำงานเชิงอำนาจที่เน้นการสั่งการ
              มากกว่าการให้อิสระทางความคิดหรือการตัดสินใจ
              โดยเฉพาะอย่างยิ่งครูบรรจุใหม่อาจจะต้องใช้เวลาปรับตัวเป็นเวลานานพอสมควร
              เพื่อให้สามารถอยู่ในสถานศึกษานั้น ๆ ได้
              อาจทำให้ครูหลายคนเกิดเป็นภาวะหมดไฟในการทำงาน
              รู้สึกกดดันและเผชิญความเครียดจากสภาพแวดล้อมในการทำงาน
            </div>

            <div className='indent-10'>
              อีกทั้ง สภาพสังคมที่เปลี่ยนไป ส่งผลให้เกิดปัญหาด้านความเป็นอยู่
              ค่าครองชีพที่สูงขึ้นซึ่งอาจจะส่งผลต่อประเด็นด้านคุณภาพชีวิต
              ค่าใช้จ่ายที่ค่อนข้างสูง จนเกิดเป็นปัญหาด้านเศรษฐกิจ
              ปัญหาหนี้สินของข้าราชการครู นอกจากนี้ ปัญหาเรื่องผู้เรียน
              ที่มีความหลากหลาย ทั้งเรื่องการเรียนรู้ที่แตกต่างกัน
              ปัญหาเรื่องเศรษฐานะ ความยากจนและความไม่พร้อมด้วยปัจจัยต่าง ๆ
              ของผู้เรียน ในฐานะของคนเป็นครู
              ก็ยากที่จะนิ่งดูดายและเข้าไปมีบทบาทและเป็นส่วนหนึ่งของการแก้ไขปัญหาผู้เรียนด้วยเช่นกัน
            </div>

            <div className='indent-10'>
              ในขณะเดียวกัน “ครู”
              คือบุคลากรสำคัญที่จำเป็นอย่างยิ่งต่อการช่วยพัฒนาทรัพยากรของชาติให้เป็นคนที่มีคุณภาพได้
              แต่หลายปัจจัย
              สถานการณ์และสภาพแวดล้อมดูจะไม่เอื้ออำนวยให้ครูในโรงเรียนได้แสดงศักยภาพอย่างเต็มที่หากยังมีข้อจำกัดเรื่องของสภาพจิตใจ
              สุขภาพจิตที่ดีจากภายใน
            </div>

            <div className='indent-10'>
              ปฏิเสธไม่ได้ว่า
              ครูคือวิชาชีพที่สังคมคาดหวังให้เป็นบุคคลสำคัญในการบ่มเพาะ ขัดเกลา
              สร้างสรรค์และพัฒนามนุษย์ ให้เกิดการเรียนรู้ทั้งด้านอารมณ์ สังคม
              และเนื้อหา วิชาการต่าง ๆ ฉะนั้น
              ครูที่พร้อมจะไปสู่การพัฒนามนุษย์ได้
              ต้องมีความพร้อมจากภายในจิตใจของตนเองก่อนเพื่อเป็นต้นแบบที่ดีให้กับผู้เรียนได้
            </div>
          </div>
        </div>
      </div>

      <div className='mx-4 flex flex-col space-x-0 space-y-6 pt-14 md:mx-24 md:flex-row md:space-x-4 md:space-y-0'>
        <div className='flex w-full flex-col justify-center bg-[#2b2a2a]'>
          <div className='p-3 text-center text-2xl font-extrabold text-white'>
            เติมพลังครูรุ่นที่ 1
          </div>
        </div>
      </div>

      <div className='mx-4 flex flex-col space-x-0 space-y-4 pt-6 md:mx-24 md:flex-row md:space-x-4 md:space-y-0'>
        <div className='flex w-full flex-col justify-center  md:w-1/2 '>
          <div>
            <Image
              alt='image'
              src='/images/1/DSC03152.JPG'
              width={650}
              height={500}
              style={{ borderRadius: '20px' }}
            />
          </div>
        </div>

        <div className='flex w-full flex-col justify-center  md:w-1/2'>
          <div>
            <Image
              alt='image'
              src='/images/1/DSC03224.JPG'
              width={650}
              height={500}
              style={{ borderRadius: '20px' }}
            />
          </div>
        </div>
      </div>

      <div className='mx-4 flex flex-col space-x-0 space-y-4 pt-6 md:mx-24 md:flex-row md:space-x-4 md:space-y-0'>
        <div className='flex w-full flex-col justify-center  md:w-1/2 '>
          <div>
            <Image
              alt='image'
              src='/images/1/DSC03248.JPG'
              width={650}
              height={500}
              style={{ borderRadius: '20px' }}
            />
          </div>
        </div>

        <div className='flex w-full flex-col justify-center  md:w-1/2'>
          <div>
            <Image
              alt='image'
              src='/images/1/P1155201.JPG'
              width={650}
              height={500}
              style={{ borderRadius: '20px' }}
            />
          </div>
        </div>
      </div>

      <div className='mx-4 flex flex-col space-x-0 space-y-6 pt-14 md:mx-24 md:flex-row md:space-x-4 md:space-y-0'>
        <div className='flex w-full flex-col justify-center'>
          <div className='space-y-4 text-xl text-[#2b2a2a]'>
            <div className='indent-10'>
              โครงการ “ห้องเรียนข้ามเส้น” (Deschooling)
              เล็งเห็นความสำคัญของการพัฒนาครู จากพื้นฐานความคิดที่ว่า
              “เมื่อครูมีความสุขจะส่งผลไปถึงผู้เรียนเช่นกัน”
              แต่กว่าจะได้มาซึ่งความสุขซึ่งดูเป็นนามธรรม
              ต้องเริ่มต้นจากปัญญาภายใน ซึ่งกระบวนการ “จิตตปัญญาศึกษา” และ
              Transformative Learning ที่เป็นทั้งแนวคิดและแนวปฏิบัติ
              ที่มีจุดมุ่งหมายให้เกิดการเรียนรู้เพื่อการเปลี่ยนแปลงในระดับต่าง ๆ
              ได้แก่ การเปลี่ยนแปลงภายในตน การเปลี่ยนแปลงภายในองค์กร
              และการเปลี่ยนแปลงภายในสังคม โดยที่การเปลี่ยนแปลงดังกล่าว
              ไม่ใช่เป็นการเปลี่ยนแปลงเล็ก ๆ น้อย ๆ
              แต่เป็นการเปลี่ยนแปลงขั้นพื้นฐานอย่างลึกซึ้ง
              โดยจิตตปัญญาศึกษาเป็นแนวคิดและแนวปฏิบัติ
              ส่วนการเรียนรู้สู่การเปลี่ยนแปลงเป็นเป้าหมาย
              โดยเป็นการขยายจิตสำนึกโดยผ่านกระบวนการเปลี่ยนมุมมองของเรื่องราวต่าง
              ๆ ในการสัมผัสได้ถึงความรู้สึกใต้จิตสำนึก เพื่อพัฒนามนุษย์
              ซึ่งกระบวนการต่าง ๆ นี้ จัดเป็นการศึกษาสำหรับศตวรรษที่ 21
              ที่เป็นยุคแห่งการเปลี่ยนแปลง เพื่อโยงจิตตปัญญาศึกษาสู่
              transformative education เพื่อพัฒนามนุษย์อย่างตรงจุด
            </div>
          </div>
        </div>
      </div>

      <div className='mx-4 flex flex-col space-x-0 space-y-6 pt-14 md:mx-24 md:flex-row md:space-x-4 md:space-y-0'>
        <div className='flex w-full flex-col justify-center bg-[#2b2a2a]'>
          <div className='p-3 text-center text-2xl font-extrabold text-white'>
            เติมพลังครูรุ่นที่ 2
          </div>
        </div>
      </div>

      <div className='mx-4 flex flex-col space-x-0 space-y-4 pt-6 md:mx-24 md:flex-row md:space-x-4 md:space-y-0'>
        <div className='flex w-full flex-col justify-center  md:w-1/2 '>
          <div>
            <Image
              alt='image'
              src='/images/2/P1155908.JPG'
              width={650}
              height={500}
              style={{ borderRadius: '20px' }}
            />
          </div>
        </div>

        <div className='flex w-full flex-col justify-center  md:w-1/2'>
          <div>
            <Image
              alt='image'
              src='/images/2/P1166255.JPG'
              width={650}
              height={500}
              style={{ borderRadius: '20px' }}
            />
          </div>
        </div>
      </div>

      <div className='mx-4 flex flex-col space-x-0 space-y-4 pt-6 md:mx-24 md:flex-row md:space-x-4 md:space-y-0'>
        <div className='flex w-full flex-col justify-center  md:w-1/2 '>
          <div>
            <Image
              alt='image'
              src='/images/2/P1166651.JPG'
              width={650}
              height={500}
              style={{ borderRadius: '20px' }}
            />
          </div>
        </div>

        <div className='flex w-full flex-col justify-center  md:w-1/2'>
          <div>
            <Image
              alt='image'
              src='/images/2/P1166852.JPG'
              width={650}
              height={500}
              style={{ borderRadius: '20px' }}
            />
          </div>
        </div>
      </div>

      <div className='mx-4 flex flex-col space-x-0 space-y-6 pt-14 md:mx-24 md:flex-row md:space-x-4 md:space-y-0'>
        <div className='flex w-full flex-col justify-center'>
          <div className='space-y-4 text-xl text-[#2b2a2a]'>
            <div className='indent-10'>
              โครงการ “ห้องเรียนข้ามเส้น” (Deschooling)
              เราเชื่อว่าครูทุกท่านที่ได้เข้าร่วม โครงการ “เติมพลังครู
              สู่ห้องเรียน” จะได้กลับมาทำความเข้าใจตนเอง
              มารับฟังเสียงความต้องการที่แท้จริง
              มาทบทวนความรู้สึกนึกคิดที่อยู่ลึกลงไป
              ส่งต่อพลังบวกจนสร้างแรงบันดาลใจให้ครูรู้สึกมีกำลังใจและอยากพัฒนางานของตนให้ดียิ่งขึ้น
              ซึ่งนั่นก็คือการพัฒนาผู้เรียนในวันนี้ให้เขาได้เติบโตเป็น
              “คนคุณภาพ” ต่อไป
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleOne;
