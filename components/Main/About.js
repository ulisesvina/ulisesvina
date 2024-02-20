import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const About = () => {
  const calcAge = () =>
    ((new Date() - new Date("2006-08-09")) / 31557600000).toFixed(9);
  
  const [age, setAge] = useState(17);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calcAge());
    }, 100);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="bg-secondary text-secondary-text p-4 px-6 rounded-xl flex flex-col justify-center">
      <h1 className="text-md uppercase font-bold">{t("about")}</h1>
      <span className="">{t("semblance", { age })}</span>
      <a
        href="/Resume.pdf"
        target="_blank"
        className="block mt-5 bg-tertiary text-tertiary-text w-full rounded text-center text-lg p-2 hover:bg-secondary hover:text-secondary-text"
      >
        {t("resume")}
      </a>
    </div>
  );
};

export default About;
