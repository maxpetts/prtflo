import Link from "next/Link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/cv">
            <a>CV</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li >
      </ul >
    </nav>
  )
}

export default MyApp;
