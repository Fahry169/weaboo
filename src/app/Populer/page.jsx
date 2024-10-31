'use client'

import AnimeList from "@/components/AnimeList";
import React from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import Header from "@/components/AnimeList/Header";


const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?=page`
  );

  const topAnime = await response.json();

  return (
    <>
      <HeaderMenu
      title="Anime Paling Populer"/>
       <AnimeList api={topAnime}/>

    </>
  );
};

export default Page;
