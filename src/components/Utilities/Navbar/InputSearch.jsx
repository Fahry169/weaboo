import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (e) => {
    if (!inputValue || inputValue.trim() == "") return;

    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${inputValue}`);
      setIsSearchOpen(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const capitalizedValue = value
      ? value.charAt(0).toUpperCase() + value.slice(1)
      : "";
    setInputValue(capitalizedValue);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        searchRef.current?.focus();
      }, 100);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        !event.target.closest("button")
      ) {
        setIsSearchOpen(false);
      }
    };  

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center">
      {isSearchOpen ? (
        <div className="flex items-center animate-fadeIn">
          <input
            placeholder="Cari Anime...."
            className="placeholder:text-black p-1 cursor-pointer rounded md:w-64 w-full 
                     transition-all duration-300 ease-in-out"
            ref={searchRef}
            onKeyDown={handleSearch}
            onChange={handleInputChange}
          />
          <button
            className="ml-2 p-1 hover:bg-gray-200 rounded-full transition-colors"
            onClick={() => setIsSearchOpen(false)}
          >
            <X size={22} color="white"/>
          </button>
        </div>
      ) : (
        <button
          className="p-1 hover:bg-gray-200 rounded-full transition-colors"
          onClick={toggleSearch}
        >
          <MagnifyingGlass size={22} color="white" weight="bold" />
        </button>
      )}
    </div>
  );
};

export default InputSearch;
