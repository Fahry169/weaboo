import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getRandomAnime, reproduce } from "@/libs/api-libs";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");

  let animeRandom = await getRandomAnime("recommendations/anime", "entry");
  animeRandom = reproduce(animeRandom, 5);  

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header
          title="ALL TIME POPULAR"
          TitleLink="View All"
          HrefLink="/populer"
        />
        <AnimeList api={topAnime} />
      </section>

      {/* anime rekomendasi */}
      {/* <section>
        <Header title="RANDOM ANIME" />
        <AnimeList api={animeRandom} />
      </section> */}
    </>
  );
};

export default Page;
