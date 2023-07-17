import { Grid } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { PiPencilLine } from 'react-icons/pi';
import Layout from '@/components/layout/Layout';
import { YoutubeResponse } from '@/types/teacher';

const YOUTUBE_PLAYLIST_ITEMs_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

const YOUTUBE_API_KEY = 'AIzaSyAUCEi5_NKskjwa5Q2Mrjb-0qGSG1NptfM';

const PLAYLIST_ID = 'PLeZwwnM5meV8cKcg83FL1EEI2tF2G5T3R';

const VDO = () => {
  const [itemYoutube, setItemYoutube] = useState<YoutubeResponse>();
  const [maxResults, setMaxResults] = useState(8);

  useEffect(() => {
    fetchYoutube();
  }, []);

  const fetchYoutube = async () => {
    const res = await fetch(
      `${YOUTUBE_PLAYLIST_ITEMs_API}?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
    );
    const data: YoutubeResponse = await res.json();

    setItemYoutube(data);
  };

  console.log('itemYoutube', itemYoutube);

  return (
    <Layout>
      <div className='mx-20 py-10'>
        <div className='flex justify-center space-x-4 text-2xl font-semibold text-[#ffba00]'>
          <PiPencilLine size={30} />
          <div>VDO How to ดูง่าย พอดีคำ สำหรับครู</div>
        </div>
        <div className='mt-10 flex flex-row justify-center'>
          <Grid container spacing={4}>
            {itemYoutube?.etag &&
              itemYoutube.items.map((e, i) => (
                <Grid item xs={12} md={6} lg={3} key={i}>
                  <Link
                    href={`https://www.youtube.com/watch?v=${e.snippet.resourceId.videoId}`}
                    passHref
                    target='_blank'
                  >
                    <div className='aspect-video w-full  rounded-t-xl  rounded-bl-xl bg-white p-1.5  duration-500 hover:-translate-y-6  hover:bg-[#ffcc00] hover:text-white hover:ease-in'>
                      <div>
                        <img
                          className='rounded-t-xl rounded-bl-xl'
                          src={e.snippet.thumbnails.high.url}
                          width='100%'
                          height='100%'
                          alt={e.snippet.title}
                        />
                      </div>
                      <div className='h-24 p-4 text-left '>
                        {e.snippet.title}
                      </div>
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

export default VDO;
