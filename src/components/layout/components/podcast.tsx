import Link from 'next/link';
import router from 'next/router';
import { FaPodcast } from 'react-icons/fa';

interface Props {
  menuName: string;
  submenu1: string;
}

export const Podcast = ({ menuName, submenu1 }: Props) => {
  const pathName = router.pathname;

  const baseButtonClasses =
    'peer p-3 text-base text-black hover:rounded-b-[50px] hover:bg-white hover:text-[#ffba00] lg:text-2xl';
  const activeButtonClasses =
    pathName === '/podcast' ? 'rounded-b-[50px] bg-white text-[#ffba00]' : '';

  return (
    <div className='hidden w-full sm:block md:w-auto'>
      <button className={`${baseButtonClasses} ${activeButtonClasses}`}>
        <div className='mb-1 flex flex-col items-center'>
          <FaPodcast size={35} />
        </div>
        {menuName}
      </button>

      <div className='fixed hidden w-[310px] flex-col divide-y rounded bg-white text-start text-xl drop-shadow-lg hover:flex peer-hover:flex'>
        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/podcast'
        >
          {submenu1}
        </Link>
      </div>
    </div>
  );
};