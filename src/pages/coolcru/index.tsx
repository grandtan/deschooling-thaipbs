import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';

import PreviewClip from '@/components/layout/components/previewClip';

const PLAYLIST_ID = 'PLeZwwnM5meV_8bJV_CSZAmAeESjQYcBf0';

const CoolCru = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>COOL CRU จารย์เจ๋ง : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <PreviewClip
        playListId={PLAYLIST_ID}
        title='COOL CRU จารย์เจ๋ง'
        isNotReverse
      />
    </Layout>
  );
};

export default CoolCru;
