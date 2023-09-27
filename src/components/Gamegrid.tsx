
import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";


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

  const {games, error} = useGames()

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
