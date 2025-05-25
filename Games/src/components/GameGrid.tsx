import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import Cards from "./Cards";

const GameGrid = () => {

    const {games, error} = useGames()

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid spacing={10} columns={{sm:1, md:2, lg: 3, xl: 4}} padding={3}>
        {games.map((game) => (
        <Cards key={game.id} game={game}></Cards>
        ))}
        
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
