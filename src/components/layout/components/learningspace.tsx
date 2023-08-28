import Link from 'next/link';
import router from 'next/router';
import { MdComputer } from 'react-icons/md';

interface Props {
  menuName: string;
  submenu1: string;
  submenu2: string;
}

export const LearningSpace = ({ menuName, submenu1, submenu2 }: Props) => {
  const pathName = router.pathname;

  const baseButtonClasses =
    'peer p-3 text-base text-black hover:rounded-b-[50px] hover:bg-white hover:text-[#ffba00] lg:text-2xl';
  const activeButtonClasses =
    pathName === '/teacher' || pathName === '/parent'
      ? 'rounded-b-[50px] bg-white text-[#ffba00]'
      : '';

  return (
    <div className='hidden w-full sm:block md:w-auto'>
      <button className={`${baseButtonClasses} ${activeButtonClasses}`}>
        <div className='mb-1 flex flex-col  items-center'>
          <MdComputer size={35} />
        </div>
        {menuName}
      </button>
      <div className='fixed hidden w-[210px] flex-col divide-y rounded bg-white text-start text-xl drop-shadow-lg hover:flex peer-hover:flex'>
        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/teacher'
        >
          {submenu1}
        </Link>
        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/parent'
        >
          {submenu2}
        </Link>
      </div>
    </div>
  );
};
