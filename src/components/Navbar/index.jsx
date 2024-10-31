'use client'

import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-amber-400">
      <nav className="">
        <div className="flex md:flex-row flex-col gap-4 justify-between p-4 pl-8">
          <Link href="/ " className="font-bold text-2xl text-center text-black" >Weaboo</Link>
          <InputSearch/>
        </div>
      </nav>
    </header> 
  );
};

export default Navbar;
