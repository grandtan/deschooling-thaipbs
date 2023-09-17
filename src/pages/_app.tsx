import { AppProps } from 'next/app';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

import '@/styles/globals.css';
import '@/styles/colors.css';

import { LoadingProvider } from '@/context/loadingContext';
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5GVNLZRH' });
  }, []);
  return (
    <LoadingProvider>
      <Component {...pageProps} />
    </LoadingProvider>
  );
}

export default MyApp;
