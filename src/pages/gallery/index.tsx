import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Head from 'next/head';
import Link from 'next/link';
import { Modal } from 'antd';
import { BsImages } from 'react-icons/bs';
import Layout from '@/components/layout/Layout';

const Gallery = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const governmentEvent = [
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_1.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_2.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_3.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_4.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/government-event/government_5.jpg',
  ];

  const schoolEvent = [
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/school-event/school_1.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/school-event/school_2.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/school-event/school_3.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/school-event/school_4.jpg',
    'https://s3.ap-southeast-1.amazonaws.com/altv-deschooling-assets/images/school-event/school_5.jpg',
  ];

  const handlePreview = (image: string) => {
    setPreviewImage(image);
    setPreviewVisible(true);
  };

  const handleClosePreview = () => {
    setPreviewVisible(false);
  };

  return (
    <Layout container={false}>
      <Head>
        <title>ภาพกิจกรรม : deschooling</title>
        <meta
          name='keywords'
          content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>
      <div className='mx-4 mb-40  mt-10 md:mx-24 '>
        <div className='flex flex-row items-center space-x-4 font-semibold text-[#ffba00]'>
          <BsImages size={35} />
          <div className='text-3xl'>ภาพกิจกรรม</div>
        </div>

        <div className='mt-12 grid grid-cols-1 place-content-center gap-4 md:grid-cols-2'>
          <div className='grid grid-cols-4 gap-1 rounded-b-3xl rounded-t-3xl border-2 border-dashed p-0.5 md:grid-cols-4'>
            <div className='col-span-4 grid content-center rounded-t-3xl bg-[#ffcc00] p-4 text-center text-xl'>
              เวทีเสวนา “ชวนพรรคร่วมคิด ฟื้นชีวิตเรียนรู้ใหม่ หนุนเด็กไทย
              ก้าวทันโลก”
            </div>

            {governmentEvent.map((image, index) => (
              <div
                onClick={() => handlePreview(image)}
                key={index + 1}
                className={index === 0 ? 'col-span-4' : ''}
              >
                <LazyLoadImage
                  src={image}
                  alt={'Government Event ' + index}
                  effect='blur'
                />
              </div>
            ))}

            <Link
              href='/gallery/government'
              className='col-span-4 grid content-center rounded-b-3xl bg-[#ffd666] p-2 text-center'
            >
              รายละเอียดเพิ่มเติม
            </Link>
          </div>

          <div className='grid grid-cols-4 gap-1 rounded-b-3xl rounded-t-3xl border-2 border-dashed p-0.5 md:grid-cols-4'>
            <div className='col-span-4 grid content-center rounded-t-3xl bg-[#ffcc00] p-4 text-center text-xl'>
              เวทีเสวนา “โรงเรียนเล็ก โรงเรียนใหญ่แก้ปัญหาอย่างไรให้ตรงจุด”
            </div>

            {schoolEvent.map((image, index) => (
              <div
                onClick={() => handlePreview(image)}
                key={index + 1}
                className={index === 0 ? 'col-span-4' : ''}
              >
                <LazyLoadImage
                  src={image}
                  alt={'School Event ' + index}
                  effect='blur'
                />
              </div>
            ))}

            <Link
              href='/gallery/school'
              className='col-span-4 grid content-center rounded-b-3xl bg-[#ffd666] p-2 text-center'
            >
              รายละเอียดเพิ่มเติม
            </Link>
          </div>

          <Modal
            visible={previewVisible}
            onCancel={handleClosePreview}
            footer={null}
            closable={false}
            width='80%'
          >
            <LazyLoadImage src={previewImage} effect='blur' />
          </Modal>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
