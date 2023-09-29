// 6, creating custom hook for fetching games
// incapsulates all logic like calling request and storing games
// paste logic from the GameGrid component

import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-clients";
import { Genre } from "./useGenre";
import useData from "./useData";

 // 7, Displaying platform icons
export interface Platform { 
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform}[] // array of platform objects with each plaform having Platform array
    metacritic: number;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
  
//(a) generic hook for fetching games 13                                    ,14d filter genre, request                , dependencies
const useGames = (selectedGenre: Genre | null ) => useData<Game>("./games", { params: { genres: selectedGenre?.id}}, [selectedGenre?.id])







//(b)
const /*useGames*/ u = () => {

  //hook to store games objects
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  // 10, Loading skeletons
  const [isLoading, setLoading] = useState(false)

  // 5b
  // useEffect to send request to the backend
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true)
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal})
      .then(res => {
        setGames(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false)
       });

    return () => controller.abort()
  }, []);

  return {games, error, isLoading}
}

export default useGames