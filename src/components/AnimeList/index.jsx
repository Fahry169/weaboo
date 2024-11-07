"use client";

import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-8 px-4 mb-8">
        {api.data?.map((data) => {
          return (
            <div
              key={data.mal_id}
              className="cursor-pointer hover:brightness-75 transition-all"
            >
              <Link
                href={`/anime/${data.mal_id}`}
                className="text-color-1 hover:text-black"
              >
                <div className="relative aspect-[2/3] w-full">
                  <Image
                    src={data.images.webp.image_url}
                    alt={`${data.title} Cover`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover rounded"
                  />
                </div>
                <h3 className="text-sm font-medium mt-2">
                  {data.title_english || data.title}
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
