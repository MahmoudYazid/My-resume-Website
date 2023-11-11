import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head >

        <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics></Analytics>
      </body>
    </Html>
  )
}
