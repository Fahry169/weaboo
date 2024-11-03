export const getAnimeResponse = async (resource, query) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await res.json();
  return anime;
};

export const getRandomAnime = async (resource, objectProperty) => {
  const res = await getAnimeResponse(resource)
  return res.data.flatMap(item => item[objectProperty])
}