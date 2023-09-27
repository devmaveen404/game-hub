// 6, creating custom hook for fetching games
// incapsulates all logic like calling request and storing games
// paste logic from the GameGrid component

import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-clients";

interface Game {
    id: number;
    name: string;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
  

const useGames = () => {
    //hook to store games objects
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  // 5b
  // useEffect to send request to the backend
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal})
      .then(res => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)});

    return () => controller.abort()
  }, []);

  return {games, error}
}

export default useGames