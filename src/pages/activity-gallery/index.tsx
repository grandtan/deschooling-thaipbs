import React from 'react';
import Layout from '@/components/layout/Layout';
import { BsFillCalendarHeartFill } from 'react-icons/bs';
import { Image } from 'antd';
import Link from 'next/link';

const ActivityGallery = () => {
  const governmentActivity = [
    '/images/government-activity/Government_1.jpg',
    '/images/government-activity/Government_2.jpg',
    '/images/government-activity/Government_3.jpg',
    '/images/government-activity/Government_4.jpg',
    '/images/government-activity/Government_5.jpg',
  ];

  const schoolActivity = [
    '/images/school-activity/School_1.jpg',
    '/images/school-activity/School_2.jpg',
    '/images/school-activity/School_3.jpg',
    '/images/school-activity/School_4.jpg',
    '/images/school-activity/School_5.jpg',
  ];

  return (
    <Layout backgroundImage='/images/bg-master.png'>
      <div className='mx-24 py-10'>
        <div className=' flex flex-row items-center space-x-4 font-semibold text-[#ffba00]'>
          <BsFillCalendarHeartFill size={35} />
          <div className=' text-3xl'>ภาพกิจกรรม</div>
        </div>

        <div className='  grid h-screen grid-cols-1 place-content-center gap-4 md:grid-cols-2'>
          <div className=' grid grid-cols-4 gap-1 rounded-t-xl rounded-bl-xl  bg-white p-1 md:grid-cols-4'>
            <div className='col-span-4 rounded-t-xl rounded-bl-xl bg-[#ffba00] p-4 text-xl'>
              เวทีเสวนา “ชวนพรรคร่วมคิด ฟื้นชีวิตเรียนรู้ใหม่ หนุนเด็กไทย
              ก้าวทันโลก”
            </div>
            <Image.PreviewGroup>
              {governmentActivity.map((image, index) => (
                <div
                  key={index}
                  className={index === 0 ? 'col-span-4 rounded-xl ' : ''}
                >
                  <Image
                    src={image}
                    sizes='50%'
                    className='rounded-xl '
                    alt='Government Activity'
                  />
                </div>
              ))}
            </Image.PreviewGroup>
            <Link
              className='col-span-4 rounded-t-xl rounded-bl-xl bg-[#ffd666] p-2 text-center '
              href='/activity-gallery/government'
            >
              รายละเอียดเพิ่มเติม
            </Link>
          </div>

          <div className=' grid grid-cols-4 gap-1 rounded-t-xl rounded-bl-xl  bg-white p-1 md:grid-cols-4'>
            <div className='col-span-4 rounded-t-xl rounded-bl-xl bg-[#ffba00] p-4 text-xl'>
              เวทีเสวนา “โรงเรียนเล็ก โรงเรียนใหญ่แก้ปัญหาอย่างไรให้ตรงจุด”
            </div>
            <Image.PreviewGroup>
              {schoolActivity.map((image, index) => (
                <div
                  key={index}
                  className={index === 0 ? 'col-span-4 rounded-xl' : ''}
                >
                  <Image
                    src={image}
                    sizes='50%'
                    className='rounded-xl'
                    alt='School Activity'
                  />
                </div>
              ))}
            </Image.PreviewGroup>
            <Link
              className='col-span-4 rounded-t-xl rounded-bl-xl bg-[#ffd666] p-2 text-center'
              href='/activity-gallery/school'
            >
              รายละเอียดเพิ่มเติม
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ActivityGallery;
