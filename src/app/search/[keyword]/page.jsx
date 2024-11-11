import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/Utilities/Header";

const Page = async ({ params }) => {
  const { keyword } = params;

  const searchAnime = await getAnimeResponse("anime", `q=${keyword}`);

  return (
    <>
      <section>
        <Header title={`SHOWING RESULT FOR ${decodeURIComponent(keyword)}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
