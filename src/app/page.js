import AnimeList from "@/components/AnimeList";
import Link from "next/link";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const anime = await response.json();

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="md:text-2xl text-xl font-bold">Anime Paling Populer</h1>
        <Link href="/populer" className="md:text-2xl text-lg hover:underline">
          Lihat Semua
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-7 p-4">
        {anime.data.map((data) => {
          return (
            <div>
              <AnimeList
                title={data.title}
                images={data.images.webp.image_url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
