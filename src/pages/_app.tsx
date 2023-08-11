import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/colors.css';

import { LoadingProvider } from '@/context/loadingContext';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <Component {...pageProps} />
    </LoadingProvider>
  );
}

export default MyApp;
