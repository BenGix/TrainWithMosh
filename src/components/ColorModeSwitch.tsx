import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";
import React from "react";

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch isChecked={colorMode ==="dark"} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
