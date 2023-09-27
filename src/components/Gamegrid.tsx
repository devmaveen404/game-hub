import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const Gamegrid = () => {
  // //hook to store games objects
  // const [games, setGames] = useState<Game[]>([]);
  // const [error, setError] = useState("");

  // // 5b
  // // useEffect to send request to the backend
  // useEffect(() => {
  //   apiClient
  //     .get<FetchGamesResponse>("/games")
  //     .then(res => setGames(res.data.results))
  //     .catch(err => setError(err.message));
  // }, []);  export to useGames

  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      {/* columns to set no of columns in layout */}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding="10px" spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Gamegrid;
