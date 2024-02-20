import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import styles from "@/styles/Header.module.css";
import LanguageSelector from "@/components/LanguageSelector";
import { useDeviceSpecificStyle } from "@/context/DeviceSpecificStyle";
import { useTranslation } from "react-i18next";

const Header = () => {
  const navRef = useRef(null);
  const { isAtTop, isMobile } = useDeviceSpecificStyle();
  const { t } = useTranslation();

  const collapse = () => {
    const nav = navRef.current;
    if (nav.classList.contains("hidden")) {
      nav.classList.remove("hidden");
      setTimeout(() => nav.classList.add(styles.popIn), 10);
    } else {
      nav.classList.add("hidden");
    }
  };

  return (
    <header
      className={`bg-secondary text-secondary-text p-1 fixed top-0 left-0 right-0 z-50 ${
        isMobile
          ? styles.headerAtTop
          : isAtTop
          ? styles.headerAtTop
          : styles.headerNotAtTop
      } ${styles.paddingTransition}`}
    >
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="inline-block flex-shrink-0 text-2xl">
          <Link href="/" className="no-underline">
            <span className="secondary-text font-bold">Ulises Viña</span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={collapse}
            className="px-2"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>
        </div>
        <nav
          ref={navRef}
          className={`w-full block flex-grow-0 lg:flex lg:items-center lg:w-auto justify-end hidden ${styles.navTransition}`}
        >
          <ul className="mt-3 text-sm sm:mt-0">
            <li>
              <Link href="/">
                <span className="block lg:inline lg:mt-0 m-3 py-2 hover:underline rounded-md">
                  {t("home")}
                </span>
              </Link>
              <Link href="/blog">
                <span className="block lg:inline lg:mt-0 m-3 py-2 hover:underline rounded-md">
                  Blog
                </span>
              </Link>
              <Link href="/contact">
                <span className="block lg:inline lg:mt-0 m-3 py-2 hover:underline rounded-md">
                  {t("contact")}
                </span>
              </Link>
            </li>
          </ul>
          <LanguageSelector />
        </nav>
      </div>
    </header>
  );
};

export default Header;
