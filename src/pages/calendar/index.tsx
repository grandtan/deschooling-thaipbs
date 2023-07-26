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
        console.error(error);
      });
  }, []);

  return (
    <Layout backgroundImage='/images/bg-master.png'>
      <div className='mx-24 h-screen py-10'>
        <div className=' flex flex-row items-center space-x-4 font-semibold text-[#ffba00]'>
          <BsFillCalendarHeartFill size={35} />
          <div className=' text-3xl '>ปฏิทินกิจกรรม</div>
        </div>
        {data?.map((x, index) => (
          <div key={index}>{x.endDate}</div>
        ))}
      </div>
    </Layout>
  );
};

export default Calendar;
