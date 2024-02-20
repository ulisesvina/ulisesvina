import { useState } from "react";
import i18n from "@/i18n";
import { useDeviceSpecificStyle } from "@/context/DeviceSpecificStyle";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const { isAtTop, isMobile } = useDeviceSpecificStyle();

  const availableLangs = ["en", "es", "pt"];
  const langEmojis = new Map([
    [
      "en",
      {
        flag: "🇺🇸",
        label: "English",
      },
    ],
    [
      "es",
      {
        flag: "🇲🇽",
        label: "Español",
      },
    ],
    [
      "pt",
      {
        flag: "🇧🇷",
        label: "Português",
      },
    ],
  ]);

  const chooseLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
  };

  return (
    <>
      <div className="flex items-center">
        {availableLangs.map((lang) => (
          <button
            key={lang}
            onClick={() => chooseLanguage(lang)}
            className={`${
              lang === selectedLanguage
                ? "bg-tertiary text-tertiary-text"
                : "bg-primary text-primary-text hover:px-3 hover:bg-tertiary"
            } py-1 px-2 rounded-lg mx-1 transition-all duration-500 ease-in-out`}
          >
            {lang === selectedLanguage && (isAtTop || isMobile) ? (
              <div className="p-1 px-2 rounded">
                <span className="emoji">{langEmojis.get(lang).flag}</span>{" "}
                <span>{langEmojis.get(lang).label}</span>
              </div>
            ) : (
              <span className="emoji">{langEmojis.get(lang).flag}</span>
            )}
          </button>
        ))}
      </div>
    </>
  );
};

export default LanguageSelector;
