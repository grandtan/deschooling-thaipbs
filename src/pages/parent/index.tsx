import Head from 'next/head';
import React from 'react';

import PreviewClip from '@/components/layout/components/previewClip';
import Layout from '@/components/layout/Layout';

const PLAYLIST_ID = 'PLeZwwnM5meV8rTvcEU9sk04HU5I0oje9s';

const Parent = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>พ่อแม่และผู้ปกครอง : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <PreviewClip
        playListId={PLAYLIST_ID}
        title='Home-Based Learning เมื่อพ่อแม่เป็นครูอีกคน'
        isNotReverse
      />
    </Layout>
  );
};

export default Parent;
