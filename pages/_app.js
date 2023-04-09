import { useState, useEffect } from "react";
import ColorThief from "../node_modules/colorthief/dist/color-thief.mjs";
import "@/styles/globals.css";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const App = ({ Component, pageProps }) => {
  const [music, setMusic] = useState({ isPlaying: false });

  const musicLogic = () => {
    fetch("/api/now-playing")
      .then((res) => res.json())
      .then((data) => {
        if (!data.isPlaying) return;

        console.log(data);

        const img = new Image(),
          colorthief = new ColorThief();

        img.crossOrigin = "Anonymous";
        img.width = 60;
        img.height = 60;
        img.src = data.albumImage;

        try {
          const palette = colorthief.getPalette(img);

          const primaryBg = `rgb(${palette[0][0]}, ${palette[0][1]}, ${palette[0][2]})`,
            secondaryBg = `rgb(${palette[1][0]}, ${palette[1][1]}, ${palette[1][2]})`,
            tertiaryBg = `rgb(${palette[2][0]}, ${palette[2][1]}, ${palette[2][2]})`,
            primaryText =
              palette[0][0] * 0.299 +
                palette[0][1] * 0.587 +
                palette[0][2] * 0.114 >
              180
                ? "#000"
                : "#fff",
            secondaryText =
              palette[1][0] * 0.299 +
                palette[1][1] * 0.587 +
                palette[1][2] * 0.114 >
              180
                ? "#000"
                : "#fff",
            tertiaryText =
              palette[2][0] * 0.299 +
                palette[2][1] * 0.587 +
                palette[2][2] * 0.114 >
              180
                ? "#000"
                : "#fff";

          document.documentElement.style.setProperty(
            "--primaryBgColor",
            primaryBg
          );
          document.documentElement.style.setProperty(
            "--secondaryBgColor",
            secondaryBg
          );
          document.documentElement.style.setProperty(
            "--primaryTextColor",
            primaryText
          );
          document.documentElement.style.setProperty(
            "--secondaryTextColor",
            secondaryText
          );
          document.documentElement.style.setProperty(
            "--tertiaryTextColor",
            tertiaryText
          );
          document.documentElement.style.setProperty(
            "--tertiaryBgColor",
            tertiaryBg
          );

          setMusic({
            ...data,
            primaryBg: `${palette[0][0]}, ${palette[0][1]}, ${palette[0][2]}`,
          });
        } catch (e) {
          console.log(e);
        }
      });
  };

  useEffect(musicLogic, []);

  useEffect(() => {
    const interval = setInterval(musicLogic, 10000);
    return () => clearInterval(interval);
  }, [music]);

  return (
    <>
      <Head>
        <title>Ulises Viña</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col w-screen h-screen justify-between">
        <Header />
        <div className="flex-1 mt-24 w-9/12 mx-auto">
          <Component music={music} {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
