import { HStack, Image } from '@chakra-ui/react';
import logo from "../assets/logo.png";
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props{
    onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch} : Props) => {
  return (
    <HStack paddingX={5}>
        <Image src={logo} boxSize={100} />
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
    </HStack>
)
}

export default NavBar