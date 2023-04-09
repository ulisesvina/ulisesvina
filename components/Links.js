import Link from "next/link";

const Links = () => {
  return (
    <ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
      <li className="lg:inline-block">
        <Link href="/">
          <span className="block inline lg:mt-0 m-3 py-2 hover:underline rounded-md">
            Home
          </span>
        </Link>
        <Link href="/blog">
          <span className="block inline lg:mt-0 m-3 py-2 hover:underline rounded-md">
            Blog
          </span>
        </Link>
        <Link href="/contact">
          <span className="block inline lg:mt-0 m-3 py-2 hover:underline rounded-md">
            Contact
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default Links;
