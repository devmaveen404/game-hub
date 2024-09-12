// 35, FETCHING GAME TRAILERS
import useTrailers from '../hooks/useTrailers'
import { Spinner } from '@chakra-ui/react';

interface Props {
    gameId: number;
}

const GameTrailers = ({gameId}: Props) => {
   const {data, isLoading } = useTrailers(gameId) 

    if (isLoading) return <Spinner/>
    const first = data?.results[0]

    return first ? (
        <video 
        style={{ borderRadius: '30px', marginBottom: '10px'}}
        src={first.data[480]}
        poster={first.preview}
        controls
        />
  ) : null
}

export default GameTrailers