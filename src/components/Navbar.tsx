// 3, Buiding Navigation Bar
import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/rockstar.ico'
import ColorModeSwitch from './ColorModeSwitch'

const Navbar = () => {
  return (
    // to render items horizontally
    <HStack justifyContent='space-between' paddingX={3}> 
      <Image src={logo} borderRadius={15}></Image>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default Navbar