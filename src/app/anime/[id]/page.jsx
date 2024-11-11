"use client";

import { getAnimeResponse } from "@/libs/api-libs";
import YoutubeVideo from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import { Calendar, Clock, Play, Star } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const Page = ({ params: { id } }) => {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const fetchData = async () => {
    const animeAPI = await getAnimeResponse(`anime/${id}`);
    setAnime(animeAPI);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="relative w-full h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={anime.data?.images.webp.large_image_url}
            alt="background"
            fill
            className="object-cover opacity-20 blur-sm"
          />
          <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative max-w-[1100px] mx-auto h-full flex items-end pb-10">
          <div className="flex gap-8">
            <div className="relative w-[220px] aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={
                  anime.data?.images.webp.large_image_url ||
                  anime.data?.images.webp.image_url
                }
                alt={anime.data?.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">
                {anime.data?.title.english || anime.data?.title}
              </h1>
              <div className="flex gap-6 text-sm mb-4 ">
                {anime.data?.score && (
                  <div className="flex items-center gap-2">
                    <Star size={20} weight="fill" color="orange" />
                    <span>{anime.data.score} / 10</span>
                  </div>
                )}
                {anime.data?.aired?.from && (
                  <div className="flex items-center gap-2">
                    <Calendar size={21} />
                    <span>{new Date(anime.data.aired.from).getFullYear()}</span>
                  </div>
                )}
                {anime.data?.duration && (
                  <div className="flex items-center gap-2">
                    <Clock size={22} />
                    <span>{anime.data.duration}</span>
                  </div>
                )}
                {anime.data?.episodes && (
                  <div className="flex items-center gap-2">
                    <Play size={18} />
                    <span>{anime.data.episodes} Episodes</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {anime.data?.genres?.map((genre) => (
                  <span
                    key={genre.mal_id}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto py-10">
        <div className="grid md:grid-cols-[1fr_300px] gap-10">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Synopsis</h2>
              <p className="text-white text-justify leading-relaxed">
                {anime.data?.synopsis || "No synopsis available."}
              </p>
            </section>

            {anime.data?.trailer?.youtube_id && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Trailer</h2>
                <div className="rounded-lg overflow-hidden">
                  <YoutubeVideo ytId={anime.data.trailer.youtube_id} />
                </div>
              </section>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <h3 className="font-bold text-lg">Information</h3>
              <div className="space-y-3">
                {anime.data?.status && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status</span>
                    <span className="font-medium">{anime.data.status}</span>
                  </div>
                )}

                {anime.data?.rating && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating</span>
                    <span className="font-medium">-</span>
                  </div>
                )}

                {anime.data?.season && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Season</span>
                    <span className="font-medium capitalize">
                      {anime.data.season} {anime.data.year}
                    </span>
                  </div>
                )}

                {anime.data?.studios?.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Studio</span>
                    <span className="font-medium">
                      {anime.data.studios[0].name}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {(anime.data?.rank || anime.data?.popularity) && (
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <h3 className="font-bold text-lg">Rankings</h3>
                <div className="grid grid-cols-2 gap-4">
                  {anime.data?.rank && (
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-blue-500">
                        #{anime.data.rank}
                      </div>
                      <div className="text-sm text-gray-600">Ranked</div>
                    </div>
                  )}
                  {anime.data?.popularity && (
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-pink-500">
                        #{anime.data.popularity}
                      </div>
                      <div className="text-sm text-gray-600">Popularity</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
