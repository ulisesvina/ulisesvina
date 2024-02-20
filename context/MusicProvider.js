import { createContext, useState, useEffect, useContext } from "react";
import ColorThief from "colorthief/dist/color-thief.mjs";

export const MusicContext = createContext();

export const useMusic = () => useContext(MusicContext);

const getPaletteFromImage = async (imageSrc) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const colorThief = new ColorThief();

    img.crossOrigin = "Anonymous";
    img.src = imageSrc;

    img.addEventListener("load", () => {
      try {
        const palette = colorThief.getPalette(img);
        resolve(palette);
      } catch (error) {
        reject(error);
      }
    });

    img.addEventListener("error", (error) => reject(error));
  });
};

const calculateTextColor = (color) =>
  color[0] * 0.299 + color[1] * 0.587 + color[2] * 0.114 > 180 ? "#000" : "#fff";

export const MusicProvider = ({ children }) => {
  const [music, setMusic] = useState({ isPlaying: false });

  const fetchNowPlaying = async () => {
    try {
      const response = await fetch("/api/now-playing");
      const data = await response.json();

      if (!data.isPlaying) return setMusic({ isPlaying: false });

      const palette = await getPaletteFromImage(data.albumImage);

      const [primaryColor, secondaryColor, tertiaryColor] = palette;

      const primaryBg = `rgb(${primaryColor.join(", ")})`;
      const secondaryBg = `rgb(${secondaryColor.join(", ")})`;
      const tertiaryBg = `rgb(${tertiaryColor.join(", ")})`;

      const primaryTextColor = calculateTextColor(primaryColor);
      const secondaryTextColor = calculateTextColor(secondaryColor);
      const tertiaryTextColor = calculateTextColor(tertiaryColor);

      document.documentElement.style.setProperty("--primaryBgColor", primaryBg);
      document.documentElement.style.setProperty("--secondaryBgColor", secondaryBg);
      document.documentElement.style.setProperty("--primaryTextColor", primaryTextColor);
      document.documentElement.style.setProperty("--secondaryTextColor", secondaryTextColor);
      document.documentElement.style.setProperty("--tertiaryTextColor", tertiaryTextColor);
      document.documentElement.style.setProperty("--tertiaryBgColor", tertiaryBg);

      setMusic({
        ...data,
        primaryBg: primaryColor.join(", "),
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);

    return () => clearInterval(interval);
  }, []);

  return <MusicContext.Provider value={{ music }}>{children}</MusicContext.Provider>;
};
