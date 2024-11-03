import { getAnimeResponse } from "@/service/api-service";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;

  const searchAnime = await getAnimeResponse("anime", `q=${keyword}`);

  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${decodeURIComponent(keyword)}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
