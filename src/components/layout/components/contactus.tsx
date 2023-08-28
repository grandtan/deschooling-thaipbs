import Link from 'next/link';
import router from 'next/router';
import { RiMailUnreadFill } from 'react-icons/ri';

interface Props {
  menuName: string;
}

export const ContactUs = ({ menuName }: Props) => {
  const pathName = router.pathname;

  const baseClasses =
    'flex flex-col items-center p-3 text-base text-black hover:rounded-b-[50px] hover:bg-white hover:text-[#ffba00] lg:text-2xl';
  const activeClasses =
    pathName === '/contact-us'
      ? 'rounded-b-[50px] bg-white text-[#ffba00]'
      : '';

  return (
    <div className='hidden w-full sm:block md:w-auto'>
      <Link className={`${baseClasses} ${activeClasses}`} href='/contact-us'>
        <div className='mb-1 flex flex-col  items-center'>
          <RiMailUnreadFill size={35} />
        </div>
        {menuName}
      </Link>
    </div>
  );
};
