import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );

  const topAnime = await response.json();

  return (
    <>

      {/* anime terpopuler */}
      <section>
        <Header
          title="Paling Populer"
          TitleLink="Show All"
          HrefLink="/ppopuler"
        />
        <AnimeList api={topAnime} />
      </section>
      
      
    </>
  );
};

export default Page;
