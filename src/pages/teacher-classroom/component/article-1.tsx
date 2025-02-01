import React from 'react';
import { IoDocumentText } from 'react-icons/io5';

const ArticleOne = () => {
  return (
    <div className='flex h-screen w-full flex-col border-t-4 border-yellow-400 bg-white'>
      <div className=' bg-[#454545]'>
        <div className='mx-4 py-14 md:mx-24'>
          <div className='flex flex-col space-y-6 font-semibold'>
            <div className='flex justify-center space-x-4'>
              <IoDocumentText size={35} className='text-[#ffba00]' />
              <div className='text-3xl font-bold text-white'>
                <div>บทความ : โครงการ “เติมพลังครู สู่ห้องเรียน”</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-4 py-6 md:mx-24'>
        <div className='flex flex-col space-y-2 text-center text-2xl font-extrabold text-[#424969]'>
          <div>บทความ : โครงการ “เติมพลังครู สู่ห้องเรียน”</div>
          <div>ภายใต้ โครงการ “ห้องเรียนข้ามเส้น” Deschooling </div>
          <div> องค์การกระจายเสียงและแพร่ภาพสาธารณะแห่งประเทศไทย</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleOne;
