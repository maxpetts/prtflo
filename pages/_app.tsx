import "../styles/globals.css";
import "../styles/style.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={"mainContainer"}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Max Petts: graduated Bangor University with a 1st in Computer Science. Providing his knowledge for your computational problems"
        />
        <meta
          name="keywords"
          content="Max Petts, Portfolio, Computer science, Tech Solutions, Birmingham, North Wales, Design, UI Design, UX Design, UI, UX, Programming, Computer Help, Java, JavaScript, C++, Python, HTML, CSS, PHP, Development, Developer, Coder, Code, Backend, Frontend, Full Stack, Git, GitHub, PWA, Web App"
        />
        <meta name="author" content="Max Petts" />
        <title> Max Petts </title>
        <link rel="preload" href="/fonts/far-out.ttf" as="font" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
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
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#93ccdc"
        />
        <link rel="shortcut icon" href="favicon/favicon.ico" />
        <meta name="theme-color" content="#8280c7" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
