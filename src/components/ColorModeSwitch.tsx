// 4, Building Color Mode Switch
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  // custom hook in chakra for toggling darkmode
  const { toggleColorMode, colorMode } = useColorMode();

  const theme = colorMode === "dark" ? "Dark Mode" : "Light Mode";

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace={"nowrap"}>{theme}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
