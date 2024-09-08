// 33, Feteching a game using game slug
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import { Game } from "../entities/Game";

// creating an instance since APIClient is  export as a class
const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) =>
  useQuery({
   // passing a second argument to queryKey to fetch data when a different slug is selected
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;  
