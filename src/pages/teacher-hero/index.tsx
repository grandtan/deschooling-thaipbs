import Head from 'next/head';

import React, { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';

import PreviewClip from '@/components/layout/components/previewClip';

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
