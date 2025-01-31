import Head from 'next/head';

import React from 'react';

import Layout from '@/components/layout/Layout';

import PreviewClip from '@/components/layout/components/previewClip';

const PLAYLIST_ID = 'PLeZwwnM5meV9BDlxnsCvOf7v12EQ_YRtq';

const Government = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>เสียงสะท้อนสู่นโยบายภาครัฐ : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <PreviewClip
        playListId={PLAYLIST_ID}
        title='เสียงสะท้อนสู่นโยบายภาครัฐ'
        isNotReverse={false}
      />
    </Layout>
  );
};

export default Government;
