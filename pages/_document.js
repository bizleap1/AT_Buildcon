import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/Fav.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
        <meta name="description" content="A & T Buildcon - Engineers and Builders" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
