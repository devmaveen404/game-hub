// 35, FETCHING GAME TRAILERS
import React from 'react'
import useTrailers from '../hooks/useTrailers'
import { Spinner } from '@chakra-ui/react';

interface Props {
    gameId: number;
}

const GameTrailers = ({gameId}: Props) => {
   const {data, isLoading, error} = useTrailers(gameId)

    if (isLoading) return <Spinner/>
    const first = data?.results[0]

    return first ? (
        <video 
        src={first.data[480]}
        poster={first.preview}
        controls
        />
  ) : null
}

export default GameTrailers