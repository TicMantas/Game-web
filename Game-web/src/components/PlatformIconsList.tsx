// this component responsible how our platforms is been displayed I choose to be an Icon instead of words 

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platforms } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platforms[];
}

const PlatformIconsList = ({ platforms }: Props) => {
    const MapIcons: {[key:string] : IconType} = {
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        android: FaAndroid,
        linux: FaLinux,
        windows: FaWindows,
        nintendo: SiNintendo,
        ios: MdPhoneIphone,
        web: BsGlobe

    }
  return (
    <HStack marginY={3}>
      {platforms.map((platform) => (
        <Icon as={MapIcons[platform.slug]} color='gray.500' fontSize={25} />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
