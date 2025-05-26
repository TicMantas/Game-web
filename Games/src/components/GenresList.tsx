import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { type Genres } from "../hooks/useGenre";
import GetCroppedImage from "../services/image-url";

interface Props{
  onSelectedGenres: (genre: Genres) => void;
}

const GenresList = ({onSelectedGenres} : Props) => {
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
            <Button onClick={() => onSelectedGenres(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
