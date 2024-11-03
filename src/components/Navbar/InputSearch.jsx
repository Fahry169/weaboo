"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    if (!inputValue || inputValue.trim() == "") return;

    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${inputValue}`);
    }
  };

  const handleInputUser = (e) => {
    const value = e.target.value;
    const capitalizedValue = value
      ? value.charAt(0).toUpperCase() + value.slice(1)
      : "";
    setInputValue(capitalizedValue);
  };

  return (
    <div className="relative">
      <input
        placeholder="Cari Anime...."
        className="placeholder:text-black p-1 cursor-pointer rounded md:w-64 w-full"
        ref={searchRef}
        onKeyDown={handleSearch}
        onChange={handleInputUser}
      />
      <button className="absolute end-2 top-1" onClick={handleSearch}>
        <MagnifyingGlass size={22} />
      </button>
    </div>
  );
};

export default InputSearch;
