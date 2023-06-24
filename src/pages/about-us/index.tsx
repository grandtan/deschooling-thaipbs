import React from 'react';

import Layout from '@/components/layout/Layout';

import EmailLink from '@/pages/email-link';

const AboutUs = () => {
  return (
    <Layout backgroundImage='/images/bgn.png'>
      <div className=' h-screen  pt-40'>
        <div className=' mt-4 flex flex-col text-center   '>
          <div className='mb-10 text-4xl  font-semibold text-[#ffcc00]'>
            ติดต่อเรา
          </div>

          <EmailLink email='deschooling.thaipbs@gmail.com'>
            <div className='text-3xl text-white'>
              deschooling.thaipbs@gmail.com
            </div>
          </EmailLink>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
