"use client";

import { Browsers, Star } from "@phosphor-icons/react";
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
                <div className="relative w-full">
                  <Image
                    src={data.images.webp.image_url}
                    alt={`${data.title} Cover`}
                    priority
                    width={400}
                    height={600}
                    className="object-cover rounded w-full h-auto"
                  />
                </div>
                <h3 className="text-sm font-medium mt-2 line-clamp-1">
                  {data.title_english || data.title}
                </h3>
                <div className="justify-between flex items-center text-sm pt-1">
                  <div className="flex gap-1 items-center">
                    <Browsers size={20} weight="bold" color="#2b2d42" />
                    <p>
                      {data.episodes || <span className="font-bold">-</span>}
                    </p>
                  </div>
                  <div className="flex gap-0.5 items-center">
                    <Star size={18} weight="fill" color="#F3C623" />
                    <p>{data.score || "-"}</p>
                  </div>
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
