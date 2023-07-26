import { QRCode } from 'antd';
import { format } from 'date-fns';
import { th } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { BsFillCalendarHeartFill } from 'react-icons/bs';

import Layout from '@/components/layout/Layout';

import { useLoading } from '@/context/loadingContext';

import { CaledarResponse } from '@/types/calendat';

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
      <div className='mx-24  py-10'>
        <div className=' flex flex-row items-center space-x-4 font-semibold text-[#ffba00]'>
          <BsFillCalendarHeartFill size={35} />
          <div className='text-3xl'>ปฏิทินกิจกรรม</div>
        </div>

        <div className='my-10  text-center text-2xl text-[#ffba00]'>
          กิจกรรมเดือน {format(new Date(), 'MMMM', { locale: th })}
        </div>

        <div className='flex flex-col space-y-10 '>
          {data?.map((item, index) => (
            <div
              key={index}
              className='flex w-full flex-row  rounded-[50px]   border-4 bg-white  p-2 hover:border-[#ffba00] '
            >
              <div className='flex w-1/6 flex-row items-center justify-center  rounded-b-[50px]  rounded-tl-[50px] bg-[#ffd666] text-center  '>
                <div className='text-2xl'>{item.textDate}</div>
              </div>
              <div className='flex w-3/6  flex-col  items-center  justify-center  space-y-2 rounded-b-[50px] text-xl  hover:text-yellow-900'>
                <div>ชื่อกิจกรรม : {item.eventName}</div>
                <div>เวลาที่จัดกิจกรรม : {item.period}</div>
                <div>หมายเหตุ : {item.remark}</div>
              </div>

              <div className=' flex w-2/6 flex-row items-center justify-center space-x-10 rounded-b-[50px] rounded-tr-[50px]  bg-slate-100 p-1'>
                <QRCode
                  className=' border-2 border-[#ffba00]'
                  size={150}
                  iconSize={200 / 4}
                  errorLevel='H'
                  value={item.qrcode}
                  icon='https://img.icons8.com/color/48/google-docs--v1.png'
                />
                <QRCode
                  className=' border-2 border-[#ffba00]'
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
