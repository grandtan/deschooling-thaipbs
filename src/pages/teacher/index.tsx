import Grid from '@mui/material/Unstable_Grid2';
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
    <Layout>
      <div className=' h-screen'>
        <div className='mt-4 flex text-4xl font-semibold text-[#ffcc00]'>
          Learning Space แบ่งปันนวัตกรรมการสอน
        </div>
        <Grid container spacing={2}>
          {link.map((e) => (
            <Grid md={3} key={e}>
              <div className=' h-32 bg-white p-4'>
                {/* <iframe src={e} /> */}
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
};

export default Teacher;
