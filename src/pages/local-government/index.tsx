import { Grid } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { PiBowlFoodFill } from 'react-icons/pi';

import Layout from '@/components/layout/Layout';

import { YoutubeResponse } from '@/types/teacher';

const YOUTUBE_VIDEOS_API = 'https://www.googleapis.com/youtube/v3/videos';
const YOUTUBE_API_KEY = 'AIzaSyAUCEi5_NKskjwa5Q2Mrjb-0qGSG1NptfM';
const VIDEO_ID1 = 'q8w5IIyq1T4';
const VIDEO_ID2 = 'Bt4Q4SacV88';
const VIDEO_ID3 = 'MPf9ckzspvA';
const VIDEO_ID4 = 'O_fnd959HNA';
const VIDEO_ID5 = 'RZ_TT2zSrlw';
const VIDEO_ID6 = 'GHOGbrAGTok';
const VIDEO_ID7 = '5UcbCjUYLdY';
const VIDEO_ID8 = '2MjVUkt8JBQ';
const VIDEO_ID9 = 'OG_OGyNXDXQ';
const VIDEO_ID10 = 'kkJqmf25xzk';

const LocalGovernment = () => {
  const [videoData, setVideoData] = useState<YoutubeResponse | null>(null);

  useEffect(() => {
    const fetchYoutube = async () => {
      const res = await fetch(
        `${YOUTUBE_VIDEOS_API}?part=snippet&id=${VIDEO_ID1}&id=${VIDEO_ID2}&id=${VIDEO_ID3}&id=${VIDEO_ID4}&id=${VIDEO_ID5}&id=${VIDEO_ID6}&id=${VIDEO_ID7}&id=${VIDEO_ID8}&id=${VIDEO_ID9}&id=${VIDEO_ID10}&key=${YOUTUBE_API_KEY}`
      );
      const data: YoutubeResponse = await res.json();

      setVideoData(data);
    };
    fetchYoutube();
  }, []);

  return (
    <Layout container={false}>
      <Head>
        <title>หน่วยงานท้องถิ่น : คุณคือใครในวงการการศึกษา : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>
      <div className=' mx-24 h-full py-10'>
        <div className=' flex space-x-4 font-semibold text-[#ffba00]'>
          <PiBowlFoodFill size={35} />
          <div className=' text-3xl '> หน่วยงานท้องถิ่น</div>
        </div>

        <div className='mt-10 flex flex-row justify-center '>
          <Grid container spacing={4}>
            {videoData?.items?.map((e, i) => (
              <Grid item xs={12} md={6} lg={3} key={i}>
                <Link
                  href={`https://www.youtube.com/watch?v=${e.id}`}
                  passHref
                  target='_blank'
                >
                  <div className='aspect-video w-full rounded-t-xl rounded-bl-xl border-2  bg-white p-0.5  duration-500 hover:-translate-y-6 hover:border-[#ffba00]  hover:text-yellow-900 hover:ease-in '>
                    <div>
                      <img
                        className='rounded-t-xl rounded-bl-xl'
                        src={e.snippet.thumbnails.high.url}
                        width='100%'
                        height='100%'
                        alt={e.snippet.title}
                      />
                    </div>
                    <div className='h-24 p-2 text-left'>{e.snippet.title}</div>
                  </div>
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

export default LocalGovernment;
