import Link from "next/link";
import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-10 p-4 shadow md:p-6 bg-black">
      <div className="md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center">
          © {new Date().getFullYear() + " "}
          Ulises Viña.
        </span>
        <span className="text-white ml-2">Made with ❤️ in Mexico.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
          <li className="lg:inline-block">
            <Link href="/">
              <a className="mr-4 hover:underline md:mr-6">Home</a>
            </Link>
          </li>
          <li className="lg:inline-block">
            <Link href="/blog">
              <a className="mr-4 hover:underline md:mr-6">Blog</a>
            </Link>
          </li>
          <li className="lg:inline-block">
            <Link href="/contact">
              <a className="mr-4 hover:underline md:mr-6">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-white mt-2 text-sm">
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
