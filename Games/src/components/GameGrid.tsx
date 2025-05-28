import { SimpleGrid, Text } from "@chakra-ui/react";
import Cards from "./Cards";
import CardSkeleton from "./CardSkeleton";
import Container from "./Container";
import type { GameQuery } from "../App";
import useGames from "../hooks/useGames";

interface Props{
  gameQuery: GameQuery;
}

const GameGrid = ({gameQuery} : Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        spacing={6}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <Container key={skeleton}>
              <CardSkeleton />
            </Container>
          ))}
        {data.map((game) => (
          <Container key={game.id}>
            <Cards game={game} />
          </Container>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
