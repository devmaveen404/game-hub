// 7, Building game cards
import { Card, CardBody, Heading, Image, Text, HStack } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        className="scale-image"
        objectFit="cover"
        width="100%"
        height="100%"
        transition="transform 0.5s ease-in-out" // Smooth transition for scaling
        transform="scale(1)" // Start with normal scale
      />
      <CardBody>
        {/* {game.parent_platform.map(({platform}) => <Text>{platform.name}</Text>)} */}
        {/* mapping each parent_platform to grab it platform prop */}
        <HStack justifyContent="space-between" marginBottom={0}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" _hover={{ color: 'gray.600' }}>
          <Link to={"/games/" + game.slug}>{game.name}</Link> {/* router */}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
