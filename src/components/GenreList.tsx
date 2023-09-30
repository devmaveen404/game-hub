// 12(a), fetching genres from api
import React from "react";
import useGenre, { Genre } from "../hooks/useGenre";
import useData from "../hooks/useData";
import {
  List,
  ListItem,
  HStack,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  // 14b
  onSelectGenre: (genre: Genre) => void;
  // 15, bolden selected genre .App.tsx, <GenreList/>
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  // render list of genre from useGenre.tsx
  // const  {genres} = useGenre() // custom hook

  const { data, error, isLoading } = useGenre(); // generic hook

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genre</Heading>
    <List>
      {/* {genres.map(genre => <li key={genre.id}>{genre.name}</li>)} */}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              objectFit='cover'
            ></Image>
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize={"lg"}
              variant="link"
              whiteSpace={"normal"}
              textAlign='left'
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
