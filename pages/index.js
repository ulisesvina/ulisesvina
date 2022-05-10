import { useState, useEffect } from 'react';
import { FaSpotify } from 'react-icons/fa';
import { BiNoEntry } from 'react-icons/bi';

const Home = () => {
  const [data, setData] = useState("Currently not playing any song.");

  useEffect(() => {
    const interval = setInterval(() => {
      return fetch('/api/now-playing')
      .then(response => response.json())
      .then(data => { setData(data) })
      .catch(error => error)
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getNowPlaying = () => {
  }
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