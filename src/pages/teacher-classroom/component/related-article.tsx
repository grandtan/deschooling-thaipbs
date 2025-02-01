import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbCirclesRelation } from 'react-icons/tb';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

const articles = [
  { src: '/images/1/DSC03152.JPG', link: '/teacher-classroom' },
  { src: '/images/1/DSC03152.JPG', link: '/teacher-classroom' },
  { src: '/images/1/DSC03152.JPG', link: '/teacher-classroom' },
  { src: '/images/1/DSC03152.JPG', link: '/teacher-classroom' },
  { src: '/images/1/DSC03152.JPG', link: '/teacher-classroom' },
  { src: '/images/1/DSC03152.JPG', link: '/teacher-classroom' },
];

const slideConfig = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
  ],
};

const RelateArticle = () => {
  return (
    <section className='mx-4 pt-16 md:mx-24'>
      {/* Title Section */}
      <div className='flex space-x-4 font-semibold text-[#ffba00] md:items-center'>
        <TbCirclesRelation size={40} />
        <h2 className='bg-black p-0.5 text-3xl'>บทความที่เกี่ยวข้อง</h2>
      </div>

      {/* Slide Section */}
      <div className='relative mt-6'>
        <Slide {...slideConfig}>
          {articles.map((article, index) => (
            <div key={index} className='flex justify-center px-2'>
              <Link href={article.link}>
                <Image
                  src={article.src}
                  width={350}
                  height={280}
                  className='rounded-lg border border-gray-200 shadow-md'
                  alt='บทความที่เกี่ยวข้อง'
                  priority
                />
              </Link>
            </div>
          ))}
        </Slide>

        {/* Custom Navigation Arrows */}
        <div className='pointer-events-none absolute inset-y-0 flex w-full items-center justify-between px-4'>
          <button className='nav prev left-[-50px] hidden md:flex'>❮</button>
          <button className='nav next right-[-50px] hidden md:flex'>❯</button>
        </div>
      </div>
    </section>
  );
};

export default RelateArticle;
