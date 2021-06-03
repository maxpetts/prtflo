import "../styles/globals.css";
import "../styles/style.css";
import type { AppProps } from 'next/app';
import Nav from "../components/Nav"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
