// 3, Buiding Navigation Bar
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchinput from "./Searchinput";

const Navbar = () => {
  return (
    // to render items horizontally
    <HStack justifyContent="space-between" padding={3}>
      <Image src={logo} borderRadius={15} boxSize={79}></Image>
      <Searchinput/>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar;
