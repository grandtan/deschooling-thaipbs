import Head from 'next/head';
import React from 'react';

import PreviewClip from '@/components/layout/components/previewClip';
import Layout from '@/components/layout/Layout';

const PLAYLIST_ID = 'PLeZwwnM5meV9zqAEbuMwsog5LrXua7G3c';

const TeacherHero = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>Teacher Hero : deschooling</title>
        <meta
          name='keywords'
          content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <PreviewClip playListId={PLAYLIST_ID} title='Teacher Hero' />
    </Layout>
  );
};

export default TeacherHero;
