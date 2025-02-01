import Head from 'next/head';
import React from 'react';

import Layout from '@/components/layout/Layout';

import ArticleOne from '@/pages/teacher-classroom/component/article-1';

const TeacherClassroom = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>Teacher Classroom : deschooling</title>
        <meta
          name='keywords'
          content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <ArticleOne />
    </Layout>
  );
};

export default TeacherClassroom;
