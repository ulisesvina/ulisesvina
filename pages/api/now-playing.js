import { getNowPlaying } from "../../lib/spotify";

export const config = {
  runtime: "edge",
};

const notPlaying = () =>
  new Response(
    JSON.stringify({
      isPlaying: false,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "cache-control": "public, s-maxage=60, stale-while-revalidate=30",
      },
    }
  );

const handler = async () => {
  try {
    const nowPlaying = await getNowPlaying();

    if (nowPlaying.status !== 200) return notPlaying();

    const song = await nowPlaying.json();

    if (song.item === null) return notPlaying();

    const artist = song.item.artists.map((_artist) => _artist.name).join(", "),
      songName = song.item.name,
      albumImage = song.item.album.images[0].url;

    return new Response(
      JSON.stringify({
        isPlaying: true,
        artist,
        songName,
        albumImage,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
        },
      }
    );
  } catch (error) {
    console.log(error);
    return notPlaying();
  }
};

export default handler;
