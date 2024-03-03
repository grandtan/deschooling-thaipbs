import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { PiTelevisionFill } from 'react-icons/pi';
import Grid from '@mui/material/Grid';

const imageUrls = [
  'https://cf-images.ap-southeast-1.prod.boltdns.net/v1/static/6075037809001/4f06c161-e6a9-46f1-8b0f-f2b54847afc5/6987b051-79f9-4c2d-9eee-6505ba01939d/1920x1080/match/image.jpg',
  'https://cf-images.ap-southeast-1.prod.boltdns.net/v1/static/6075037809001/8a4b5ba6-7c11-4472-b5de-d62c68ad6409/c95c1e14-c9d7-4e8a-adb5-b2749284a1d0/1920x1080/match/image.jpg',
  'https://cf-images.ap-southeast-1.prod.boltdns.net/v1/static/6075037809001/3df0726a-e960-406c-8400-c89a9af5e6a6/9b492d62-6a9f-466d-8ff5-fcee69e3a765/1920x1080/match/image.jpg',
  'https://cf-images.ap-southeast-1.prod.boltdns.net/v1/static/6075037809001/f4a9ffd3-7077-41b6-9548-ada1b574d1d2/278eb00f-1d71-430f-b01d-1625c44f50f4/1920x1080/match/image.jpg',
  'https://cf-images.ap-southeast-1.prod.boltdns.net/v1/static/6075037809001/ac0c4060-0232-4ccb-9850-c8e1b8facca8/3a558ee1-59c4-4303-9960-328b844a1474/1920x1080/match/image.jpg',
];

const vdoTheMagnet = [
  'https://vipa.me/th/play/%25E0%25B9%2580%25E0%25B8%2594%25E0%25B9%2587%25E0%25B8%2581%25E0%25B8%25A7%25E0%25B8%25B4%25E0%25B8%2581%25E0%25B8%25A4%25E0%25B8%2595-%25E0%25B9%2580%25E0%25B8%2589%25E0%25B8%25B5%25E0%25B8%25A2%25E0%25B8%259A%25E0%25B8%259E%25E0%25B8%25A5%25E0%25B8%25B1%25E0%25B8%2599/1216022?seriesId=1216484',
  'https://vipa.me/th/play/%25E0%25B8%2588%25E0%25B8%2599%25E0%25B9%2580%25E0%25B8%2587%25E0%25B8%25B4%25E0%25B8%2599-%25E0%25B8%2588%25E0%25B8%2599%25E0%25B9%2582%25E0%25B8%25AD%25E0%25B8%2581%25E0%25B8%25B2%25E0%25B8%25AA/1216020?seriesId=1216484',
  'https://vipa.me/th/play/%25E0%25B9%2580%25E0%25B8%2594%25E0%25B9%2587%25E0%25B8%2581%25E0%25B8%25AB%25E0%25B8%25A5%25E0%25B8%25B1%25E0%25B8%2587%25E0%25B8%25AB%25E0%25B9%2589%25E0%25B8%25AD%25E0%25B8%2587-learning-loss/1216018?seriesId=1216484',
  'https://vipa.me/th/play/%25E0%25B8%25AA%25E0%25B8%25B1%25E0%25B8%2587%25E0%25B8%2584%25E0%25B8%25A1%25E0%25B8%25A3%25E0%25B9%2589%25E0%25B8%25B2%25E0%25B8%25A2%25E0%25B9%2583%25E0%25B8%2599%25E0%25B9%2582%25E0%25B8%25A3%25E0%25B8%2587%25E0%25B9%2580%25E0%25B8%25A3%25E0%25B8%25B5%25E0%25B8%25A2%25E0%25B8%2599/1216021?seriesId=1216484',
  'https://vipa.me/th/play/%25E0%25B9%2581%25E0%25B8%25A3%25E0%25B8%2587%25E0%25B8%2594%25E0%25B8%25B6%25E0%25B8%2587%25E0%25B8%2581%25E0%25B8%25A5%25E0%25B8%25B1%25E0%25B8%259A/1216019?seriesId=1216484',
];

const description = [
  'ตอนที่ 1 เด็กวิกฤต เฉียบพลัน',
  'ตอนที่ 2 จนเงิน จนโอกาส',
  'ตอนที่ 3 เด็กหลังห้อง Learning Loss',
  'ตอนที่ 4 สังคม (ร้าย) ในโรงเรียน',
  'ตอนที่ 5 แรงดึงกลับ',
];

const TheMagnet = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>The Magnet แรงดึงกลับ : deschooling</title>
        <meta
          name='keywords'
          content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className=' mx-4 h-screen py-10 md:mx-24'>
        <div className='flex  md:justify-between'>
          <div className=' flex space-x-4  font-semibold text-[#ffba00] md:items-center'>
            <PiTelevisionFill size={35} />
            <div className='text-3xl'>The Magnet แรงดึงกลับ</div>
          </div>
        </div>

        <div className='mt-10 flex flex-row justify-center '>
          <Grid container spacing={4}>
            {imageUrls.map((imageUrl, index) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                <Link href={vdoTheMagnet[index]} passHref target='_blank'>
                  <div className='aspect-video w-full rounded-t-xl rounded-bl-xl border-2 bg-white p-0.5  duration-500 hover:-translate-y-6 hover:border-[#ffba00]  hover:text-yellow-900 hover:ease-in '>
                    <div>
                      <Image
                        className='rounded-t-xl rounded-bl-xl'
                        src={imageUrl}
                        width={500}
                        height={500}
                        alt={`Picture ${index + 1} of the First Class`}
                      />
                    </div>
                    <div className='h-34 p-2 text-left'>
                      {description[index]}
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

export default TheMagnet;
