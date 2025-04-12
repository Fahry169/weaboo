"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import { getAnimeResponse } from "@/app/libs/api-libs";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

const Page = () => {
  const [newAnime, setNewAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const api = await getAnimeResponse("seasons/upcoming", {
        cache: "no-store",
      });
      setNewAnime(api);
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
          <HeaderMenu title="Upcoming Anime" />
          <AnimeList api={newAnime} />
        </div>
      )}
    </>
  );
};

export default Page;
