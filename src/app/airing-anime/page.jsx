"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import { getAnimeResponse } from "@/app/libs/api-libs";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

const Page = () => {
  const [airingAnime, setAiringAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const api = await getAnimeResponse("seasons/now", { cache: "no-store" });
      
      setAiringAnime(api);
      setIsLoading(false);
    };
    fetchData();
  }, []);



  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <HeaderMenu title="Airing Anime" />
          <AnimeList api={airingAnime} />
        </div>
      )}
    </>
  );
};

export default Page;
