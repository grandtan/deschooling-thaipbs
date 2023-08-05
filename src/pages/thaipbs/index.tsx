import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { TfiRulerPencil } from 'react-icons/tfi';
import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import TreeItem from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';

import useMediaQuery from '@mui/material/useMediaQuery';
import { auto } from '@popperjs/core';
import { Kanit } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { BsFillCalendarHeartFill } from 'react-icons/bs';
import { FaPodcast } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { PiTelevisionFill } from 'react-icons/pi';
import { RiMailUnreadFill } from 'react-icons/ri';
import { SiYoutubemusic } from 'react-icons/si';
import { TbHomeHeart } from 'react-icons/tb';

import Container from '@mui/material/Container';

import { LogoWebNew } from '@/icon/LogoWebNew';

const ThaiPbs = () => {
  return (
    <div className='h-screen w-full '>
      <div className='mx-auto flex w-full items-center justify-between bg-white py-2'>
        <div className='flex w-1/4 justify-center  '>
          <Link href='/home'>
            <LogoWebNew width='80%' />
          </Link>
        </div>
        <div className='nav-links absolute left-0 top-[-100%] flex min-h-[60vh] w-full items-center bg-white px-5  duration-500 md:static md:min-h-fit md:w-auto'>
          <ul className='flex flex-col gap-8 md:flex-row md:items-center md:gap-[4vw]'>
            <li>
              <a className='hover:text-gray-500' href='#'>
                Products
              </a>
            </li>
            <li>
              <a className='hover:text-gray-500' href='#'>
                Solution
              </a>
            </li>
            <li>
              <a className='hover:text-gray-500' href='#'>
                Resource
              </a>
            </li>
            <li>
              <a className='hover:text-gray-500' href='#'>
                Developers
              </a>
            </li>
            <li>
              <a className='hover:text-gray-500' href='#'>
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThaiPbs;
