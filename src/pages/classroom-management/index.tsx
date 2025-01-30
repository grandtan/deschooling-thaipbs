import Head from 'next/head';

import React from 'react';

import Layout from '@/components/layout/Layout';

import PreviewClip from '@/components/layout/components/previewClip';

const PLAYLIST_ID = 'PLeZwwnM5meV8wZkVA_scPjm-OxtOOgucx';

const ClassroomManagement = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>การจัดการห้องเรียน : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <PreviewClip
        playListId={PLAYLIST_ID}
        title='การจัดการห้องเรียน'
        content={false}
        isNotReverse
      />
    </Layout>
  );
};

export default ClassroomManagement;
