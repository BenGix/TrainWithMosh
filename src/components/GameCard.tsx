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
    <Card height="330px">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        height="200px"
        objectFit="cover"
      />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformiconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};
