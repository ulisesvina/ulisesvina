import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

import Links from "@/components/Links";

const Footer = () => {
  return (
    <footer className="bottom-0 w-screen p-2 md:p-3 text-center mt-10 secondary-bg secondary-text">
      <div className="md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
          © {new Date().getFullYear() + " "}
          Ulises Viña.
        </span>
        <span>Made with ❤️ in Mexico.</span>
        <Links />
      </div>
      <div className="mt-2 text-sm">
        Licensed under the GNU General Public License version 3.0.
        <ul className="mt-2">
          <li className="inline-block p-2">
            <a
              href="https://instagram.com/ulisesvina"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsInstagram className="icon" size={15} />
            </a>
          </li>
          <li className="inline-block p-2">
            <a
              href="https://twitter.com/ulisesvina"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsTwitter className="icon" size={15} />
            </a>
          </li>
          <li className="inline-block p-2">
            <a
              href="https://github.com/ulisesvina"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsGithub className="icon" size={15} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
