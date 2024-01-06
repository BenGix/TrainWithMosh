import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCard } from "./GameCard";
import { GameCardContainer } from "./GameCardContainer";

export const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeletons) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeletons} />
            </GameCardContainer>
          ))}
        {games.map((games) => (
          <GameCardContainer>
            <GameCard key={games.id} game={games} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
