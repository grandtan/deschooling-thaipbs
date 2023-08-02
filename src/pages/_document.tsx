import { LogoWebNew } from '@/icon/LogoWebNew';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='description'
          content='คำอธิบายเว็บไซต์ของคุณ'
          title='DecschoolingDoc'
        />
        <link
          rel='preload'
          href='/favicon.ico'
          as='font'
          crossOrigin='anonymous'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
