import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImage from "../Service/image-url";

const Genre = () => {
  const { data, isLoading, error } = useGenre();

  if(error) return "No Genres Available"

  if (isLoading) return <Spinner/>
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
