import { format } from 'date-fns';
import { th } from 'date-fns/locale';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { BsFillCalendarHeartFill } from 'react-icons/bs';

import Layout from '@/components/layout/Layout';

import { useLoading } from '@/context/loadingContext';

import { CaledarResponse } from '@/types/calendat';

const Calendar = () => {
  const [data, setData] = useState<CaledarResponse[] | null>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    const fetchDeschoolingDetails = () => {
      setLoading(true);
      fetch(
        'https://sheet.best/api/sheets/84dbfbff-a983-41ad-82e4-627c6217f442'
      )
        .then((response) => response.json())
        .then((data: CaledarResponse[]) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    };
    fetchDeschoolingDetails();
  }, []);

  console.log(data);

  return (
    <Layout backgroundImage='/images/bg-calendar.png'>
      <div className='mx-24 h-screen py-10  lg:h-full'>
        <Head>
          <title>ปฏิทินกิจกรรม : deschooling</title>
          <meta
            name='keywords'
            content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
          />
        </Head>

        <div className=' flex flex-row items-center space-x-4 font-semibold text-[#ffba00]'>
          <BsFillCalendarHeartFill size={35} />
          <div className='text-3xl  '>ปฏิทินกิจกรรม</div>
        </div>

        <div className='my-10 text-center text-2xl text-[#ffba00]'>
          กิจกรรมเดือน {format(new Date(), 'MMMM', { locale: th })}
        </div>

        <div className='flex flex-col space-y-10 p-4 '>
          {data?.map((item, index) => (
            <div key={index} className=' flex justify-center  '>
              <img
                src={item.imageUrl}
                alt='deschooling'
                className='h-3/4 w-3/4  rounded-b-xl  rounded-t-xl  border-2 border-dotted '
              />
            </div>
            // <div
            //   key={index}
            //   className='flex w-full cursor-pointer flex-row  rounded-t-[50px]   rounded-bl-[50px] bg-white md:w-auto'
            // >
            //   <div className='flex w-1/6 flex-row items-center  justify-center  rounded-t-[50px] rounded-bl-[50px] bg-[#ffd666]  text-center'>
            //     <div className='text-2xl font-bold'>{item.textDate}</div>
            //   </div>
            //   <div className='flex w-3/6  flex-col  items-center  justify-center  space-y-2 rounded-t-[50px]  rounded-bl-[50px] text-center text-xl hover:text-yellow-900'>
            //     <div className='flex flex-row items-center gap-x-2'>
            //       <LuMapPin /> {item.eventName}
            //     </div>
            //     <div className='flex flex-row items-center gap-x-2'>
            //       <BiTimeFive /> {item.period}
            //     </div>
            //     <div className='flex flex-row items-center gap-x-2'>
            //       <TiWarningOutline /> {item.remark}
            //     </div>
            //   </div>

            //   <div className='flex w-2/6 flex-row items-center justify-center space-x-10 rounded-t-[50px]  rounded-bl-[50px]  bg-slate-100 p-1'>
            //     <QRCode
            //       size={150}
            //       iconSize={200 / 4}
            //       errorLevel='H'
            //       value={item.qrcode}
            //       icon='https://img.icons8.com/color/48/google-docs--v1.png'
            //     />
            //     <QRCode
            //       size={150}
            //       iconSize={200 / 4}
            //       errorLevel='H'
            //       value={item.line}
            //       icon='https://img.icons8.com/color/48/line-me.png'
            //     />
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
