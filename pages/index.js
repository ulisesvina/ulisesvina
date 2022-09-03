import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
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

export const getServerSideProps = async () => {
  let data = await fetch("https://api.github.com/users/ulisesvina/repos").then(
    (response) => response.json()
  );

  if (data.length > 5) {
    data = data.slice(0, 5);
  }

  return { props: { ghrepos: data } };
};

const Home = ({ ghrepos }) => {
  const [data, setData] = useState({ isPlaying: false }),
    [typed, setTyped] = useState(""),
    quotes = ["innovative", "useful", "amazing", "inspiring"];
  let fetched = false,
    quote = 0;

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
      setTyped(quotes[quote]);
      quote = quote == 3 ? 0 : quote + 1;
    }, 1500);
  }, []);

  return (
    <div className="container">
      <div className="text-center mt-3 mb-5 static">
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
      <div className="flex justify-center">
        <a
          href="https://cv.ulisesvina.me"
          target="_blank"
          rel="noreferrer noopener"
        >
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
      <div className="flex justify-center mt-10 mb-5">
        <ul>
          <li className="inline-block p-4">
            <a
              href="https://instagram.com/ulisesvina"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsInstagram className="icon-social" size={35} />
            </a>
          </li>
          <li className="inline-block p-4">
            <a
              href="https://twitter.com/ulisesvina"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsTwitter className="icon-social" size={35} />
            </a>
          </li>
          <li className="inline-block p-4">
            <a
              href="https://github.com/ulisesvina"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsGithub className="icon-social" size={35} />
            </a>
          </li>
        </ul>
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
      <p className="text-3xl mt-10 mb-5">Projects</p>
      {ghrepos.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full">
          {ghrepos?.map((repo) => (
            <a
              href={repo.html_url}
              key={repo.id}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="mb-5">
                <p>
                  <span className="text-xl">{repo.name} </span>
                  <span className="text-sm">(view on <BsGithub className="icon"/> GitHub)</span>
                </p>
                <h5 className="text-md">{repo.description}</h5>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
