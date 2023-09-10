import { AppProps } from 'next/app';
import Script from 'next/script';

import '@/styles/globals.css';
import '@/styles/colors.css';

import { LoadingProvider } from '@/context/loadingContext';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=GTM-5GVNLZRH'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GTM-5GVNLZRH');
        `}
      </Script>
      <Component {...pageProps} />
    </LoadingProvider>
  );
}

export default MyApp;
