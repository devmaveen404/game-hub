//35, BUILDING GAME ATTRIBUTES
import { Box, Heading } from '@chakra-ui/react';
import React, { ReactNode } from 'react'

interface Props {
    term: string;
    children: ReactNode | ReactNode[]
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
        <Heading as='dt' fontSize='md' color='gray.600' marginBottom={2}> {/* decription title */}
            {term}
        </Heading>
        <dd>{children}</dd> {/* description data */}
    </Box>
  )
}

export default DefinitionItem