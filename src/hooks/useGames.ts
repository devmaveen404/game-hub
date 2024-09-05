// 6, creating custom hook for fetching games
// incapsulates all logic like calling request and storing games
// paste logic from the GameGrid component

import { useEffect, useState } from "react";
import APIClient, { CanceledError } from "../services/api-clients";
import { Genre } from "../entities/Genre";
import { FetchResponse } from "../services/api-clients";
// import { GameQuery } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query"
import useGameQueryStore from "../store";
import { Game } from "../entities/Game"; //entitiies

 // 7, Displaying platform icons
// export interface Platform {  // import from usePlatforms
//     id: number;
//     name: string;
//     slug: string;
// }

// 26, Fetching games with react query
const apiClient = new APIClient<Game>('/games');

// export interface Game {
//     id: number;
//     name: string;
//     slug: string;
//     description_raw: string;
//     background_image: string;
//     parent_platforms: { platform: Platform}[] // array of platform objects with each plaform having Platform array
//     metacritic: number;
//     rating_top: number;
//   }

  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

  // 25, Fetching games with react query
  const useGames = () => {

    // Zustand Store
    const gameQuery = useGameQueryStore(s => s.gameQuery)
    // 27, implement infinite queries
    return useInfiniteQuery<FetchResponse<Game>, Error>({
      queryKey: ['games', gameQuery],
      queryFn: ({ pageParam = 1 }) => apiClient.getAll({ //infinte query
          params: { genres:  gameQuery.genreId, //selectedGenre, gameQuery.genre?.id, 
            parent_platforms: /*selectedPlatform*/gameQuery.platformId, 
            ordering: gameQuery?.sortOrder, 
            search: gameQuery.searchText,
            page: pageParam,
          },
        }),
        getNextPageParam: (lastPage, allPages) => {
          return lastPage.next ? allPages.length + 1 : undefined // next page no
        },
        staleTime: 24 * 60 * 60 * 1000
    })
  }
  
    //     apiClient.get<FetchResponse<Game>>('/games', {
    //       params: { genres: /*selectedGenre*/gameQuery.genre?.id, 
    //       parent_platforms: /*selectedPlatform*/gameQuery.platform?.id, 
    //       ordering: gameQuery?.sortOrder, 
    //       search: gameQuery.searchText}
    //     })
    //     .then(res => res.data)
    // })  // GameGrid.tsx
    
  
//(a) generic hook for fetching games 13            ,14d filter genre, request                , dependencies
// const useGames = 
//     (/* selectedGenre: Genre | null, selectedPlatform: Platform | null**/ gameQuery: GameQuery ) => 
//     useData<Game>("./games", 
//     {
//       params: { genres: /*selectedGenre*/gameQuery.genre?.id, 
//       platforms: /*selectedPlatform*/gameQuery.platform?.id, 
//       ordering: gameQuery?.sortOrder, 
//       search: gameQuery.searchText}
//     }, 
//     [/*selectedGenre?.id, selectedPlatform?.id*/ gameQuery])







//(b)
// const /*useGames*/ u = () => {

//   //hook to store games objects
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   // 10, Loading skeletons
//   const [isLoading, setLoading] = useState(false)

//   // 5b
//   // useEffect to send request to the backend
//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true)
//     apiClient
//       .get<FetchGamesResponse>("/games", { signal: controller.signal})
//       .then(res => {
//         setGames(res.data.results)
//         setLoading(false)
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message)
//         setLoading(false)
//        });

//     return () => controller.abort()
//   }, []);

//   return {games, error, isLoading}
// }

 export default useGames