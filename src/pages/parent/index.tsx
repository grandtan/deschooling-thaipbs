import { Grid } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import Layout from '@/components/layout/Layout';
const Parent = () => {
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
      <div className=' '>
        {/* <div
        className=' pt-40'
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      > */}
        <div className=' mt-36 flex justify-center text-3xl font-semibold text-[#ffcc00]'>
          Home-Based Learning เมื่อพ่อแม่เป็นครูอีกคน
        </div>
        <div className=' mx-20 mt-10 flex flex-row justify-center'>
          <Grid container spacing={4}>
            {link.map((e) => (
              <Grid item xs={12} md={6} lg={3} key={e}>
                <Link href={e} key={e}>
                  <div className='aspect-video  w-full rounded-t-lg rounded-bl-lg bg-white  duration-500 hover:-translate-y-6 hover:ease-in'>
                    <div className=' h-64 rounded-t-lg rounded-bl-lg  hover:bg-[#ffcc00] '>
                      VDO
                    </div>
                  </div>
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

export default Parent;
