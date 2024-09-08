// 12(b), Custom hook for fetching genres
import APIClient from "../services/api-clients";
// import useData from "./useData";
import { useQuery } from '@tanstack/react-query'

// FetchGenreResponse has been defined as a generic interface in useData.tsx 
// interface FetchGenresResponse {
//   count: number;
//   results: Genre[]
// }


// fetching genre
// const useGenre = () => useData<Genre>("./genres")


// 23, shipping static genre data 
import GenreData from "../Data/GenreData";
import { Genre } from "../entities/Genre";
                           // same object as the react query object
// const useGenre = () => ({data: GenreData, isLoading: false, error: null })


// 26, passing reusable API Clients, import api-clients.ts
const apiClient = new APIClient<Genre>('/genres');

// export interface Genre {
//    id: number;
//    name: string;
//    image_background: string;
// }

//24, Fetching data with react query
const useGenre = () => useQuery({
   queryKey: ['genres'],
   queryFn: apiClient.getAll, // defined in api-clients
      // () => apiClient
      // .get<FetchResponse<Genre>>('/genres') // GenreList.tsx line 38
      // .then((res) => res.data),
   //staleTime: ms('24h')
   staleTime: 24 * 60 * 60 * 1000, //fetched data stays in cache for 24hrs
   initialData: { count: GenreData.length, results: GenreData, next: null}, // load GenreData instead of spinner
})


export default useGenre