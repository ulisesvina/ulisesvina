import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { MusicProvider } from "@/context/MusicProvider";
import { DeviceSpecificStyleProvider } from "@/context/DeviceSpecificStyle";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Ulises Viña</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col w-screen h-screen justify-between">
        <DeviceSpecificStyleProvider>
          <Header />
        </DeviceSpecificStyleProvider>
        <div className="flex-1 mt-24 w-9/12 mx-auto">
          <MusicProvider>
            <Component {...pageProps} />
          </MusicProvider>
          <Analytics />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
