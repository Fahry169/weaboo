import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 px-4 pt-3">
        {api.data?.map((data) => {
          return (
            <div>
              <Link
                href={`anime/${data.mal_id}`}
                className="cursor-pointer text-color-1 hover:text-black transition-all"
              >
                <Image
                  src={data.images.webp.image_url}
                  alt="List Anime"
                  width={250}
                  height={350}
                  className="w-64 mx-auto h-5/6 object-cover rounded"
                />
                <h3 className="font-bold md:text-lg text-md text-center line-clamp-1">
                  {data.title}
                </h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimeList;
