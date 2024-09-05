// 12(a), fetching genres from api
import React from "react";
import useGenre from "../hooks/useGenre";
import { Genre } from "../entities/Genre";
// import useData from "../hooks/useData";
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
import useGameQueryStore from "../store";

// interface Props {
//   // 14b
//   onSelectGenre: (genre: Genre) => void;
//   // 15, bolden selected genre .App.tsx, <GenreList/>
//   selectedGenreId?: number// selectedGenre: Genre | null;
// }

const GenreList = () => {
  // render list of genre from useGenre.tsx
  // const  {genres} = useGenre() // custom hook

  // 34, Zustand store
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const { data, error, isLoading } = useGenre(); // generic hook

  if (error) return null;
  if (isLoading) return <Spinner />

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genre
      </Heading>
      <List>
        {/* {genres.map(genre => <li key={genre.id}>{genre.name}</li>)} */}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"40px"}
                borderRadius={20}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit="cover"
              ></Image>
              <Button // To click on gneres
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize={"lg"}
                variant="link"
                whiteSpace={"normal"}
                textAlign="left"
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
