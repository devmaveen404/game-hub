// 8, displaying icons, integrating text with icons
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md' 
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";
import { IconType } from 'react-icons'

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
   // using an object to map each platform text to an icon
   // A key signature assign keys to element in object automatically
   const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
   }

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        // <Text>{platform.name}</Text>
        <Icon key={platform.id} as={iconMap[platform.slug]} color={"gray.500"}></Icon> // from chakra
      ))}
    </HStack>
  );
};

export default PlatformIconList;
