import Head from "next/head";
import Header from "../components/Header";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="Author" content="Ulises Viña" key="author" />
        <meta property="og:title" content="Ulises Viña" key="title" />
        <title>Ulises Viña</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default App;
