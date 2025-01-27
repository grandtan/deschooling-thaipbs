import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Grid } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { SiYoutubemusic } from 'react-icons/si';

import { useLoading } from '@/context/loadingContext';

import { YoutubeResponse } from '@/types/teacher';

const RESULTS_PER_PAGE = 8;
const YOUTUBE_API_KEY = 'AIzaSyAUCEi5_NKskjwa5Q2Mrjb-0qGSG1NptfM';
const YOUTUBE_PLAYLIST_ITEMs_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

interface Props {
  playListId: string;
  title: string;
  isNotReverse?: boolean;
}

const PreviewClip = ({ playListId, title, isNotReverse }: Props) => {
  const { setLoading, loading } = useLoading();

  const [itemYoutube, setItemYoutube] = useState<YoutubeResponse>();
  const [maxResults, setMaxResults] = useState(RESULTS_PER_PAGE);
  const [totalItems, setTotalItems] = useState(0);
  const [viewAllClicked, setViewAllClicked] = useState(false);
  const [fristCall, setFristCall] = useState(false);

  const fetchCheckTotal = async () => {
    setLoading(true);

    try {
      const response = await axios.get(YOUTUBE_PLAYLIST_ITEMs_API, {
        params: {
          part: 'snippet',
          playlistId: playListId,
          maxResults: totalItems,
          key: YOUTUBE_API_KEY,
        },
      });

      const data: YoutubeResponse = response.data;

      setTotalItems(data.pageInfo.totalResults);

      fetchPlaylist(data.pageInfo.totalResults);
    } catch (error) {
      console.error('Error fetching data from YouTube:', error);
      setLoading(false);
    }
  };
  const fetchPlaylist = async (total: number) => {
    setLoading(true);

    try {
      const response = await axios.get(YOUTUBE_PLAYLIST_ITEMs_API, {
        params: {
          part: 'snippet',
          playlistId: playListId,
          maxResults: total,
          key: YOUTUBE_API_KEY,
        },
      });

      const data: YoutubeResponse = response.data;

      if (data?.items?.length) {
        setItemYoutube(data);
      } else {
        console.log('No items found in the YouTube response');
      }
    } catch (error) {
      console.error('Error fetching data from YouTube:', error);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setFristCall(true);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchCheckTotal();
  }, []);

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
    <div className='mx-4 mb-32 mt-10 md:mx-24'>
      <div className='flex  md:justify-between'>
        <div className=' flex space-x-4  font-semibold text-[#ffba00] md:items-center'>
          <SiYoutubemusic size={35} />
          <div className=' bg-black p-0.5 text-3xl'>{title}</div>
        </div>
        {itemYoutube?.items?.length && (
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
        )}
      </div>

      {itemYoutube?.items?.length ? (
        <div className='mt-10 flex flex-row justify-center '>
          <Grid container spacing={4}>
            {itemYoutube?.etag &&
              (isNotReverse
                ? itemYoutube.items.slice(0, maxResults)
                : [...itemYoutube.items].reverse().slice(0, maxResults)
              ).map((e, i) => (
                <Grid item xs={12} sm={6} md={6} lg={3} key={i}>
                  <Link
                    href={`https://www.youtube.com/watch?v=${e.snippet.resourceId.videoId}&list=${playListId}`}
                    passHref
                    target='_blank'
                  >
                    <div className='aspect-video w-full rounded-t-xl rounded-bl-xl border-2  bg-white p-0.5  duration-500 hover:-translate-y-6 hover:border-[#ffba00]  hover:text-yellow-900 hover:ease-in '>
                      <div>
                        <img
                          className='rounded-t-xl rounded-bl-xl'
                          src={e?.snippet?.thumbnails?.high?.url}
                          width='100%'
                          height='100%'
                          alt={e.snippet.title}
                        />
                      </div>

                      <div className='h-24 p-2 text-left '>
                        {e.snippet.title}
                      </div>
                    </div>
                  </Link>
                </Grid>
              ))}
          </Grid>
        </div>
      ) : (
        <div>
          {fristCall && (
            <div className='mt-6 flex flex-col items-center justify-center'>
              <div className='text-3xl text-[#ffba00] sm:text-6xl'>
                ติดตามชม...
              </div>
              <div className='mt-4 bg-black text-3xl text-white sm:text-6xl '>
                เดือนเมษายน 2568
              </div>
            </div>
          )}
        </div>
      )}

      {itemYoutube?.items?.length && (
        <div className='mt-10 flex justify-center text-lg text-[#ffba00] '>
          {maxResults < totalItems && (
            <button onClick={handleViewMore}>
              VDO เพิ่มเติม
              <ArrowForwardIosIcon className='pl-1' />
            </button>
          )}
        </div>
      )}

      {itemYoutube?.items?.length && (
        <div className=' flex justify-end '>
          <button
            className='h-12 w-12 animate-bounce rounded-full bg-[#ffba00]'
            onClick={scrollToTop}
          >
            <ArrowUpwardIcon htmlColor='white' />
          </button>
        </div>
      )}
    </div>
  );
};

export default PreviewClip;
