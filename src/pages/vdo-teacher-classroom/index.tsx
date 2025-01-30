import Head from 'next/head';
import React from 'react';

import Document from '@/components/layout/components/document';
import PreviewClip from '@/components/layout/components/previewClip';
import Layout from '@/components/layout/Layout';

const PLAYLIST_ID = 'PLeZwwnM5meV-muR4SgMOhWgXV18n_Yy1l';

const VdoTeacherClassroom = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>Teacher Classroom : deschooling</title>
        <meta
          name='keywords'
          content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className='flex h-full w-full flex-col border-t-4 border-yellow-500'>
        <PreviewClip
          playListId={PLAYLIST_ID}
          title=' VDO : โครงการ “เติมพลังครู สู่ห้องเรียน”'
          content={false}
          isNotReverse
        />
      </div>
    </Layout>
  );
};

export default VdoTeacherClassroom;
