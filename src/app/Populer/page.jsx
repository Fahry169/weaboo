"use client";

import AnimeList from "@/components/AnimeList";
import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";

const Page = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    const topAnime = await response.json();
    setData(topAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Populer Anime #${page}`} />
      <AnimeList api={data} />
      <Pagination
        page={page}
        lastPage={data.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
