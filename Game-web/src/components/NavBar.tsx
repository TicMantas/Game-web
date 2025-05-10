import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/myLogo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" paddingX={5}>
      <Image src={logo} boxSize="150px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
