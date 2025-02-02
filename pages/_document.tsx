import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
     <Head>
        <meta charSet="UTF-8"/>
        <meta name="title" content="Nestwood"/>
        <meta name="robots" content="index, follow"/>
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg"/>
        {/*SEO */}
        <meta name="keyword" content={"nestwood, nestwood.uz, nestwood mern, mern nestjs fullstack "}/>
        <meta name="description" content={
          "Buy and Sell furnitures anywhere anytime in South Korea |" +
          "Покупайте и продавайте недвижимость в любое время и в любом месте в Южной Корее. |" +
          "언제 어디서나 대한민국에서 부동산을 사고파세요."
        }/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
