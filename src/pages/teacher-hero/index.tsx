import { Grid } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { PiPencilLine, PiTelevisionFill } from 'react-icons/pi';
import Layout from '@/components/layout/Layout';
import { YoutubeResponse } from '@/types/teacher';

const YOUTUBE_PLAYLIST_ITEMs_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

const YOUTUBE_API_KEY = 'AIzaSyAUCEi5_NKskjwa5Q2Mrjb-0qGSG1NptfM';

const PLAYLIST_ID = 'PLeZwwnM5meV8cKcg83FL1EEI2tF2G5T3R';

const TeacherHero = () => {
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
      <div className='mx-24 h-screen py-10'>
        <div className='flex justify-between'>
          <div className=' flex items-center space-x-4 font-semibold text-[#ffba00]'>
            <PiTelevisionFill size={35} />
            <div className=' text-2xl '>Teacher Hero</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeacherHero;
