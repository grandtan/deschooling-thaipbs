import React from 'react';
import Layout from '@/components/layout/Layout';
import { PiPencilLine } from 'react-icons/pi';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { BsFillCalendarHeartFill } from 'react-icons/bs';
import { SiYoutubemusic } from 'react-icons/si';

const Calendar = () => {
  return (
    <Layout backgroundImage='/images/bg-master.png'>
      <div className='mx-24 h-screen py-10'>
        <div className=' flex flex-row items-center space-x-4 font-semibold text-[#ffba00]'>
          <BsFillCalendarHeartFill size={35} />
          <div className=' text-3xl '>ปฏิทินกิจกรรม</div>
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
