import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import type { Genres } from "./hooks/useGenre";
import PlatformsList from "./components/PlatformsList";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenresList selectedGenre={selectedGenre} onSelectedGenres={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformsList/>
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;
