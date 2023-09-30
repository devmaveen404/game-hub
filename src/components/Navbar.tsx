// 3, Buiding Navigation Bar
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchinput from "./Searchinput";

interface Props {
  onSearch: (searchText: string) => void
}

const Navbar = ({onSearch}: Props) => {
  return (
    // to render items horizontally
    <HStack justifyContent="space-between" padding={3}>
      <Image src={logo} borderRadius={15} boxSize={79}></Image>
      <Searchinput onSearch={onSearch}/>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar;
