import { Grid, CircularProgress } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { YoutubeResponse } from '@/types/teacher';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { PiTelevisionFill } from 'react-icons/pi';

import { useLoading } from '@/context/loadingContext';

const YOUTUBE_PLAYLIST_ITEMs_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

const YOUTUBE_API_KEY = 'AIzaSyAUCEi5_NKskjwa5Q2Mrjb-0qGSG1NptfM';

const PLAYLIST_ID = 'PLeZwwnM5meV9zqAEbuMwsog5LrXua7G3c';

const RESULTS_PER_PAGE = 8;

const TeacherHero = () => {
  const [itemYoutube, setItemYoutube] = useState<YoutubeResponse>();
  const [maxResults, setMaxResults] = useState(RESULTS_PER_PAGE);
  const [totalItems, setTotalItems] = useState(0);

  const { setLoading } = useLoading();

  useEffect(() => {
    fetchYoutube(totalItems); // fetch all videos at once
  }, [totalItems]);

  const fetchYoutube = async (maxResults: number) => {
    setLoading(true);

    const res = await fetch(
      `${YOUTUBE_PLAYLIST_ITEMs_API}?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
    );
    const data: YoutubeResponse = await res.json();

    setItemYoutube(data);
    setTotalItems(data.pageInfo.totalResults);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleViewAll = () => {
    setMaxResults(totalItems);
  };

  const handleViewMore = () => {
    setLoading(true);
    setMaxResults((prevMaxResults) => prevMaxResults + RESULTS_PER_PAGE);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  console.log(totalItems, maxResults);

  return (
    <Layout container={false}>
      <div className='mx-24 py-10'>
        <div className='flex justify-between'>
          <div className=' flex items-center space-x-4 font-semibold text-[#ffba00]'>
            <PiTelevisionFill size={35} />
            <div className='text-3xl '>Teacher Hero</div>
          </div>
          <button
            className=' flex items-center font-semibold text-[#ffba00]'
            onClick={handleViewAll}
          >
            <div className='text-lg'>ดูทั้งหมด</div>
            <ArrowForwardIosIcon className='pl-1' />
          </button>
        </div>

        <div className='mt-10 flex flex-row justify-center '>
          <Grid container spacing={4}>
            {itemYoutube?.etag &&
              [...itemYoutube.items]
                .reverse()
                .slice(0, maxResults)
                .map((e, i) => (
                  <Grid item xs={12} md={6} lg={3} key={i}>
                    <Link
                      href={`https://www.youtube.com/watch?v=${e.snippet.resourceId.videoId}&list=${PLAYLIST_ID}`}
                      passHref
                      target='_blank'
                    >
                      <div className='aspect-video w-full rounded-t-xl rounded-bl-xl bg-white p-1.5 duration-500 hover:-translate-y-6 hover:text-[#ffba00] hover:ease-in'>
                        <div>
                          <img
                            className='rounded-t-xl rounded-bl-xl'
                            src={e.snippet.thumbnails.high.url}
                            width='100%'
                            height='100%'
                            alt={e.snippet.title}
                          />
                        </div>

                        <div className='h-24 p-4 text-left'>
                          {e.snippet.title}
                        </div>
                      </div>
                    </Link>
                  </Grid>
                ))}
          </Grid>
        </div>

        <div className='mt-10 flex justify-center text-lg text-[#ffba00] '>
          {totalItems > maxResults && (
            <button onClick={handleViewMore}>
              VDO เพิ่มเติม
              <ArrowForwardIosIcon className='pl-1' />
            </button>
          )}
        </div>

        <div className=' flex justify-end '>
          <button
            className='h-12 w-12 animate-bounce rounded-full bg-[#ffba00]'
            onClick={scrollToTop}
          >
            <ArrowUpwardIcon htmlColor='white' />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default TeacherHero;
