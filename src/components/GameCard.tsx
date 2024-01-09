import { Game } from "../hooks/useGames";
import { Card, CardBody, Text, Heading, Image, HStack } from "@chakra-ui/react";
import { PlatformiconsList } from "./PlatformiconsList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "../servieces/image-url";
import { useColorModeValue } from "@chakra-ui/react";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const hoverBg = useColorModeValue("gray.200", "gray.900");
  return (
    <Card
      bg={bg}
      height="330px"
      _hover={{ bg: hoverBg }}
      transition="background-color 0.2s ease-in-out"
    >
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
