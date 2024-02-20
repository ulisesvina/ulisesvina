import { useTranslation } from "react-i18next";
import { useMusic } from "@/context/MusicProvider";

const Music = () => {
  const { music } = useMusic();
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col justify-center items-center p-6 rounded-xl w-full text-secondary-text"
      style={
        music.isPlaying
          ? {
              background: `url(${music.albumImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : { backgroundColor: "var(--secondaryBgColor)" }
      }
    >
      <div className="p-2 rounded-lg backdrop-blur-sm text-center max-w-full">
        <h1 className="text-xl md:text-2xl">{t("listening")}</h1>
        <p>
          {music.isPlaying ? (
            <span>
              {music.songName} - {music.artist}
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
