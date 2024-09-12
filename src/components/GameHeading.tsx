// 22, Adding dynamic heading
import { Heading } from "@chakra-ui/react";
// import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";
import useConsoles from "../hooks/useConsoles";
// specific platforms like ps5, ps4.. etc
import { platform } from "../entities/Console";
import { useMemo } from "react";

const GameHeading = () => {

  // 34, Zustand store
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const platformId = useGameQueryStore(s => s.gameQuery.platformId)
  const consoleId = useGameQueryStore(c => c.gameQuery.consoleId)

  // 28, calling useGenre hook to get genreId
  const { data: genres } = useGenre();
  const genre = genres?.results.find((g) => g.id === genreId);

  // const { data } = usePlatforms()
  // const platform = data?.results.find(p => p.id === gameQuery.platformId)
  const platform = usePlatform(platformId); // lookup hook, usePlatform.ts

  // consoles data
  const { data: consoles } = useConsoles()

  //return all the children platforms in the results array
  const allChildPlatforms = consoles?.results.reduce<platform[]>((acc, Console) => {
    // Merge all child platform arrays into a single array
    return acc.concat(Console.platforms);
  }, []);
  const gameConsole = allChildPlatforms?.find((c) => c.id === consoleId);


  // Memoized heading calculation for performance optimization
  const heading = useMemo(() => {
    if (gameConsole?.name) return `All ${gameConsole.name} Games`;
    if (platform?.name && !genre?.name) return `All ${platform.name} Games`;
    if (genre?.name && !platform?.name) return `All ${genre.name} Games`;
    if (platform?.name && genre?.name) return `All ${platform.name} ${genre.name} Games`;
    return "All Games";
  }, [gameConsole, platform, genre]);

  return (
    <>
      <Heading as={"h1"} marginBottom={5} fontSize={"6xl"}>
        {heading}
      </Heading>
    </>
  );
};

export default GameHeading;
