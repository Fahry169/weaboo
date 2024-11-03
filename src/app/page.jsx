import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getRandomAnime } from "@/service/api-service";
import { getAnimeResponse } from "@/service/api-service";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let animeRandom = await getRandomAnime("recommendations/anime", "entry");
  animeRandom = { data: animeRandom.slice(0, 8)};

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

      {/* anime rekomendasi */}
      <section>
        <Header title="RANDOM ANIME" />
        <AnimeList api={animeRandom} />
      </section>
    </>
  );
};

export default Page;
