import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImage from "../Service/image-url";

const Genre = () => {
  const { data } = useGenre();

  return (
    <List>
      {data.map((genre) => (
        <ListItem padding={2} key={genre.id}>
          <HStack >
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImage(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default Genre;
