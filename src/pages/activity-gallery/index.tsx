import React from 'react';
import Layout from '@/components/layout/Layout';
import { BsFillCalendarHeartFill } from 'react-icons/bs';
import { Image } from 'antd';

const ActivityGallery = () => {
  const activityGovernment = [
    '/images/activity-government/Government_1.jpg',
    '/images/activity-government/Government_2.jpg',
    '/images/activity-government/Government_3.jpg',
    '/images/activity-government/Government_4.jpg',
    '/images/activity-government/Government_5.jpg',
    '/images/activity-government/Government_6.jpg',
    '/images/activity-government/Government_7.jpg',
    '/images/activity-government/Government_8.jpg',
    '/images/activity-government/Government_9.jpg',
    '/images/activity-government/Government_10.jpg',
  ];

  const activitySchool = [
    '/images/activity-school/School_1.jpg',
    '/images/activity-school/School_2.jpg',
    '/images/activity-school/School_3.jpg',
    '/images/activity-school/School_4.jpg',
    '/images/activity-school/School_5.jpg',
    '/images/activity-school/School_6.jpg',
    '/images/activity-school/School_7.jpg',
    '/images/activity-school/School_8.jpg',
    '/images/activity-school/School_9.jpg',
    '/images/activity-school/School_10.jpg',
  ];

  return (
    <Layout backgroundImage='/images/bg-master.png'>
      <div className='mx-24 py-10'>
        <div className=' flex flex-row items-center space-x-4 font-semibold text-[#ffba00]'>
          <BsFillCalendarHeartFill size={35} />
          <div className=' text-3xl'>ภาพกิจกรรม</div>
        </div>

        <div className='  grid h-screen grid-cols-1 place-content-center gap-4 md:grid-cols-2'>
          <div className=' grid grid-cols-4 gap-2 rounded-t-xl rounded-bl-xl border-4 bg-white p-1 md:grid-cols-4'>
            <Image.PreviewGroup>
              {activityGovernment.map((src, index) => (
                <div
                  key={index}
                  className={index === 0 ? 'col-span-4 rounded-xl' : ''}
                >
                  <Image src={src} sizes='50%' className='rounded-xl ' alt='' />
                </div>
              ))}
            </Image.PreviewGroup>
            <div className='col-span-4 rounded-t-xl rounded-bl-xl bg-[#ffba00] p-2 text-lg '>
              เวทีนโยบายการศึกษากับพรรคการเมือง
            </div>
          </div>

          <div className=' grid grid-cols-4 gap-2 rounded-t-xl rounded-bl-xl border-4 bg-white p-2 md:grid-cols-4'>
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
            <div className='col-span-4 rounded-t-xl rounded-br-xl bg-[#ffba00] p-2 text-lg hover:text-yellow-900'>
              "ข้ามเส้น" กรอบควาามคิด "สู่"
              ทางออกใหม่ให้กับโรงเรียนเล็กและโรงเรียนใหญ่
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ActivityGallery;
