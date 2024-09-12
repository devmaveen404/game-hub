// 12(a), fetching genres from api
import useGenre from "../hooks/useGenre";
// import useData from "../hooks/useData";
import {
  List,
  ListItem,
  HStack,
  Image,
  Spinner,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import { useState } from "react";

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


  // Show first 3 items or all items based on the showAll state
  const [showAll, setShowAll] = useState(false);
  const visibleGenres = showAll ? data?.results : data?.results.slice(0, 3);

  return (
    <Box marginBottom={'3'}>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {/* {genres.map(genre => <li key={genre.id}>{genre.name}</li>)} */}
        {visibleGenres.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"40px"}
                borderRadius={5}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit="cover"
              ></Image>
              <Button // To click on genres
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize={"lg"}
                color={'black'}
                _dark={{ color: "white" }}
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
      {data?.results.length > 3 && (
        <Button
          mt={4}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show All"}
        </Button>
      )}
    </Box>
  );
};

export default GenreList;
