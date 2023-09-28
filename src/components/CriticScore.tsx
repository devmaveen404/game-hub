// 8, Displaying Critic Score
import { Badge, ColorModeContext } from '@chakra-ui/react';
import React from 'react'

interface Props {
    score: number;
}

const CriticScore = ({score}: Props) => {
// set critic score color
    let color = score > 75 ? 'green' : score > 60 ? 'yellow': '';

  return (
    <Badge colorScheme={color} fontSize="14px" padding={2} borderRadius="4px">{score}</Badge>
  )
};

export default CriticScore
