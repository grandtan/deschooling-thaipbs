import { LogoWebNew } from '@/icon/LogoWebNew';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon/favicon.ico' sizes='32x32' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
