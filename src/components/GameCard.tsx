import { Game } from "../hooks/useGames";
import { Card, CardBody, Text, Heading, Image } from "@chakra-ui/react";
import { PlatformiconsList } from "./PlatformiconsList";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} height="200px" objectFit="cover"/>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformiconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};
