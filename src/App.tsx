import react, { useState } from "react";
import { Box, Button, ButtonGroup, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Gamegrid from "./components/Gamegrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

// 18, Extracting Game Query Object, incapsulating state variables into one function(GameQuery)
export interface GameQuery { // export to GameGrid.tsx
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string
}

// 1, create a responsive layoutv
function App() {
  // 14a, Filtering games by genre, this involves by sharing two component by mapping them to their parent component (App.tsx)
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // store Genre[]
  // 17, filter platforms
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
// 18, incapsulate selectedGenre & selectedPlatform
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

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
        lg: "250px 1fr",
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
          <GenreList
            selectedGenre={ /*selectedGenre*/ gameQuery.genre}
            onSelectGenre={(genre) => /* setSelectedGenre(genre) */ setGameQuery({...gameQuery, genre})}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatform={/*selectedPlatform*/ gameQuery.platform}
              onSelectPlatform={(platform) => /*setSelectedPlatform(platform)*/ setGameQuery({...gameQuery, platform})}
            />
          </Box>
          <SortSelector sortOrder={gameQuery.sortOrder } onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
        </Flex>
        <Gamegrid
        // selectedPlatform={/*selectedPlatform*/ gameQuery.platform}
        // selectedGenre={/*selectedGenre*/ gameQuery.genre}
          gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
