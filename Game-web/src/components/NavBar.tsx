import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/myLogo.png'
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="150px"/>
      <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar
