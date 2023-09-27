import React, { useEffect, useState } from "react";
import apiClient from "../services/api-clients";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const Gamegrid = () => {
  //hook to store games objects
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  // 5b
  // useEffect to send request to the backend
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then(res => setGames(res.data.results))
      .catch(err => setError(err.message));
  }, []);

  return (
  <>
    {error && <Text>{error}</Text>}
    <ul>
      {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
  </>
  )
};

export default Gamegrid;
