import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react"
import type { Game } from "../hooks/useGames"
import PlatformIcons from "./PlatformIcons"
import GetCroppedImage from "../services/image-url"

interface Props{
    game: Game
}
const Cards = ({game} : Props) => {
    const CriticColor = game.metacritic > 80
  ? 'green'
  : game.metacritic >= 70
    ? 'orange'
    : 'red';
  return (
    <Card width='300px' borderRadius={10} overflow="hidden">
        <Image src={GetCroppedImage(game.background_image)}/> 
        <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
            <HStack justifyContent='space-between'>
                
            <PlatformIcons platforms={game.parent_platforms.map(p => p.platform)}/>
                <Text fontWeight="bold" bg={CriticColor} padding={1} borderRadius={10}>{game.metacritic}</Text>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default Cards