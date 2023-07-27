import React from 'react';
import Layout from '@/components/layout/Layout';
import { BsFillCalendarHeartFill } from 'react-icons/bs';
import { Image } from 'antd';

const ActivityGallery = () => {
  const activityGovernment = [
    '/images/activity/1.jpg',
    '/images/activity/2.jpg',
    '/images/activity/3.jpg',
    '/images/activity/5.jpg',
    '/images/activity/5.jpg',
  ];

  const activitySchool = [
    '/images/activity/1.jpg',
    '/images/activity/2.jpg',
    '/images/activity/3.jpg',
    '/images/activity/5.jpg',
    '/images/activity/5.jpg',
  ];

  return (
    <Layout backgroundImage='/images/bg-master.png'>
      <div className='mx-24 py-10'>
        <div className=' flex flex-row items-center space-x-4 font-semibold text-[#ffba00]'>
          <BsFillCalendarHeartFill size={35} />
          <div className=' text-3xl'>ภาพกิจกรรม</div>
        </div>

        <div className='  grid h-screen grid-cols-1 place-content-center gap-4 md:grid-cols-2'>
          <div className=' grid grid-cols-4 gap-2 rounded-t-xl rounded-bl-xl border-4 bg-white p-2 duration-500 hover:-translate-y-6 hover:border-[#ffba00] hover:text-yellow-900 hover:ease-in md:grid-cols-4'>
            <Image.PreviewGroup
              preview={{
                onChange: (current, prev) =>
                  console.log(`current index: ${current}, prev index: ${prev}`),
              }}
            >
              {activityGovernment.map((src, index) => (
                <div
                  key={index}
                  className={index === 0 ? 'col-span-4 rounded-xl' : ''}
                >
                  <Image src={src} sizes='50%' className='rounded-xl ' />
                </div>
              ))}
            </Image.PreviewGroup>
            <div className='col-span-4 rounded-t-xl rounded-bl-xl bg-[#ffba00] p-2 text-lg '>
              เวทีนโยบายการศึกษากับพรรคการเมือง
            </div>
          </div>

          <div className=' grid grid-cols-4 gap-2 rounded-t-xl rounded-bl-xl border-4 bg-white p-2 duration-500 hover:-translate-y-6 hover:border-[#ffba00] hover:text-yellow-900 hover:ease-in md:grid-cols-4'>
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
