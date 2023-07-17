import React from 'react';

import Layout from '@/components/layout/Layout';
import { PiPencilLine } from 'react-icons/pi';

const ActivityPicture = () => {
  return (
    <Layout>
      <div className='mx-20 py-10'>
        <div className='flex justify-center space-x-4 text-2xl font-semibold text-[#ffba00]'>
          <PiPencilLine size={30} />
          ภาพกิจกรรม
        </div>
      </div>
    </Layout>
  );
};

export default ActivityPicture;
