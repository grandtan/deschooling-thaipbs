import Link from 'next/link';
import router from 'next/router';
import { BsFillCalendarHeartFill } from 'react-icons/bs';

interface Props {
  menuName: string;
  submenu1: string;
  submenu2: string;
  pathName: string;
}

export const Event = ({ menuName, submenu1, submenu2, pathName }: Props) => {
  const baseButtonClasses =
    'peer p-3 text-base text-black hover:rounded-b-[50px] hover:bg-white hover:text-[#ffba00] lg:text-2xl';
  const activeButtonClasses =
    pathName === '/calendar' || pathName === '/gallery'
      ? 'rounded-b-[50px] bg-white text-[#ffba00]'
      : '';

  return (
    <div className='hidden w-full sm:block md:w-auto'>
      <button className={`${baseButtonClasses} ${activeButtonClasses}`}>
        <div className='mb-1 flex flex-col items-center'>
          <BsFillCalendarHeartFill size={35} />
        </div>
        {menuName}
      </button>

      <div className='fixed hidden w-fit flex-col divide-y rounded bg-white text-start text-xl drop-shadow-lg hover:flex peer-hover:flex'>
        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/calendar'
        >
          {submenu1}
        </Link>

        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/gallery'
        >
          {submenu2}
        </Link>
      </div>
    </div>
  );
};
