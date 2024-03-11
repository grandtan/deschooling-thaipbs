import Head from 'next/head';
import React from 'react';
import Layout from '@/components/layout/Layout';
import PreviewClip from '@/components/layout/components/previewClip';

const OutsideClassRoomPodcast = () => {
  const PLAYLIST_ID = 'PLeZwwnM5meV_8v-ZCoDH63QxAgPnVPPf4';
  return (
    <Layout container={false}>
      <Head>
        <title>วิชานอกห้อง : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <PreviewClip playListId={PLAYLIST_ID} title='รู้รอบนอกห้องเรียน' />
    </Layout>
  );
};

export default OutsideClassRoomPodcast;
