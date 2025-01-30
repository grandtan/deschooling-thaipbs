import Head from 'next/head';

import React from 'react';

import Document from '@/components/layout/components/document';

import Layout from '@/components/layout/Layout';

import PreviewClip from '@/components/layout/components/previewClip';
import { tr } from 'date-fns/locale';

const PLAYLIST_ID = 'PLeZwwnM5meV861QP7QjpwzBzupMVrodNS';

const Idea = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>VDO How to : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className='flex h-full w-full flex-col border-t-4 border-yellow-400 bg-white'>
        <Document title='บทความ : เติมไอเดียให้ครูเจ๋ง' titleFile='' />

        <PreviewClip
          playListId={PLAYLIST_ID}
          title='VDO : เติมไอเดียให้ครูเจ๋ง'
          content={true}
          isNotReverse
        />
      </div>
    </Layout>
  );
};

export default Idea;
