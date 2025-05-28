import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import type { Genres } from "./hooks/useGenre";
import PlatformsList from "./components/PlatformsList";
import type { Platforms } from "./hooks/useGames";
import SortGames from "./components/SortGames";

export interface GameQuery{
  genre: Genres | null;
  platform: Platforms | null
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <GenresList selectedGenre={gameQuery.genre} onSelectedGenres={(genre) => setGameQuery({...gameQuery, genre})}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex>
          <Box marginX={5}>
            <PlatformsList selectedPlatform={gameQuery.platform} onSelectedPlatforms={(platform) => setGameQuery({...gameQuery, platform})}/>
          </Box>
          <SortGames sortOrder={gameQuery.sortOrder} onSelecteSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
        </Flex>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
}

export default App;
