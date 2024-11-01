import { getAnimeResponse } from "@/app/service/api-service"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async( { params : { id } } ) => {

    const anime = await getAnimeResponse(`anime/${id}`)
    console.log(anime)

    return(
        <>
        <h1>Anime Detail</h1>
        </>
    )
    
}

export default Page