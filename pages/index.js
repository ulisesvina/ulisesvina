import { useState, useEffect } from 'react';
import { FaSpotify } from 'react-icons/fa';
import { BiNoEntry } from 'react-icons/bi';

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
        data["isPlaying"] ? <p><FaSpotify/> Now playing {data.songName} by {data.artist}</p> : <p><BiNoEntry/> Currently not playing any song.</p>
      }
    </div>
  );
}

export default Home;