import Link from "next/link";
import Image from "next/image";

const TopAnime = ({ api }) => {
  return (
    <div className="max-w-[1100px] mx-auto px-4">
      <div className="space-y-4">
        {api.data?.map((anime, index) => (
          <div key={anime.mal_id} className="flex items-center gap-4">
            <span className="text-white text-2xl font-semibold w-10 text-right">
              #{index + 1}
            </span>
            <div className="bg-gray-800 rounded-lg p-4 flex flex-1 items-center">
              <Link href={`/anime/${anime.mal_id}`} className="flex-shrink-0">
                <div className="h-16 w-16flex items-center justify-center rounded-sm overflow-hidden">
                  <Image
                    src={anime.images?.webp?.image_url}
                    alt={anime.title}
                    width={50}
                    height={40}
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="flex flex-row w-full ">
                <div className="ml-4 basis-1/2">
                  <Link
                    href={`/anime/${anime.mal_id}`}
                    className="text-white hover:text-gray-300"
                  >
                    <h3 className="font-medium text-sm">{anime.title}</h3>
                  </Link>

                  <div className="flex flex-wrap gap-2 my-2">
                    {anime.genres?.map((genre) => (
                      <span
                        key={genre.name}
                        className="px-2 py-0.5 rounded-full text-xs text-white bg-blue-900"
                      >
                        {genre.name.toLowerCase()}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex text-white mr-10 basis-1/2 justify-around text-center items-center gap-10">
                  <div className="space-y-1">
                    <p className="text-color-2 text-sm">Status</p>
                    <p className="text-sm">{anime.status}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-color-2 text-sm">{anime.type}</p>
                    <p className="text-sm">{anime.episodes} eps</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-color-2 text-sm">Rating</p>
                    <p className="text-sm">{anime.score}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAnime;
