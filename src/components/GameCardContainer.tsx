// 11, removing duplicated styles
import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box _hover={{
      transform: 'scale(1.1)', // Scale the image on hover
      transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      ".scale-image": {
        transform: 'scale(1.2)', // Scale the image on hover
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
      },
    }}
      width={"100%"}
      borderRadius={10}
      overflow="hidden"
      transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
      position="relative"
    >{children}</Box>
  )
}

export default GameCardContainer