import React from 'react';
import Layout from '@/components/layout/Layout';
import { PiPencilLine } from 'react-icons/pi';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Calendar = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <Layout>
      <div className='flex justify-center space-x-4 text-2xl font-semibold text-[#ffba00]'>
        <PiPencilLine size={30} />
        ปฏิทินกิจกรรม
      </div>

      <Timeline position='alternate'>
        {months.map((month, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot />
              {index !== months.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <h2>{month}</h2>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Layout>
  );
};

export default Calendar;
