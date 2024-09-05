//36, fetch screenshots
import React from "react";
import useScreenshots from "../hooks/useScreenShots";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      {data?.results.map((file) => (
        <Image key={file.id} src={getCroppedImageUrl(file.image)}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
