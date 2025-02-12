// pages/_app.tsx
import { AnimatePresence, motion } from 'framer-motion';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

import '@/styles/colors.css';
import '@/styles/globals.css';

import { LoadingProvider } from '@/context/loadingContext';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

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
          <motion.div
            key={router.route} // ใช้ key เพื่อให้ AnimatePresence รู้ว่าเมื่อไรที่ component ควร animate ออกและเข้าใหม่
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </LoadingProvider>
    </>
  );
}

export default MyApp;
