import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLine } from 'react-icons/fa';

import Layout from '@/components/layout/Layout';

const AboutUs = () => {
  return (
    <Layout backgroundImage='/images/bgn.png'>
      <div className=''>
        <div className='flex justify-center text-4xl font-semibold text-[#ffcc00]'>
          ติดต่อเรา
        </div>

        <div className=' grid grid-cols-5'>
          <div className='col-start-2 justify-self-end pr-10'>
            <AiOutlineMail size={50} className=' text-white' />
          </div>
          <div className=' col-start-3 col-end-6  '>
            <Link href='mailto:deschooling.thaipbs@gmail.com'>
              <div className=' text-3xl text-white '>
                deschooling.thaipbs@gmail.com
              </div>
            </Link>
          </div>
        </div>

        <div className='mt-4 grid grid-cols-5 justify-items-stretch'>
          <div className='col-start-2 justify-self-end pr-10'>
            <FaLine size={50} className=' text-white' />
          </div>
          <div className=' col-start-3 col-end-6 '>
            <Image
              className='rounded-md bg-[#ffcc00] p-2'
              src='/images/barcode.png'
              alt='Picture of the author'
              width={300}
              height={300}
            />
          </div>
        </div>

        {/* <div className='text-white'>
            <GrFacebook size={40} />
          </div> */}
      </div>
    </Layout>
  );
};

export default AboutUs;
