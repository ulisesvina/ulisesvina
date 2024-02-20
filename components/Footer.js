import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bottom-0 w-screen p-2 md:p-3 text-center mt-10 bg-secondary text-secondary-text">
      <div className="grid grid-cols-2">
        <div className="w-full">
          © {new Date().getFullYear() + " "}
          Ulises Viña.
        </div>
        <div className="w-full">{t("footer")}</div>
      </div>
      <p className="my-2 text-xs">
        {t("license")} {" "}
        <a
          target="_BLANK"
          href="https://github.com/ulisesvina/ulisesvina/blob/master/LICENSE"
          rel="noreferrer"
        >
          <span className="underline">GNU General Public License 3.0</span>
        </a>
      </p>
      <ul>
        <li className="inline-block p-2">
          <a
            href="https://instagram.com/ulisesvina"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsInstagram className="icon" size={20} />
          </a>
        </li>
        <li className="inline-block p-2">
          <a
            href="https://twitter.com/ulisesvina"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaXTwitter className="icon" size={15} />
          </a>
        </li>
        <li className="inline-block p-2">
          <a
            href="https://github.com/ulisesvina"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsGithub className="icon" size={20} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
