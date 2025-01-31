import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdComputer } from 'react-icons/md';

import Layout from '@/components/layout/Layout';

import { useLoading } from '@/context/loadingContext';

import { YoutubeResponse } from '@/types/teacher';
import { SiYoutubemusic } from 'react-icons/si';
import { PiTelevisionFill } from 'react-icons/pi';
import PreviewClip from '@/components/layout/components/previewClip';

const PLAYLIST_ID = 'PLeZwwnM5meV_hQT3yil3Cf0dFyGy8gZrg';

const ThaMaiTai = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>ท่าไม้ตาย : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <PreviewClip
        playListId={PLAYLIST_ID}
        title='ท่าไม้ตาย'
        isNotReverse={false}
      />
    </Layout>
  );
};

export default ThaMaiTai;
