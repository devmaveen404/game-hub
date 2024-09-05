// 22, Adding dynamic heading
import { Heading } from "@chakra-ui/react";
import React from "react";
// import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";


const GameHeading = () => {

  // 34, Zustand store
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const platformId = useGameQueryStore(s => s.gameQuery.platformId)

  // 28, calling useGenre hook to get genreId
  const { data: genres } = useGenre();
  const genre = genres?.results.find((g) => g.id === genreId);

  // const { data } = usePlatforms()
  // const platform = data?.results.find(p => p.id === gameQuery.platformId)
  const platform = usePlatform(platformId); // lookup hook, usePlatform.ts

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
