import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";

// 14d
interface Props {
  selectedGenre: Genre | null;
}

const Gamegrid = ({ selectedGenre }: Props) => {
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

  // 14d, passing selectedgenre to useGames, useGames is modified to take in selectedGenre

  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //10, loading skeletons

  return (
    <>
      {error && <Text>{error}</Text>}
      {/* columns to set no of columns in layout */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={4}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            // to pass styles dynamically, wrap the card component in the styles component
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Gamegrid;
