"use client";

import AnimeList from "@/components/AnimeList";
import { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getAnimeResponse } from "@/app/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
      setData(populerAnime);
    };
    fetchData();
  }, [page]);

  return (
    <>
      <div>
        <HeaderMenu title={`Populer Anime #${page}`} />
        <AnimeList api={data} />
        <Pagination
          page={page}
          lastPage={data.pagination?.last_visible_page}
          setPage={setPage}
        />
      </div>
    </>
  );
};      

export default Page;
