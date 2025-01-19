import Head from 'next/head';
import React from 'react';

import PreviewClip from '@/components/layout/components/previewClip';
import Layout from '@/components/layout/Layout';

const OutsideClassRoomVdo = () => {
  const PLAYLIST_ID = 'PLeZwwnM5meV8ML4oP8CiKq5xffN1pCxNy';

  return (
    <Layout container={false}>
      <Head>
        <title>วิชานอกห้อง : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>
      <PreviewClip playListId={PLAYLIST_ID} title='วิชานอกห้อง' />
    </Layout>
  );
};

export default OutsideClassRoomVdo;
