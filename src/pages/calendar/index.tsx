import { QRCode } from 'antd';
import { format } from 'date-fns';
import { th } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { BsFillCalendarHeartFill } from 'react-icons/bs';

import Layout from '@/components/layout/Layout';

import { useLoading } from '@/context/loadingContext';

import { CaledarResponse } from '@/types/calendat';
import Head from 'next/head';
import { TiWarningOutline } from 'react-icons/ti';
import { BiTimeFive } from 'react-icons/bi';
import { AiFillSound } from 'react-icons/ai';
import { LuMapPin } from 'react-icons/lu';

const Calendar = () => {
  const [data, setData] = useState<CaledarResponse[] | null>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    fetch('/api/googleCalendar')
      .then((response) => response.json())
      .then((data: CaledarResponse[]) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  console.log(data);

  return (
    <Layout>
      <div className='mx-24 h-full py-10'>
        <Head>
          <title>ปฏิทินกิจกรรม : DeschoolingDoc</title>
          <meta
            name='keywords'
            content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
          />
        </Head>

        <div className=' flex flex-row items-center space-x-4 font-semibold text-[#ffba00]'>
          <BsFillCalendarHeartFill size={35} />
          <div className='text-3xl'>ปฏิทินกิจกรรม</div>
        </div>

        <div className='my-10  text-center text-2xl text-[#ffba00]'>
          กิจกรรมเดือน {format(new Date(), 'MMMM', { locale: th })}
        </div>

        <div className='flex flex-col space-y-10'>
          {data?.map((item, index) => (
            <div
              key={index}
              className='flex w-full cursor-pointer flex-row  rounded-t-[50px]   rounded-bl-[50px] bg-white md:w-auto'
            >
              <div className='flex w-1/6 flex-row items-center  justify-center  rounded-t-[50px] rounded-bl-[50px] bg-[#ffd666]  text-center'>
                <div className='text-2xl font-bold'>{item.textDate}</div>
              </div>
              <div className='flex w-3/6  flex-col  items-center  justify-center  space-y-2 rounded-t-[50px]  rounded-bl-[50px] text-center text-xl hover:text-yellow-900'>
                <div className='flex flex-row items-center gap-x-2'>
                  <LuMapPin /> {item.eventName}
                </div>
                <div className='flex flex-row items-center gap-x-2'>
                  <BiTimeFive /> {item.period}
                </div>
                <div className='flex flex-row items-center gap-x-2'>
                  <TiWarningOutline /> {item.remark}
                </div>
              </div>

              <div className='flex w-2/6 flex-row items-center justify-center space-x-10 rounded-t-[50px]  rounded-bl-[50px]  bg-slate-100 p-1'>
                <QRCode
                  size={150}
                  iconSize={200 / 4}
                  errorLevel='H'
                  value={item.qrcode}
                  icon='https://img.icons8.com/color/48/google-docs--v1.png'
                />
                <QRCode
                  size={150}
                  iconSize={200 / 4}
                  errorLevel='H'
                  value={item.line}
                  icon='https://img.icons8.com/color/48/line-me.png'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
