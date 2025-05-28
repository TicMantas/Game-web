import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { type Genres } from "../hooks/useGenre";
import GetCroppedImage from "../services/image-url";

interface Props {
  onSelectedGenres: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenresList = ({ selectedGenre, onSelectedGenres }: Props) => {
  const { data, isLoading } = useGenres();

  return (
    <>
      <Box margin={5}>
        <Heading marginBottom={5}>Genres</Heading>
        <List>
          {isLoading && <Spinner />}
          {data.map((genre) => (
            <ListItem key={genre.id}>
              <HStack padding={2}>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={GetCroppedImage(genre.image_background)}
                />
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  onClick={() => onSelectedGenres(genre)}
                  fontSize="lg"
                  variant="link"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default GenresList;
