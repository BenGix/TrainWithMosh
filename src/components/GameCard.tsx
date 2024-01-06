import { Game } from "../hooks/useGames";
import { Card, CardBody, Text, Heading, Image, HStack } from "@chakra-ui/react";
import { PlatformiconsList } from "./PlatformiconsList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "../servieces/image-url";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card width="300px" borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)} height="200px" objectFit="cover"/>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformiconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
