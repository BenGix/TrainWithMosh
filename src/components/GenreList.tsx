import {
  HStack,
  Button,
  Image,
  Text,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../servieces/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : " normal"}
              fontSize="lg"
              variant="link"
              onClick={() => onSelectGenre(genre)}
            >
              {" "}
              {genre.name}{" "}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
