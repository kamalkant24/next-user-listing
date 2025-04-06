import Link from "next/link";

export default function Navbar() {
   
  return (
    <nav className=" top-0 bg-white  z-50">
      <ul className="flex space-x-6">
        <li>
          <Link
            href="/"
            className={`hover:text-gray-600 transition delay-150 duration-300 ease-in-out `}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/users"
            className={`hover:text-gray-600 transition delay-150 duration-300 ease-in-out`}
          >
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
}
