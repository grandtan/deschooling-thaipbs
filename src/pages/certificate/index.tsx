import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { PiCertificateBold } from 'react-icons/pi';

import Layout from '@/components/layout/Layout';

// ✅ ข้อมูลรูปภาพ (เพิ่มปีอื่นเข้ามา)
const images = [
  {
    src: '/images/poster/Poster150268.jpg',
    link: 'https://drive.google.com/drive/folders/1UZACmejP3k8k1P4jixuV3Mae3tqWoYWl',
  },
  {
    src: '/images/poster/Poster250168.jpg',
    link: 'https://drive.google.com/drive/folders/1GWatIemjK0ezJXSTHdUdfH1ohoGC4AnG',
  },
  {
    src: '/images/poster/Poster120168.jpg',
    link: 'https://drive.google.com/drive/folders/1mDmVCAMHQfzyRY_Yr-9HEn-WJWLHD73s',
  },
  {
    src: '/images/poster/Poster211267.jpg',
    link: 'https://drive.google.com/drive/folders/1V70EdxVsbiPYNGSCxn554B32Ucbuici2',
  },

  //รอ poster
  // {
  //   src: '/images/poster/Poster141267.jpg',
  //   link: 'https://drive.google.com/drive/folders/1LoVPkxOGValTRuAuLL8kz-_gIgqXuTqa',
  // },

  {
    src: '/images/poster/Poster301167.jpg',
    link: 'https://drive.google.com/drive/folders/1O3ji2UEttqhRE_AD7rqmjukQePZknJ9e',
  },
  {
    src: '/images/poster/Poster021167.jpg',
    link: 'https://drive.google.com/drive/folders/187IrObOFwSjR2jf_lw0gGVhhZ3jBVi5m',
  },
  {
    src: '/images/poster/Poster191067.jpg',
    link: 'https://drive.google.com/drive/folders/1MwO-oAmeEaWDLP9_CSnSE2xv3ZXBvKku',
  },
  {
    src: '/images/poster/Poster121067.jpg',
    link: 'https://drive.google.com/drive/folders/1lopVnctYSNwWXY2gnwkmh-VmzohqF2wV',
  },
  {
    src: '/images/poster/Poster210967.jpg',
    link: 'https://drive.google.com/drive/folders/1RWS9ceGESkKvLDP-88tHFQTGN-iw_OWn',
  },
  {
    src: '/images/poster/Poster140967.jpg',
    link: 'https://drive.google.com/drive/folders/1GZBAAViZvXH0TpGtHTpp1m7eoeoEKgO9',
  },
  {
    src: '/images/poster/Poster240867.jpg',
    link: 'https://drive.google.com/drive/folders/1dlLY3vKXcFKKr4aN6zukZjpc7foKk8MU',
  },
  {
    src: '/images/poster/Poster100867.jpg',
    link: 'https://drive.google.com/drive/folders/1zvc5H3dtmIVbzEShmt3S-EV3JOTeeGY9',
  },
  {
    src: '/images/poster/Poster200767.jpg',
    link: 'https://drive.google.com/drive/folders/1qxAeF4yOcjID-OPSCAFGh06CWkVRw2mO',
  },
  {
    src: '/images/poster/Poster130767.jpg',
    link: 'https://drive.google.com/drive/folders/10yOu797MuQa4r0aVjZ6WTTpEVz2RKpiR',
  },
  {
    src: '/images/poster/Poster290667.jpg',
    link: 'https://drive.google.com/drive/folders/10yOu797MuQa4r0aVjZ6WTTpEVz2RKpiR',
  },
  {
    src: '/images/poster/Poster080667.jpg',
    link: 'https://drive.google.com/drive/folders/1f98XqJ9aNWFC08uFcUlSIPh564rxr7rR',
  },
  {
    src: '/images/poster/Poster250567.jpg',
    link: 'https://drive.google.com/drive/folders/10ykmuJmUKnohrh95H57k3vYWE2VOUhpG',
  },

  {
    src: '/images/poster/Poster180567.jpg',
    link: 'https://drive.google.com/drive/folders/1zGQbU-rtd1TeMnQU0IDA1BbN3Q9ml90w',
  },

  {
    src: '/images/poster/Poster200467.jpg',
    link: 'https://drive.google.com/drive/folders/1zGQbU-rtd1TeMnQU0IDA1BbN3Q9ml90w',
  },

  {
    src: '/images/poster/Poster060467.jpg',
    link: 'https://drive.google.com/drive/folders/126a1_-Q7m6XY8Iu3KGbf14QVX48Anlyd',
  },

  {
    src: '/images/poster/Poster300367.jpg',
    link: 'https://drive.google.com/drive/folders/1KwzHjFz72pItQg1j3kCSfPrvyJPomI87',
  },

  {
    src: '/images/poster/Poster230367.jpg',
    link: 'https://drive.google.com/drive/folders/19pzKNNsEjf6gjgS4totA9bEru2BCmYlr',
  },

  {
    src: '/images/poster/Poster160367.jpg',
    link: 'https://drive.google.com/drive/folders/1LKGKLgC4yItjwe3DsZESYxSomb10OHuA',
  },
  {
    src: '/images/poster/Poster020367.jpg',
    link: 'https://drive.google.com/drive/folders/1x9PdkbXL1GV4aSffdX_VdyEsFpl15Ruk',
  },
  {
    src: '/images/poster/Poster240267.jpg',
    link: 'https://drive.google.com/drive/folders/1T9FkfdWOTnPHHgXWeqhPzHGnv79q_kdn',
  },
  {
    src: '/images/poster/Poster170267.jpg',
    link: 'https://drive.google.com/drive/folders/1_IeN5xChnTISoOWb9EaUu7QprirjUH7g',
  },
  {
    src: '/images/poster/Poster100267.jpg',
    link: 'https://drive.google.com/drive/folders/16gjY2zoPB828UFRDqFiexZRHux0OEyRd',
  },
  {
    src: '/images/poster/Poster030267.jpg',
    link: 'https://drive.google.com/drive/folders/1rmI1apIO3JCi0VLpyRVaivZ73dyudEa8',
  },
  {
    src: '/images/poster/Poster270167.jpg',
    link: 'https://drive.google.com/drive/folders/1rjR1AhLKWS8xpB9CmvuzR2sHO2-2cfRf',
  },
  {
    src: '/images/poster/Poster200167.jpg',
    link: 'https://drive.google.com/drive/folders/1ggG7ADdJ0b9lsA1FllQSUbqWgxfD7mtc',
  },
  {
    src: '/images/poster/Poster060167.jpg',
    link: 'https://drive.google.com/drive/folders/1-q4Otd4E_WZ5OS77t1_pDElzhvg9SCq3',
  },
];

// ✅ ฟังก์ชันดึงปีจากชื่อไฟล์
const getYearFromFilename = (filename: string) => {
  const match = filename.match(/\d{6}/);
  return match ? `25${match[0].slice(-2)}` : 'Unknown';
};

// ✅ จัดกลุ่มรูปภาพตามปี
const groupedImages = images.reduce<Record<string, typeof images>>(
  (acc, image) => {
    const year = getYearFromFilename(image.src);
    if (!acc[year]) acc[year] = [];
    acc[year].push(image);
    return acc;
  },
  {}
);

const Certificate = () => {
  if (images.length === 0) return null; // ✅ ถ้าไม่มีรูป ไม่ต้องแสดงอะไรเลย

  return (
    <Layout container={false}>
      <Head>
        <title>ดาวน์โหลดเกียรติบัตร : deschooling</title>
        <meta
          name='keywords'
          content='Deschooling, พื้นที่การเรียนรู้, ห้องเรียนข้ามเส้น'
        />
      </Head>

      <div className='mx-4 my-10 h-full w-full space-y-10 md:mx-24'>
        {/* Header */}
        <div className='flex justify-center space-x-4 font-semibold text-[#ffba00] md:items-center'>
          <FaCloudDownloadAlt size={35} />
          <div className='bg-black p-0.5 text-3xl'>ดาวน์โหลดเกียรติบัตร</div>
        </div>

        {/* วนลูปแสดงแต่ละปี โดยเรียงจากปีมากไปน้อย */}
        {Object.entries(groupedImages)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)) // เรียงจากปีใหม่ไปปีเก่า
          .map(([year, yearImages]) => (
            <div key={year} className='space-y-10'>
              {/* Section Title */}
              <div className='flex justify-center space-x-2 bg-black p-2 font-semibold text-white md:items-center'>
                <PiCertificateBold size={35} />
                <div className='text-center text-2xl'>
                  เกียรติบัตรกิจกรรมปี {year}
                </div>
              </div>

              {/* Grid แสดงรูปของปีนั้น */}
              <div className='grid grid-cols-1 justify-items-center gap-8 md:grid-cols-3 md:gap-12'>
                {yearImages.map((item, index) => (
                  <div key={index} className='group'>
                    {item.link ? (
                      <a
                        href={item.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Image
                          src={item.src}
                          alt={`poster ${year}`}
                          width={350}
                          height={400}
                          className='rounded-xl border-2 border-dashed border-white transition-transform duration-500 ease-in group-hover:-translate-y-6'
                          priority
                        />
                      </a>
                    ) : (
                      <Image
                        src={item.src}
                        alt={`poster ${year}`}
                        width={350}
                        height={400}
                        className='rounded-xl border-2 border-dashed border-white transition-transform duration-500 ease-in group-hover:-translate-y-6'
                        priority
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Certificate;
