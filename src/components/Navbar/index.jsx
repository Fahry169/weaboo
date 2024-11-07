"use client";

import Link from "next/link";
import InputSearch from "./InputSearch";
import { UserCircle } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-navbar">
        <div className="flex md:flex-row flex-col gap-4 justify-between md:items-center py-5 mx-4 ml-8">
          <Link href="/ " className="font-bold text-2xl text-white">
            Weaboo
          </Link>
          <div className="flex gap-3">
          <InputSearch />
          <UserCircle size={28} color="white" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
