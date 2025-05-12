// this componet is responsible for the website layout

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames(); // this is all the properties we need to use from out custom hook to fetch the data
  // and get loading skeletons while page is loading before it launches

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) =><GameCardContainer><GameCardSkeleton key={skeleton} /></GameCardContainer>)}
        {games.map((game) => (
          <GameCardContainer><GameCard key={game.id} game={game} /></GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
