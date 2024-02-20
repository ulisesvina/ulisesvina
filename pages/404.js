import { useTranslation } from "react-i18next";

const custom404 = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-10">
      <h1 className="text-6xl font-bold">Error 404</h1>
      <h2 className="text-4xl mt-5">{t("404")}</h2>
    </div>
  );
};

export default custom404;
