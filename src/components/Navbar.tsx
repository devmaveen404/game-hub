import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/rockstar.ico'
const Navbar = () => {
  return (
    // to render items horizontally
    <HStack> 
      <Image src={logo}></Image>
      <Text>Navbar</Text>
    </HStack>
  )
}

export default Navbar