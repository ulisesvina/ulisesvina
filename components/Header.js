import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const navRef = useRef(null);

  const collapse = () => {
    navRef.current.classList.toggle("hidden");
  };

  return (
    <header className="top-0 sticky p-8 bg-white">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex-shrink-0 lg:mr-6">
          <Link href="/">
            <span className="text-3xl font-bold">Ulises Viña</span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={collapse}
            className="px-3 py-2 border rounded border-white-400"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>
        </div>
        <nav
          ref={navRef}
          className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden"
        >
          <ul className="lg:flex-grow">
            <li className="lg:inline-block">
              <Link href="/">
                <a className="block mt-4 lg:inline mr-4 lg:mt-0">Home</a>
              </Link>
            </li>
            <li className="lg:inline-block">
              <Link href="/blog">
                <a className="block mt-4 lg:inline mr-4 lg:mt-0">Blog</a>
              </Link>
            </li>
            <li className="lg:inline-block">
              <Link href="/contact">
                <a className="block mt-4 lg:inline lg:mt-0">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
