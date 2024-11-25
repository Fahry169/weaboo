import AnimeList from "@/components/AnimeList";
import TopAnime from "@/components/TopAnime";
import Banner from "@/components/Utilities/Banner";
import Header from "@/components/Utilities/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const airingAnime = await getAnimeResponse("seasons/now", "limit=10");
  const newAnime = await getAnimeResponse("seasons/upcoming", "limit=10");
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  

  // let animeRandom = await getRandomAnime("recommendations/anime", "entry");
  // animeRandom = reproduce(animeRandom, 5);

  return (
    <>
      <section>
        <Banner/>
      </section>


      <section>
        <Header
          title="Airing Anime"
          desc="Dive into the latest episodes of anime currently on air!"
          TitleLink="View All"
          HrefLink="/airing-anime"
        />
        <AnimeList api={airingAnime} />
      </section>

      <section>
        <Header
          title="Upcoming New Anime"
          desc="Check out the anime that will release soon!"
          TitleLink="View All"
          HrefLink="/upcoming-anime"
        />
        <AnimeList api={newAnime} />
      </section>

      <section>
        <Header
          title="Highest Anime Rating"
          desc="Discover the top-rated anime at the time!"
          TitleLink="View All"
          HrefLink="/populer"
        />
        <TopAnime api={topAnime} />
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
