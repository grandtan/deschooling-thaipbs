import { format } from 'date-fns';
import { th } from 'date-fns/locale';
import Head from 'next/head';
import React, { Suspense, useEffect, useState } from 'react';
import { BsFillCalendarHeartFill } from 'react-icons/bs';

import Layout from '@/components/layout/Layout';

import { useLoading } from '@/context/loadingContext';

import { CalendarResponse } from '@/types/calendat';

const LazyImage = React.lazy(() => import('@/components/LazyImage'));

const Calendar = () => {
  const [data, setData] = useState<CalendarResponse[] | null>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    const fetchDeschoolingDetails = () => {
      setLoading(true);
      const apiKey =
        '4UNw#HpV7wJmbx7-uKaFuid#jLv!t5oB@ESY5iWEnGICMJszJJv%nKB_Il_vGdf!';
      fetch(
        `https://sheet.best/api/sheets/84dbfbff-a983-41ad-82e4-627c6217f442?key=${apiKey}`
      )
        .then((response) => response.json())
        .then((data: CalendarResponse[]) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    };
    fetchDeschoolingDetails();
  }, []);

  return (
    <Layout backgroundImage='/images/bg-calendar.png'>
      <div className='mx-4   py-10 md:mx-24  lg:h-full'>
        <Head>
          <title>ปฏิทินกิจกรรม : deschooling</title>
          <meta
            name='keywords'
            content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
          />
        </Head>

        <div className=' flex flex-row items-center space-x-4 font-semibold text-[#ffba00]'>
          <BsFillCalendarHeartFill size={35} />
          <div className='text-3xl'>ปฏิทินกิจกรรม</div>
        </div>

        <div className='my-10 text-center text-2xl text-[#ffba00]'>
          กิจกรรมเดือน {format(new Date(), 'MMMM', { locale: th })}
        </div>

        <div className='flex flex-col space-y-10 p-4 '>
          <Suspense fallback={<div>Loading...</div>}>
            {data?.length &&
              data?.map((item, index) => (
                <div key={index} className=' flex justify-center  '>
                  <LazyImage
                    src={item.imageUrl}
                    alt='deschooling'
                    className=' h-full w-full  rounded-b-xl  rounded-t-xl  border-2  border-dotted  md:h-3/4 md:w-3/4 '
                  />
                </div>
              ))}
          </Suspense>
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
