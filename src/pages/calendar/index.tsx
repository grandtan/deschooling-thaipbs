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
    <Layout backgroundImage='/images/bg-master.png'>
      <div className='mx-24 h-screen py-10'>
        <div className=' flex flex-row items-center space-x-4 font-semibold text-[#ffba00]'>
          <BsFillCalendarHeartFill size={35} />
          <div className=' text-3xl '>ปฏิทินกิจกรรม</div>
        </div>
        <div className='text-center text-xl text-[#ffba00]'>
          ประจำเดือน {format(new Date(), 'MMMM', { locale: th })}
        </div>
        <div>
          {data?.map((item, index) => (
            <div key={index} className=' mt-10 bg-slate-100 p-4 text-[#ffba00]'>
              <div>ชื่อกิจกรรม :{item.eventName}</div>
              <div>รายละเอียดกิจกรรม :{item.eventDes}</div>
              <div>ชื่อแขกรับเชิญ :{item.guestName}</div>
              <div>รายละเอียดแขกรับเชิญ :{item.guestDes}</div>
              <div>ชื่อผู้ดำเนินรายการ : {item.speakerName}</div>
              <div>รายละเอียดผู้ดำเนินรายการ : {item.speakerDes}</div>
              <div>วันที่จัดกิจกรรม : {item.textDate}</div>
              <div>เวลาที่จัดกิจกรรม : {item.period}</div>
              <div>หมายเหตุ : {item.remark}</div>
              <div className=' flex flex-row space-x-5'>
                <QRCode
                  size={200}
                  iconSize={200 / 4}
                  errorLevel='H'
                  value={item.qrcode}
                  icon='https://img.icons8.com/color/48/google-docs--v1.png'
                />
                <QRCode
                  size={200}
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
