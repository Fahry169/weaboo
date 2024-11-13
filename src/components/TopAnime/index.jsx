import React from "react";
import Link from "next/link";
import Image from "next/image";

const TopAnime = ({ api }) => {  
  return (
    <div className="max-w-[1100px] mx-auto px-4">
      <div className="space-y-4">
        {api.map((anime, index) => (
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
              <div className="flex">
                <div className="ml-4">
                  <Link
                    href={`/anime/${anime.mal_id}`}
                    className="text-white hover:text-gray-300"
                  >
                    <h3 className="font-medium text-base">{anime.title}</h3>
                  </Link>

                  <div className="flex flex-wrap gap-2 my-2">
                    {anime.genres?.map((genre) => (
                      <span
                        key={genre.name}
                        className="px-3 py-1 rounded-full text-xs text-white bg-blue-900"
                      >
                        {genre.name.toLowerCase()}
                      </span>
                    ))}
                  </div>
                </div>
                {/* <div className="flex items-center ">
                  <p>halo</p>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAnime;
