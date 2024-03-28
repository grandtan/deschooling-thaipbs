import React from 'react';
import Layout from '@/components/layout/Layout';
import PreviewClip from '@/components/layout/components/previewClip';

import Head from 'next/head';

const PLAYLIST_ID = 'PLeZwwnM5meV8bGT7GtUEd8Kv5A9cmdTkk';

const Teacher = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>ครูและผู้อำนวยการ : deschooling</title>
        <meta
          name='keywords'
          content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <PreviewClip
        playListId={PLAYLIST_ID}
        title='Learning Space แบ่งปันนวัตกรรมการสอน'
        isNotReverse
      />
    </Layout>
  );
};

export default Teacher;
