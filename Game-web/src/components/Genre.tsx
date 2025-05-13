import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenre, { Genres } from "../hooks/useGenre";
import getCroppedImage from "../Service/image-url";

interface Props{
  onSelectGenre: (genre: Genres) => void;
}

const Genre = ({onSelectGenre}: Props) => {
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
            <Button variant="link" onClick={() => onSelectGenre(genre)} fontSize="lg">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default Genre;
