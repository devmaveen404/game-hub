// 3, Buiding Navigation Bar
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchinput from "./Searchinput";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    // to render items horizontally
    <HStack justifyContent="space-between" padding={3}>
      <Link to={'/'}>
        <Image src={logo} borderRadius={15} boxSize={79} objectFit={'cover'}></Image>
      </Link>
      <Searchinput/>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar; 
