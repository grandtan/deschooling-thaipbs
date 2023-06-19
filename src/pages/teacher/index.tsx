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
    <Layout backgroundImage='/images/bg-teacher.png'>
      <div className=' h-screen  pt-40'>
        <div className=' mt-4 flex justify-center text-4xl font-semibold text-[#ffcc00]'>
          Learning Space แบ่งปันนวัตกรรมการสอน
        </div>
        {/* <Grid container spacing={4} className='mt-20'>
          {link.map((e) => (
            <Grid md={3} key={e}>
              <div className=' h-52 rounded-lg bg-white'>
                <iframe src={e} />
              </div>
            </Grid>
          ))}
        </Grid> */}
      </div>
    </Layout>
  );
};

export default Teacher;
