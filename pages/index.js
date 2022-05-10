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
  const [data, setData] = useState({ isPlaying: false }); let fetched = false;

  useEffect(() => {
    if (!fetched) {
      fetchNowPlaying(setData);
      fetched = true;
    }

    const interval = setInterval(() => { fetchNowPlaying(setData) }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Home</h2>
      {
        data["isPlaying"] ? <p><FaSpotify className={styles["spotify-icon"]}/> Now playing {data.songName} by {data.artist}</p> : <p><BiNoEntry className={styles["no-entry-icon"]}/> Currently not playing any song.</p>
      }
    </div>
  );
}

export default Home;