import { useMusic } from "@/context/MusicProvider";

const Music = () => {
  const { music } = useMusic();

  return (
    <div
      className="flex flex-col justify-center items-center p-6 rounded-xl w-full secondary-text"
      style={{
        backgroundRepeat: "no-repeat",
        background: music.isPlaying
          ? `url(${music.albumImage})`
          : "var(--secondaryBgColor)",
        backgroundPosition: music.isPlaying ? "center" : "",
      }}
    >
      <div
        className="p-2 rounded-lg backdrop-blur-sm text-center max-w-full"
        styles={{ background: `rgba(${music.primaryBg}, 0.5)` }}
      >
        <h1 className="text-2xl">🎸 Music</h1>
        <p>
          {music.isPlaying ? (
            <span>
              <b>Now playing:</b> {music.songName} by {music.artist}
              <br />
            </span>
          ) : (
            <span>Nothing is playing</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Music;
