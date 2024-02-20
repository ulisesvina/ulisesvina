import { useTranslation } from "react-i18next";

const About = ({ age }) => {
  const { t } = useTranslation();

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
