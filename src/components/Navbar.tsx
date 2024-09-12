// 3, Buiding Navigation Bar
import { Button, Flex, HStack, IconButton, Image, Show } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchinput from "./Searchinput";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'
import { useSidebarStore } from "../sideBarStore";
import { CiMenuFries } from "react-icons/ci";


const Navbar = () => {

  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar); // Zustand state

  return (
    // to render items horizontally
    <HStack bg={'none'} justifyContent="space-between" padding={3}>


      <Link to={'/'}>
        <Image src={logo} borderRadius={15} boxSize={'45px'} objectFit={'cover'}></Image>
      </Link>
      <Searchinput />
      <Flex>
      <ColorModeSwitch></ColorModeSwitch>
      <Show below="lg">
        <IconButton
          aria-label="Toggle Color Mode"
          icon={<CiMenuFries />} // Display sun or moon based on color mode
          onClick={toggleSidebar} // Toggle light/dark mode on click
          variant="ghost" // No background
          size="lg"
        />
      </Show> 
      </Flex>
    </HStack>
  );
};

export default Navbar; 
