import { getNowPlaying } from '../../lib/spotify';

const notPlaying = res => {
    return res.status(200).json({ isPlaying: false })
}

export default async function handler(_, res) {
    const response = await getNowPlaying()

    if (response.status === 204 || response.status > 400) notPlaying();
  
    const song = await response.json()
  
    if (song.item === null) notPlaying();
  
   const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
   const songName = song.item.name
  
   res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30')
  
   // We return an obejct containing the information about the currently playing song

   return res.status(200).send({ isPlaying: true, artist, songName });
}