import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaWindows,
  FaPlaystation,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import type { Platforms } from "../hooks/useGames";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platforms[];
}
const PlatformIcons = ({ platforms }: Props) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    mac: FaApple,
    nintendo: SiNintendo,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <>
    <HStack marginY={3}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={IconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
    </>
  );
};

export default PlatformIcons;
