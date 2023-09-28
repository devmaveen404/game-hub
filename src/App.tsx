import react from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Gamegrid from "./components/Gamegrid";
import GenreList from "./components/GenreList";
// 1, create a responsive layout
function App() {
  return (
    <Grid
    //  to define Grid
      templateAreas={{
        base: `"nav"  "main"`,
        lg: `"nav nav"  "aside main"`, // larger than 1024px
      }} 
      width='100%'
    // to define width; ths grid has 2 columns
     templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
     }}
    >
      {" "}
      {/* page layout */}
      <GridItem area="nav" bg="none">
        <Navbar/>
      </GridItem>
      <Show above="lg"> {/* // renders on large screen and above */}
      <GridItem area="aside" paddingX={5}>
        <GenreList />
      </GridItem>
      </Show>
      <GridItem area="main">
        <Gamegrid />
      </GridItem>
    </Grid>
  );
}

export default App;
