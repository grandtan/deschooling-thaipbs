import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import CardItem from '@/components/CardItem';
import { RiParentLine } from 'react-icons/ri';
import { FaPodcast } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { PiTelevisionFill } from 'react-icons/pi';
import Image from 'next/image';

const Parents = () => {
  return (
    <Layout backgroundImage='/images/bg-parent-all.png'>
      <Head>
        <title>
          พ่อแม่และผู้ปกครอง : คุณคือใครในวงการการศึกษา : deschooling
        </title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>
      <div className='h-screen py-10'>
        <CardItem
          title='พ่อแม่และผู้ปกครอง'
          titleIcon={<RiParentLine size={35} />}
          items={[
            {
              nameTitle: 'Home-Based Learning',
              linkPath: '/parent',
              icon: <MdComputer size={100} />,
            },

            {
              nameTitle: 'TV Program',
              linkPath: 'https://www.altv.tv/home',
              icon: (
                <Image
                  src='/images/logoaltv.png'
                  alt='TV Program'
                  width={200}
                  height={200}
                />
              ),
            },
            {
              nameTitle: 'First Class ห้องเรียนแรก',
              linkPath: '/first-class',
              icon: <PiTelevisionFill size={100} />,
            },
            {
              nameTitle: 'กินอย่างไรให้ชีวิตดี๊ดี 5 นาที รู้เรื่อง',
              linkPath: '/podcast',
              icon: <FaPodcast size={100} />,
            },
          ]}
        />
      </div>
    </Layout>
  );
};

export default Parents;
