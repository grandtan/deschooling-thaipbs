import Head from 'next/head';

import React from 'react';

import Layout from '@/components/layout/Layout';

const Cooperation = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>ความร่วมมือ : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div>ความร่วมมือ</div>
    </Layout>
  );
};

export default Cooperation;
