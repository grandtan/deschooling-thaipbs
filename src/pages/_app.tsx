import { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import TagManager from 'react-gtm-module';

import '@/styles/globals.css';
import '@/styles/colors.css';

import { LoadingProvider } from '@/context/loadingContext';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5GVNLZRH' });
  }, []);

  return (
    <>
      <Head>
        {/* Google Analytics */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-9C3MRPK6YN`}
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
      </Head>
      <LoadingProvider>
        <Component {...pageProps} />
      </LoadingProvider>
    </>
  );
}

export default MyApp;
