export const getAnimeResponse = async (resource, query) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
    );
    if (!res.ok) throw new Error(`Error: ${res.status} ${res.statusText}`);
    const anime = await res.json();
    return anime;
  } catch (error) {
    console.error("Failed to fetch anime response:", error);
    return null;
  }
};

// export const getRandomAnime = async (resource, objectProperty) => {
//   try {
//     const res = await getAnimeResponse(resource);
//     if (!res || !res.data) throw new Error("Data not found in response");
//     return res.data.flatMap((item) => item[objectProperty]);
//   } catch (error) {
//     console.error("Failed to get random anime:", error);
//     return [];
//   }
// };

// export const reproduce = (data, gap) => {
//   try {
//     if (!Array.isArray(data) || data.length < gap) {
//       throw new Error("Invalid data array or gap");
//     }
//     const first = Math.floor(Math.random() * (data.length - gap) + 1);
//     const last = first + gap;

//     return {
//       data: data.slice(first, last),
//     };
//   } catch (error) {
//     console.error("Failed to reproduce data:", error);
//     return { data: [] };
//   }
// };
