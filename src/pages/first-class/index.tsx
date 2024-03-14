import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { PiTelevisionFill } from 'react-icons/pi';

const ImageFirstClass =
  'https://images-cdn.enveu.com/960x540/filters:format(webp):quality(50)/https://cf-images.ap-southeast-1.prod.boltdns.net/v1/static/6075037809001/c65f1315-f409-4a3f-964c-9bb6411db9e9/0e7b57fc-886e-42f4-b4c3-20dbfdb3da86/1920x1080/match/image.jpg';

const vdoFirstClass =
  'https://vipa.me/th/play/first-class-%25E0%25B8%25AB%25E0%25B9%2589%25E0%25B8%25AD%25E0%25B8%2587%25E0%25B9%2580%25E0%25B8%25A3%25E0%25B8%25B5%25E0%25B8%25A2%25E0%25B8%2599%25E0%25B9%2581%25E0%25B8%25A3%25E0%25B8%2581/1197974';

const FirstClass = () => {
  return (
    <Layout container={false}>
      <Head>
        <title>First Class ห้องเรียนแรก : deschooling</title>
        <meta
          name='keywords'
          content='Descholling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className=' mx-4  py-10 md:mx-24'>
        <div className='flex md:justify-between'>
          <div className=' flex space-x-4  font-semibold text-[#ffba00] md:items-center'>
            <PiTelevisionFill size={35} />
            <div className='text-3xl'>First Class ห้องเรียนแรก</div>
          </div>
        </div>

        <div className='mt-10 flex flex-row justify-center'>
          <Link href={vdoFirstClass} passHref target='_blank'>
            <div className='aspect-video w-full rounded-t-xl rounded-bl-xl border-2 bg-white p-0.5  duration-500 hover:-translate-y-6 hover:border-[#ffba00]  hover:text-yellow-900 hover:ease-in '>
              <div>
                <Image
                  className='rounded-t-xl rounded-bl-xl'
                  src={ImageFirstClass}
                  width={1200}
                  height={1200}
                  alt='Picture of the First Class'
                />
              </div>
              <div className='h-34 p-2 text-left'>
                First Class ห้องเรียนแรก เบื้องหลังความสำเร็จคือครอบครัว
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default FirstClass;
