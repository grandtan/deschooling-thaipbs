import Link from 'next/link';
import { MdPolicy } from 'react-icons/md';

interface Props {
  menuName: string;
  submenu1: string;
  submenu2: string;
  pathName: string;
}

const EducationPolicy = ({ menuName, submenu1, submenu2, pathName }: Props) => {
  const baseButtonClasses =
    'peer p-3 text-base text-black hover:rounded-b-[50px] hover:bg-white hover:text-[#ffba00] lg:text-2xl';
  const activeButtonClasses =
    pathName === '/government-policy' || pathName === '/gallery-policy'
      ? 'rounded-b-[50px] bg-white text-[#ffba00]'
      : '';

  return (
    <div className='hidden w-full sm:block md:w-auto'>
      <button className={`${baseButtonClasses} ${activeButtonClasses}`}>
        <div className='mb-1 flex flex-col items-center'>
          <MdPolicy size={35} />
        </div>
        <div className='text-center'>{menuName}</div>
      </button>

      <div className='fixed hidden w-fit flex-col divide-y rounded bg-white text-start text-xl drop-shadow-lg hover:flex peer-hover:flex'>
        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/government-policy'
        >
          {submenu1}
        </Link>

        <Link
          className='px-5 py-3 text-black hover:text-[#ffba00]'
          href='/gallery-policy'
        >
          {submenu2}
        </Link>
      </div>
    </div>
  );
};

export default EducationPolicy;
