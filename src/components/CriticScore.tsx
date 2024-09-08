// 8, Displaying Critic Score
import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  // set critic score color
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <Badge colorScheme={color} fontSize="13px" padding={1} borderRadius="4px">{score}</Badge>
  )
};

export default CriticScore
