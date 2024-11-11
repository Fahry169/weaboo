import AnimeList from "@/components/AnimeList";
// import TopAnime from "@/components/TopAnime";
import Header from "@/components/Utilities/Header";
import { getRandomAnime, reproduce } from "@/libs/api-libs";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");

  const newAnime = await getAnimeResponse("seasons/upcoming", "limit=10");
  console;

  let animeRandom = await getRandomAnime("recommendations/anime", "entry");
  animeRandom = reproduce(animeRandom, 5);

  return (
    <>
      <section>
        <Header
          title="Upcoming New Anime"
          desc="Check out the anime that will release soon!"
          TitleLink="View All"
          HrefLink="/upcoming-anime"
        />
        <AnimeList api={newAnime} />
      </section>

      {/* <section>
        <TopAnime
        api={topAnime.data}
        title="Highest Rating Anime"
        />
        ti
      </section> */}
      

      {/* anime rekomendasi */}
      {/* <section>
        <Header title="RANDOM ANIME" />
        <AnimeList api={animeRandom} />
      </section> */}
    </>
  );
};

export default Page;
