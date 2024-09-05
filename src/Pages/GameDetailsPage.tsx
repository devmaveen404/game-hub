import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";
import GameTrailers from "../components/GameTrailers";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailsPage = () => {
  // 33, Fetching a Game
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); //append exclamation means never null, always a string

  if (isLoading) return <Spinner />;

  if (error || !game) throw error; // error or no game

  return (  // improving attributes layout
    <SimpleGrid columns={{base: 1, md: 2}}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game}/>
      </GridItem>

      <GridItem>
        <GameTrailers gameId={game.id}/>
        <GameScreenshots gameId={game.id}/>
      </GridItem>
    </SimpleGrid>
  );
}


export default GameDetailsPage;
