"use client";

import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-navbar">
        <div className="flex md:flex-row flex-col gap-4 justify-between md:items-center py-5 mx-4 ml-8">
          <Link href="/ " className="font-bold text-2xl text-white">
            Weaboo
          </Link>
          <InputSearch />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
