import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';

import PreviewClip from '@/components/layout/components/previewClip';

const SmallSchool = () => {
  const PLAYLIST_ID = 'PLeZwwnM5meV8bGT7GtUEd8Kv5A9cmdTkk';

  return (
    <Layout container={false}>
      <Head>
        <title>โรงเรียนเล็กจิ๋วแต่แจ๋ว : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <PreviewClip playListId={PLAYLIST_ID} />
    </Layout>
  );
};

export default SmallSchool;
