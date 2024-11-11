"use client";

import Link from "next/link";
import InputSearch from "./InputSearch";
import { UserCircle } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <header className="bg-navbar/70 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="flex gap-4 justify-between md:items-center py-4 mx-4 ml-8">
        <Link href="/ " className="font-semibold text-2xl text-white">
          Weaboo
        </Link>
        <div className="flex gap-3 items-center">
          <InputSearch />
          <UserCircle size={25} color="white" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;