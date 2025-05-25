import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import Cards from "./Cards";
import CardSkeleton from "./CardSkeleton";
import Container from "./Container";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        spacing={10}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <Container>
              <CardSkeleton key={skeleton} />
            </Container>
          ))}
        {games.map((game) => (
          <Container>
            <Cards key={game.id} game={game} />
          </Container>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
