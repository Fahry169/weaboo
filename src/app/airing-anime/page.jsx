"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const airingAnime = await getAnimeResponse("seasons/now");
  return (
    <>
      <HeaderMenu title="Airing Anime" />
      <AnimeList api={airingAnime} />
    </>
  );
};

export default Page;
