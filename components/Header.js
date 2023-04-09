import { useRef } from "react";
import { FaBars } from "react-icons/fa";

import Links from "@/components/Links";
import Link from "next/link";

const Header = () => {
  const navRef = useRef(null),
    collapse = () => navRef.current.classList.toggle("hidden");

  return (
    <header className="secondary-bg secondary-text p-2 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="inline-block flex-shrink-0 text-2xl">
          <Link href="/" className="no-underline">
            <span className="secondary-text">Ulises Viña</span>
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
          className="w-full block flex-grow-0 lg:flex lg:items-center lg:w-auto justify-end hidden"
        >
          <Links />
        </nav>
      </div>
    </header>
  );
};

export default Header;
