import Head from 'next/head';

import React, { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';

import PreviewClip from '@/components/layout/components/previewClip';

const ClassRoom = () => {
  const PLAYLIST_ID = 'PLeZwwnM5meV80wEiOycCFHi8A6q-4vQm7';

  return (
    <Layout container={false}>
      <Head>
        <title>ห้องเรียนเล็ก เอาเด็กอยู่ : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <PreviewClip playListId={PLAYLIST_ID} title='ห้องเรียนเล็ก เอาเด็กอยู่' />
    </Layout>
  );
};

export default ClassRoom;
