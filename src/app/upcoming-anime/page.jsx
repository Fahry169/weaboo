import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const newAnime = await getAnimeResponse("seasons/upcoming");

  return (
    <>
      <HeaderMenu title="Upcoming Anime"/>
      <AnimeList api={newAnime} />
    </>
  );
};

export default Page;
