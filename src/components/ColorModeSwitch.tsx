import { HStack, IconButton, useColorMode, Text, Show } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md"; // Import icons

const ColorModeSwitch = () => {
  // Chakra UI hook to toggle dark mode
  const { toggleColorMode, colorMode } = useColorMode();
  // Toggle button label
  const theme = colorMode === "dark" ? "Dark Mode" : "Light Mode";
  // set icon for the current color mode
  const Icon = colorMode === "dark" ? MdLightMode : MdDarkMode;

  return (
    <HStack>
      <IconButton
        aria-label="Toggle Color Mode"
        icon={<Icon />} // Display sun or moon based on color mode
        onClick={toggleColorMode} // Toggle light/dark mode on click
        variant="ghost" // No background
        size="md"
      />
      <Show above="lg">
        <Text whiteSpace={"nowrap"}>{theme}</Text>
      </Show>
    </HStack>
  );
};

export default ColorModeSwitch;
