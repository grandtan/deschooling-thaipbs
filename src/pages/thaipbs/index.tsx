import Image from 'next/image';
import React from 'react';

const ThaiPbs = () => {
  return (
    <div className='mt-20 flex justify-center '>
      <Image
        src='/images/thaipbs.png'
        alt='ไทยพีบีเอสกับการขับเคลื่อน'
        width={1000}
        height={200}
      />
    </div>
  );
};

export default ThaiPbs;

// className=' my-10 '
// style={{
//   backgroundImage: `url(/images/thaipbs.png)`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
// }}