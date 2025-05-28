import { Box, Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import GetCroppedImage from "../services/image-url";

interface Props {
  game: Game;
}
const Cards = ({ game }: Props) => {
  const CriticColor =
    game.metacritic > 80 ? "green" : game.metacritic >= 70 ? "orange" : "red";
  return (
    <Card>
      <Image src={GetCroppedImage(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between">
          <Box fontSize="xl">
            <PlatformIcons
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </Box>
          <Text
            fontWeight="bold"
            bg={CriticColor}
            padding={1}
            borderRadius={10}
          >
            {game.metacritic}
          </Text>
        </HStack>
        <Heading marginTop={3} fontSize="3xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default Cards;
