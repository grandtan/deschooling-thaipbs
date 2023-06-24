import { Grid } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import Layout from '@/components/layout/Layout';
const Teacher = () => {
  const link = [
    'https://www.youtube.com/watch?v=NFnAuiklEug&list=RDKY-Dgpwthe8&index=8&ab_channel=THEBLACKLABEL',
    'https://www.youtube.com/watch?v=NFnAuiklEug&list=RDKY-Dgpwthe8&index=8&ab_channel=THEBLACKLABEL',
    'https://www.youtube.com/watch?v=NFnAuiklEug&list=RDKY-Dgpwthe8&index=8&ab_channel=THEBLACKLABEL',
    'https://www.youtube.com/watch?v=NFnAuiklEug&list=RDKY-Dgpwthe8&index=8&ab_channel=THEBLACKLABEL',
    'https://www.youtube.com/watch?v=NFnAuiklEug&list=RDKY-Dgpwthe8&index=8&ab_channel=THEBLACKLABEL',
    'https://www.youtube.com/watch?v=NFnAuiklEug&list=RDKY-Dgpwthe8&index=8&ab_channel=THEBLACKLABEL',
    'https://www.youtube.com/watch?v=NFnAuiklEug&list=RDKY-Dgpwthe8&index=8&ab_channel=THEBLACKLABEL',
    'https://www.youtube.com/watch?v=NFnAuiklEug&list=RDKY-Dgpwthe8&index=8&ab_channel=THEBLACKLABEL',
  ];
  return (
    <Layout backgroundImage='/images/bgn.png'>
      <div className=' pt-40'>
        <div className=' mt-4 flex justify-center text-4xl font-semibold text-[#ffcc00]'>
          Learning Space แบ่งปันนวัตกรรมการสอน
        </div>
        <div className=' my-10 flex flex-row'>
          <div className='w-1/5'>picture</div>
          <div className='w-4/5 pr-4'>
            <Grid container spacing={2}>
              {link.map((e) => (
                <Grid item xs={12} md={6} lg={3} key={e}>
                  <Link href={e} key={e}>
                    <div className=' h-56  bg-slate-50 p-1 hover:bg-[#ffcc00]'>
                      <div className=' h-full  bg-black text-white'>VDO</div>
                    </div>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Teacher;
