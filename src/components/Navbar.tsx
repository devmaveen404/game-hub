// 3, Buiding Navigation Bar
import { HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchinput from "./Searchinput";
import { Link } from "react-router-dom";
import { SiGamebanana } from "react-icons/si";


const Navbar = () => {
  return (
    // to render items horizontally
    <HStack bg={'none'} justifyContent="space-between" padding={3}>
      <Link to={'/'}>
        <SiGamebanana color="red" size={'45px'} />
        {/* <Image src={logo} borderRadius={15} boxSize={79} objectFit={'cover'}></Image> */}
      </Link>
      <Searchinput />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar; 
