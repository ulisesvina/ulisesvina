import Head from "next/head";
import Header from "../components/Header";
import "../styles/globals.css";
import { useEffect } from "react";
import splitbee from "@splitbee/web";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    splitbee.init({
      scriptUrl: "https://cdn.splitbee.io/sb.js",
      apiUrl: "https://hive.splitbee.io",
      token: "0F91SINVCVMX",
    });
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="Author" content="Ulises Viña" key="author" />
        <meta property="og:title" content="Ulises Viña" key="title" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon-180x180.png"
        />
        <link rel="manifest" href="/meta/manifest.json" />
        <title>Ulises Viña</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default App;
