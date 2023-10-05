import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Grid } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaPodcast } from 'react-icons/fa';

import Layout from '@/components/layout/Layout';

import { useLoading } from '@/context/loadingContext';

import { YoutubeResponse } from '@/types/teacher';

const YOUTUBE_PLAYLIST_ITEMs_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

const YOUTUBE_API_KEY = 'AIzaSyAUCEi5_NKskjwa5Q2Mrjb-0qGSG1NptfM';

const PLAYLIST_ID = 'PLOXec4xqLw1Hqeoj8yxo9MXKIfLe19XfQ';

const RESULTS_PER_PAGE = 8;

const Podcast = () => {
  const [itemYoutube, setItemYoutube] = useState<YoutubeResponse>();
  const [maxResults, setMaxResults] = useState(RESULTS_PER_PAGE);
  const [totalItems, setTotalItems] = useState(0);
  const [viewAllClicked, setViewAllClicked] = useState(false);

  const { setLoading } = useLoading();

  useEffect(() => {
    fetchYoutube(totalItems);
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
    setViewAllClicked(true);
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

      <div className=' mx-4 py-10 md:mx-24'>
        <div className='flex  md:justify-between'>
          <div className=' flex space-x-4  font-semibold text-[#ffba00] md:items-center'>
            <FaPodcast size={35} />
            <div className=' text-3xl'>
              Podcast กินอย่างไรให้ชีวิตดี๊ดี 5 นาที รู้เรื่อง
            </div>
          </div>
          <div className=' hidden md:flex'>
            {!viewAllClicked &&
              maxResults < totalItems &&
              totalItems > RESULTS_PER_PAGE && (
                <button
                  className=' flex items-center font-semibold text-[#ffba00]'
                  onClick={handleViewAll}
                >
                  <div className='text-lg'>ดูทั้งหมด</div>
                  <ArrowForwardIosIcon className='pl-1' />
                </button>
              )}
          </div>
        </div>

        <div className='mt-10 flex flex-row justify-center '>
          <Grid container spacing={4}>
            {itemYoutube?.etag &&
              [...itemYoutube.items]
                .reverse()
                .slice(0, maxResults)
                .map((e, i) => (
                  <Grid item xs={12} sm={6} md={6} lg={3} key={i}>
                    <Link
                      href={`https://www.youtube.com/watch?v=${e.snippet.resourceId.videoId}&list=${PLAYLIST_ID}`}
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

                        <div className='h-24 p-2 text-left'>
                          {e.snippet.title}
                        </div>
                      </div>
                    </Link>
                  </Grid>
                ))}
          </Grid>
        </div>

        <div className='mt-10 flex justify-center text-lg text-[#ffba00] '>
          {maxResults < totalItems && (
            <button onClick={handleViewMore}>
              VDO เพิ่มเติม
              <ArrowForwardIosIcon className='pl-1' />
            </button>
          )}
        </div>

        <div className='flex justify-end'>
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

export default Podcast;
