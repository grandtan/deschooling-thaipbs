import Head from 'next/head';

import React, { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';

import PreviewClip from '@/components/layout/components/previewClip';

const PLAYLIST_ID = 'PLOXec4xqLw1Hqeoj8yxo9MXKIfLe19XfQ';

const Podcast = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>
          Podcast กินอย่างไรให้ชีวิตดี๊ดี 5 นาที รู้เรื่อง : deschooling
        </title>
        <meta
          name='keywords'
          content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <PreviewClip
        playListId={PLAYLIST_ID}
        title=' Podcast กินอย่างไรให้ชีวิตดี๊ดี 5 นาที รู้เรื่อง'
      />
    </Layout>
  );
};

export default Podcast;
