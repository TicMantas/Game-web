import { HStack, Image } from '@chakra-ui/react';
import logo from "../assets/logo.png";
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack paddingX={5}>
        <Image src={logo} boxSize={100} />
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
)
}

export default NavBar