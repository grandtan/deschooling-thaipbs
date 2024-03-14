import Head from 'next/head';

import React, { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';

import PreviewClip from '@/components/layout/components/previewClip';

const PLAYLIST_ID = 'PLeZwwnM5meV_0FIANFvZwLuTzZjl3EAq-';

const Deschooling = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>Deschooling : deschooling</title>
        <meta
          name='keywords'
          content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <PreviewClip
        playListId={PLAYLIST_ID}
        title='Deschooling ห้องเรียนข้ามเส้น'
      />
    </Layout>
  );
};

export default Deschooling;
