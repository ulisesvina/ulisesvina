import { useTranslation } from "react-i18next";

const Achievements = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-secondary text-secondary-text p-4 px-8 rounded-xl flex flex-col justify-center">
      <h1 className="text-md uppercase font-bold">{t("achievements")}</h1>
      <ul className="list-disc">
        <li className="mt-2">{t("hackathons")}</li>
        <li className="mt-2">{t("conference")}</li>
        <li className="mt-2">{t("hackathonorg")}</li>
        <li className="mt-2">{t("workshop")}</li>
      </ul>
    </div>
  );
};

export default Achievements;
