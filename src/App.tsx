import react from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
// 1, create a responsive layout
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav"  "main"`,
        lg: `"nav nav"  "aside main"`, // larger than 1024px
      }} 
      width='100%'
    >
      {" "}
      {/* page layout */}
      <GridItem area="nav" bg="none">
        <Navbar/>
      </GridItem>
      <Show above="lg"> {/* // renders on large screen and above */}
      <GridItem area="aside" bg="gold">
        Aside
      </GridItem>
      </Show>
      <GridItem area="main" bg="blue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;