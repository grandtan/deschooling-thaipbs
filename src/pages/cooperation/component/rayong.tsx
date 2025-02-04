import Image from 'next/image';
import React from 'react';

const PLAYLIST_ID = 'PLeZwwnM5meV861QP7QjpwzBzupMVrodNS';

const Rayong = () => {
  return (
    <div className='flex h-full w-full flex-col border-t-4 border-yellow-400 bg-white pb-10'>
      <div className='mx-4 flex flex-col space-x-0 space-y-4 pt-14 md:mx-24 md:flex-row md:space-x-4 md:space-y-0'>
        <div className='flex w-full flex-col justify-center space-y-8'>
          <div className='space-y-4 text-3xl text-[#2b2a2a] '>
            <div className='text-center font-bold'>
              การประกาศคุณลักษณะเด็กระยองสู่สากล เพื่อจัดการศึกษาในบริบทระยอง
            </div>
            <div className='text-center font-bold'>
              วันจันทร์ ที่ 5 สิงหาคม 2567 เวลา 13.00 - 17.00 น.
            </div>
            <div className='text-center font-bold'>
              ณ ห้องประชุม สุนทรภู่ โรงแรมสตาร์คอนเวนชั่น ระยอง
            </div>
          </div>

          <div className='border border-dashed border-yellow-500' />
        </div>
      </div>
    </div>
  );
};

export default Rayong;
