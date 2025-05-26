import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";
import GetCroppedImage from "../services/image-url";

const GenresList = () => {
  const { data, isLoading } = useGenres();

  return (
    <List marginX={5}>
      {isLoading && <Spinner/>}
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack padding={2}>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={GetCroppedImage(genre.image_background)}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
