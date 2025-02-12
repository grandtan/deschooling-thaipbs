import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

import '@/styles/colors.css';
import '@/styles/globals.css';

import { LoadingProvider } from '@/context/loadingContext';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5GVNLZRH' });
  }, []);

  return (
    <>
      <Head>
        <title>My App</title>
      </Head>
      {/* Google Analytics */}
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-9C3MRPK6YN'
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9C3MRPK6YN', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <LoadingProvider>
        <AnimatePresence mode='wait'>
          <Component {...pageProps} />
        </AnimatePresence>
      </LoadingProvider>
    </>
  );
}

export default MyApp;
