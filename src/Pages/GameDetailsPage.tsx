import { Link, useLocation, useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, Text, SimpleGrid, Spinner, Box, Badge } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailers from "../components/GameTrailers";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailsPage = () => {
  // 33, Fetching a Game
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); //append exclamation means never null, always a string

  useLocation()

  if (isLoading) return <Spinner />;

  if (error || !game) throw error; // if there is error or no game

  return (  // improving attributes layout
    <Box>
      <Text marginBottom={'6'} paddingX={{ md: '7' }} color={'gray.300'} fontSize={'xs'}>
        <Link to={'/'} style={{ textDecoration: 'none', marginRight: '6px', }}>
          <Text
            as="span"
            _hover={{ color: 'gray.600' }}
            transition="color 0.2s ease-in-out"
          >
            HOME
          </Text>
        </Link>
        /
        <Link to={'/'} style={{ textDecoration: 'none', marginLeft: '6px', marginRight: '6px' }}>
          <Text
            as="span"
            _hover={{ color: 'gray.600' }}
            transition="color 0.2s ease-in-out"
          >
            GAMES
          </Text>
        </Link>
        / {game.name.toUpperCase()}
      </Text>
      <SimpleGrid paddingX={{ md: '7' }} gap={2} columns={{ base: 1, md: 2 }}>
        <GridItem>
          <Box display={'flex'} alignItems={'center'} gap={'5'} marginY={'3'}>
            <Badge padding={'2'} borderRadius={'md'} fontSize={'small'}>{game.released}</Badge>
            <Text letterSpacing={'widest'} fontSize={'small'}>AVERAGE PLAYTIME: {game.playtime} HOURS</Text>
          </Box>
          <Heading mb={3} size={'3xl'}>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>

        <GridItem>
          <GameTrailers gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}




export default GameDetailsPage;
