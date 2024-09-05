//30, HOME PAGE LAYOUT  from app.tsx
import { Box, Flex, Grid,GridItem,Show } from '@chakra-ui/react'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import GameHeading from '../components/GameHeading'
import SortSelector from '../components/SortSelector'
import Gamegrid from '../components/Gamegrid'

const HomePage = () => {
  return (
    <Grid
      //  to define Grid, navbar is fixed
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`, // larger than 1024px
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
      <Show above="lg">
        {" "}
        {/* // renders on large screen and above */}
        <GridItem area="aside" paddingX={5}> 
          {" "}
          {/* 14c */}
          <GenreList/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}> {/* to align gameheading & platformselector */}
          <GameHeading/>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector/> 
            </Box> 
            <SortSelector/>
          </Flex>
        </Box>
        <Gamegrid
        // selectedPlatform={/*selectedPlatform*/ gameQuery.platform}
        // selectedGenre={/*selectedGenre*/ gameQuery.genre}
          // gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  )
}

export default HomePage