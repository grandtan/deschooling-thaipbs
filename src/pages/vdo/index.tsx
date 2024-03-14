import Head from 'next/head';

import React, { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';

import PreviewClip from '@/components/layout/components/previewClip';

const PLAYLIST_ID = 'PLeZwwnM5meV8NRnJ3RkyUawJwzKiSMtt6';

const VDO = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>VDO How to : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <PreviewClip playListId={PLAYLIST_ID} title='VDO How to ดูง่าย พอดีคำ' />
    </Layout>
  );
};

export default VDO;
