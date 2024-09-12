// 3, Buiding Navigation Bar
import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchinput from "./Searchinput";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'


const Navbar = () => {
  return (
    // to render items horizontally
    <HStack bg={'none'} justifyContent="space-between" padding={3}>
      <Link to={'/'}>
        <Image src={logo} borderRadius={15} boxSize={'58'} objectFit={'cover'}></Image>
      </Link>
      <Searchinput />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar; 
