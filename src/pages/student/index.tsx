import React from 'react';
import { Col, Row } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaPodcast } from 'react-icons/fa';
import { PiStudentFill } from 'react-icons/pi';
import Layout from '@/components/layout/Layout';
import { SiYoutubemusic } from 'react-icons/si';
import CardItem from '@/components/CardItem';

const Student: React.FC = () => (
  <Layout backgroundImage='https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/bg-student.png'>
    <Head>
      <title>นักเรียน : คุณคือใครในวงการการศึกษา : deschooling</title>
      <meta
        name='keywords'
        content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
      />
    </Head>

    <CardItem
      title='นักเรียน'
      titleIcon={<PiStudentFill size={35} />}
      items={[
        {
          nameTitle: 'กินอย่างไรให้ชีวิตดี๊ดี 5 นาที รู้เรื่อง',
          linkPath: '/podcast',
          icon: <FaPodcast size={100} />,
        },
        {
          nameTitle: 'TV Program',
          linkPath: 'https://www.altv.tv/home',
          icon: (
            <Image
              src='/images/logoaltv.png'
              alt='Picture of the author'
              width={200}
              height={200}
            />
          ),
        },
        {
          nameTitle: 'วิชานอกห้อง',
          linkPath: '/outside-classroom-vdo',
          icon: <SiYoutubemusic size={100} />,
        },
        {
          nameTitle: 'รู้รอบนอกห้องเรียน',
          linkPath: '/outside-classroom-podcast',
          icon: <SiYoutubemusic size={100} />,
        },
      ]}
    />
  </Layout>
);

export default Student;
