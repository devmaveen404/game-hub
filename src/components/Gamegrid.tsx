import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames /* , { Platform } */ from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
// import { GameQuery } from "../App";
import React from "react";
import { SyncLoader } from "react-spinners";

// 14d
// interface Props {
//   gameQuery: GameQuery; //18
//   // selectedGenre: Genre | null;
//   // selectedPlatform: Platform | null;
// }

const Gamegrid = (/*selectedGenre, selectedPlatform*/) => {
  // //hook to store games objects
  // const [games, setGames] = useState<Game[]>([]);
  // const [error, setError] = useState("");

  // // 5b
  // // useEffect to send request to the backend
  // useEffect(() => {
  //   apiClient
  //     .get<FetchGamesResponse>("/games")
  //     .then(res => setGames(res.data.results)) // shape of response object
  //     .catch(err => setError(err.message));
  // }, []);  export to useGames

  // 14d, passing selectedgenre to useGames, useGames is modified to take in selectedGenre

  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(/*selectedGenre, selectedPlatform gameQuery*/);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //10, loading skeletons

  if (error) return <Text>{error.message}</Text>;

  //28, infinte scroll
  // Games fetched so far
  // const fetchGamesCount =
  //   data?.pages.reduce(
  //     (total, page) => total + page.results.length,
  //     /*inital value*/ 0
  //   ) || 0; // default value

  // columns to set no of columns in layout
  return (
    // <InfiniteScroll
    //   dataLength={fetchGamesCount}
    //   hasMore={!!hasNextPage} // !! to convert undefined into boolean false
    //   next={() => fetchNextPage()} // next page
    //   loader={<Spinner />} // while loading
    // >
    <Box padding="10px" position={'relative'}>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            // to pass styles dynamically, wrap the card component in the styles component
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {/* infinite queries */}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
        {/* {data?.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer> */}
        {/* ))} */}
      </SimpleGrid>
      {hasNextPage &&
        <Box display="flex" justifyContent="center" alignItems="center" my={8}>
          <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? (
              <SyncLoader size={5} color="white" />
            ) : (
              'Load More'
            )}
          </Button>
        </Box>}
    </Box>
    // </InfiniteScroll>
  );
};

export default Gamegrid;
