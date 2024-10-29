import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-7 px-8 pt-5">
      {api.data.map((data) => {
        return (
          <Link href={`${data.mal_id}`} className="cursor-pointer text-white">
            <Image
              src={data.images.webp.image_url}
              alt="..."
              width={350}
              height={350}
              className="w-96 h-5/6 object-cover"
            />
            <h3 className="font-bold md:text-xl text-md p-1.5 text-center line-clamp-1">
              {data.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
