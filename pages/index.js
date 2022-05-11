import { useState, useEffect } from 'react';
import { FaSpotify } from 'react-icons/fa';
import { BiNoEntry } from 'react-icons/bi';
import styles from '../styles/Home.module.css';

const fetchNowPlaying = setData => {
  return fetch('/api/now-playing')
  .then(response => response.json())
  .then(data => { setData(data) })
  .catch(error => error)
}

const Home = () => {
  const [data, setData] = useState({ isPlaying: false }); let fetched = false,
  [state, setState] = useState({
    quote: 1,
    char: 0
  }),
  quotes = ["innovative", "useful", "incredible", "inspiring"];

  useEffect(() => {
    if (!fetched) {
      fetchNowPlaying(setData);
      fetched = true;
    }

    const interval = setInterval(() => { fetchNowPlaying(setData) }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      if(state.char == quotes[state.quote].length) {
          await new Promise(r => setTimeout(r, 1500));
          setState({
              quote: state.quote == 3 ? 0 : state.quote + 1,
              char: 1,
          })
      } else {
          setState({
              quote: state.quote,
              char: state.char + 1
          })
      }
    }, 150);
  });

  return (
    <div>
      <div className="center">
        <h2>I design <b className={styles["gradient-text"]}>{quotes[state.quote].substring(0, state.char)}</b> products.</h2><br/>
        <h3>Hi! I'm Ulises, an experienced fullstack developer focused on low-level.</h3>
      </div>
      {
        data["isPlaying"] ? <p><FaSpotify className={`${styles["spotify-icon"]} icon`}/> Now playing <b>{data.songName}</b> by <b>{data.artist} ✨</b></p> : <p><BiNoEntry className={`${styles["no-entry-icon"]} icon`}/> Currently not playing any song.</p>
      }
    </div>
  );
}

export default Home;