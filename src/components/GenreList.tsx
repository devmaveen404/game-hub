// 12(a), fetching genres from api
import React from "react";
import useGenre, { Genre } from "../hooks/useGenre";
import useData from "../hooks/useData";
import { List, ListItem, HStack, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  // render list of genre from useGenre.tsx
  // const  {genres} = useGenre() // cutom hook

  const { data } = useGenre(); // generic hook

  return (
    <List>
      {/* {genres.map(genre => <li key={genre.id}>{genre.name}</li>)} */}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize={'lg'}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
