import React from 'react';
import Layout from '@/components/layout/Layout';
import { BsFillCalendarHeartFill } from 'react-icons/bs';
import { Image } from 'antd';
import Link from 'next/link';

const ActivityGallery = () => {
  const activityGovernment = [
    '/images/activity-government/Government_1.jpg',
    '/images/activity-government/Government_2.jpg',
    '/images/activity-government/Government_3.jpg',
    '/images/activity-government/Government_4.jpg',
    '/images/activity-government/Government_5.jpg',
  ];

  const activitySchool = [
    '/images/activity-school/School_1.jpg',
    '/images/activity-school/School_2.jpg',
    '/images/activity-school/School_3.jpg',
    '/images/activity-school/School_4.jpg',
    '/images/activity-school/School_5.jpg',
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
              {activityGovernment.map((src, index) => (
                <div
                  key={index}
                  className={index === 0 ? 'col-span-4 rounded-xl ' : ''}
                >
                  <Image src={src} sizes='50%' className='rounded-xl ' alt='' />
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
            <Image.PreviewGroup
              preview={{
                onChange: (current, prev) =>
                  console.log(`current index: ${current}, prev index: ${prev}`),
              }}
            >
              {activitySchool.map((src, index) => (
                <div
                  key={index}
                  className={index === 0 ? 'col-span-4 rounded-xl' : ''}
                >
                  <Image src={src} sizes='50%' className='rounded-xl' />
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
