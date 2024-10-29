import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async() => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)

  const populerAnime =  await response.json() 

  return (

    <>
    <Header
      title="Anime Paling Populer"
      TitleLink="Kembali"
      HrefLink="/"/>
    <AnimeList 
      api={populerAnime}/>
    </>

  );
};

export default Page;
