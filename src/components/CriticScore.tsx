import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

export const CriticScore = ({ score }: Props) => {
    let color = score > 79 ? "green" : score > 70 ? "yellow" : "red";
   
    return (
      <Badge colorScheme={color} fontSize="14px" padding={2} borderRadius="4px">
        {score}
      </Badge>
    );
   };
   