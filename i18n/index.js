import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTrans from "@/locales/en/translation.json";
import esTrans from "@/locales/es/translation.json";
import ptTrans from "@/locales/pt/translation.json";

const resources = {
  en: {
    translation: enTrans,
  },
  es: {
    translation: esTrans,
  },
  pt: {
    translation: ptTrans,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    ns: "translation",
    defaultNS: "translation",
  });

export default i18n;
