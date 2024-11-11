"use client";

import { Star } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-8 px-4 mb-8">
        {api.data?.map((data) => {
          return (
            <div key={data.mal_id}>
              <Link href={`/anime/${data.mal_id}`}>
                <div className="relative group">
                  <div className="relative aspect-[2/3] w-full">
                    <Image
                      src={data.images.webp.image_url}
                      alt={`${data.title} Cover`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover rounded"
                    />

                    <div className="absolute inset-0 bg-gray-800 hover:scale-x-110 hover:scale-y-105 opacity-0 group-hover:opacity-95 transition-all duration-200 rounded px-3 py-5 flex flex-col gap-2">
                      <div>
                        <div className="text-xs text-color-2">Studio by</div>
                        <div className="text-white">
                          {data.studios?.[0]?.name || "Unknown"}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-color-2">Status</p>
                        <div className="text-sm text-white">
                          {data.status || "-"}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-color-2">Genre</p>
                        <div className="flex flex-wrap gap-2 mt-1.5">
                          {data.genres?.slice(0, 4).map((genre) => (
                            <div
                              key={genre.mal_id}
                              className="bg-color-1 text-white px-2 py-1 rounded text-xs"
                            >
                              {genre.name.toLowerCase()}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-color-2">Score</p>
                        <div className="flex gap-1 text-base items-center text-white">
                          <Star size={17} weight="fill" color="orange" />
                          {data.score || "-"}
                        </div>
                      </div>

                      <button className="absolute right-0 bottom-0 px-4 py-2 m-2 rounded-xl bg-color-1 text-white text-sm">
                        More
                      </button>
                    </div>
                  </div>
                  <h3 className="text-sm font-medium mt-2 line-clamp-2 text-white group-hover:text-color-2 transition-colors duration-200 py-1">
                    {data.title_english || data.title}
                  </h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimeList;
