// this component is responsible for our game critics and how we display it

import { Badge } from "@chakra-ui/react";

interface Props{
    score: number;

}
const CriticScore = ({score}: Props) => {
let color = score >75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <Badge colorScheme={color} borderRadius={10} paddingX={3} paddingY={1}>
      {score}
    </Badge>
  )
}

export default CriticScore
