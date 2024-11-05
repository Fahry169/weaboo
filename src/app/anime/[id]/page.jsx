

import { getAnimeResponse } from "@/libs/api-libs";
import YoutubeVideo from "@/components/Utilities/YoutubeVideo";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  
  return (
    <>
      <div className="max-w-[1100px] mx-auto">
        <div className="text-3xl font-bold border-b-8 border-navbar py-5">
          <h1>{anime.data?.title.english || anime.data?.title}</h1>
        </div>
        <div className="flex gap-10 py-5 md:flex-nowrap flex-wrap">
          <Image
            src={anime.data?.images.webp.image_url}
            alt={anime.data?.images.jpg.image_url}
            width={200}
            height={300}
          />
          <div>
            <h1 className="text-justify">{anime.data?.synopsis || "There is no synopsis."}</h1>
          </div>
        </div>
        <YoutubeVideo ytId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
