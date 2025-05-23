import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="red.500">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="coral">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="blue.200">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
