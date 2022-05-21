import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { BiNoEntry, BiBookBookmark } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

const fetchNowPlaying = (setData) => {
  return fetch("/api/now-playing")
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    })
    .catch((error) => error);
};

const Home = () => {
  const [data, setData] = useState({ isPlaying: false }),
    [typed, setTyped] = useState(""),
    quotes = ["innovative", "useful", "amazing", "inspiring"];
  let fetched = false,
    quote = 0,
    char = 1;

  useEffect(() => {
    if (!fetched) {
      fetchNowPlaying(setData);
      fetched = true;
    }

    const interval = setInterval(() => {
      fetchNowPlaying(setData);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setInterval(async () => {
      if (char > quotes[quote].length) {
        await new Promise((r) => setTimeout(r, 1000));
        quote = quote == 3 ? 0 : quote + 1;
        setTyped(quotes[quote].charAt(0));
        char = 1;
      } else {
        setTyped(quotes[quote].substring(0, char));
        char++;
      }
    }, 150);
  }, []);

  return (
    <div className="container">
      <div className="text-center mt-3 mb-5">
        <p className="text-3xl">
          I design{" "}
          <b>
            <span className="gradient-text">{typed}</span>
          </b>{" "}
          products
        </p>
        <br />
        <p className="mt-1 text-xl">
          Hi! I&apos;m Ulises, an experienced fullstack developer focused on
          low-level.
        </p>
      </div>
      <div className="flex justify-center mb-10">
        <a href="https://cv.ulisesvina.me" target="_blank">
          <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full mr-4">
            <BiBookBookmark className="icon" /> Get my resume
          </button>
        </a>
        <Link href="/contact">
          <button className="mt-5 bg-green-700 hover:bg-green-900 text-white py-2 px-4 rounded-full">
            <FiMail className="icon" /> Get in touch
          </button>
        </Link>
      </div>
      {data["isPlaying"] ? (
        <p>
          <FaSpotify className="text-green-600 icon" /> Now playing{" "}
          <b>{data.songName}</b> by <b>{data.artist} ✨</b>
        </p>
      ) : (
        <p>
          <BiNoEntry className="text-red-400 icon" /> Currently not playing any
          song.
        </p>
      )}
    </div>
  );
};

export default Home;
