import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Grid } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdComputer } from 'react-icons/md';
import Layout from '@/components/layout/Layout';
import { useLoading } from '@/context/loadingContext';
import { YoutubeResponse } from '@/types/teacher';
import Head from 'next/head';
import { RiGovernmentFill } from 'react-icons/ri';

const YOUTUBE_PLAYLIST_ITEMs_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

const YOUTUBE_API_KEY = 'AIzaSyAUCEi5_NKskjwa5Q2Mrjb-0qGSG1NptfM';

const PLAYLIST_ID = 'PLeZwwnM5meV9BDlxnsCvOf7v12EQ_YRtq';

const RESULTS_PER_PAGE = 8;

const Goverment = () => {
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

  console.log(totalItems, maxResults);

  return (
    <Layout container={false}>
      <Head>
        <title>รัฐบาล : คุณคือใครในวงการการศึกษา : deschooling</title>
        <meta
          name='keywords'
          content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className='mx-24 h-screen py-10'>
        <div className='flex justify-between'>
          <div className=' flex items-center space-x-4 font-semibold text-[#ffba00]'>
            <RiGovernmentFill size={35} />
            <div className=' text-3xl '> รัฐบาล</div>
          </div>
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

        <div className='mt-10 flex flex-row justify-center '>
          {itemYoutube?.etag &&
            [...itemYoutube.items]
              .reverse()
              .slice(0, maxResults)
              .map((e, i) => (
                <div className=' w-[50%]' key={i}>
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

                      <div className=' h-20  p-1 '>{e.snippet.title}</div>
                    </div>
                  </Link>
                </div>
              ))}
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

export default Goverment;
