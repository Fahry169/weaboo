import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-slate-600">
        <div className="flex md:flex-row flex-col gap-4 text-center justify-between p-4">
          <Link href="/ " className="font-bold text-white text-2xl" >Weaboo</Link>
          <input placeholder="Cari Anime...." className="placeholder:text-black p-1 cursor-pointer rounded-md w-80 self-center" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
