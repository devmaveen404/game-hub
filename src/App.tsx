// Managing state with Zustand; replacing every state with store
import { useState } from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Show,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Gamegrid from "./components/Gamegrid";
import GenreList from "./components/GenreList";
import { Genre } from "./entities/Genre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./entities/Platform";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

// 18, Extracting Game Query Object, incapsulating state variables into one function(GameQuery)
interface GameQuery {
  // export to GameGrid.tsx
  genreId: number | undefined; //getting genre id instead of the the genre whole genre interface
  platformId?: number; //Platform | null;
  sortOrder: string;
  searchText: string;
}

// 1, create a responsive layout
function App() {
  // 14a, Filtering games by genre, this involves by sharing two component by mapping them to their parent component (App.tsx)
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // store Genre[]
  // 17, filter platforms
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  // 18, incapsulate selectedGenre & selectedPlatform
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery) //store.tsx

  return (
    <Grid
      //  to define Grid
      templateAreas={{
        base: `"nav"  "main"`,
        lg: `"nav nav"  "aside main"`, // larger than 1024px
      }}
      width="100%"
      // to define width; ths grid has 2 columns
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {" "}
      {/* page layout */}
      <GridItem area="nav" bg="none">
        <Navbar />
      </GridItem>
      <Show above="lg">
        {" "}
        {/* // renders on large screen and above */}
        <GridItem area="aside" paddingX={5}>
          {" "}
          {/* 14c */}
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          {" "}
          {/* to align gameheading & platformselector */}
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <Gamegrid
        // selectedPlatform={/*selectedPlatform*/ gameQuery.platform}
        // selectedGenre={/*selectedGenre*/ gameQuery.genre}
        // gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
