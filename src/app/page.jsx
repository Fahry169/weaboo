import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/service/api-service";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header
          title="ALL TIME POPULAR"
          TitleLink="VIEW ALL"
          HrefLink="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
