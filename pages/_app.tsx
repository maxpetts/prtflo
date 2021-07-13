import "../styles/globals.css";
import "../styles/style.css";
import type { AppProps } from 'next/app';
import Head from "next/head";
import Nav from "../components/Nav"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title> Max Petts </title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#93ccdc" />
        <link rel="shortcut icon" href="favicon/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
