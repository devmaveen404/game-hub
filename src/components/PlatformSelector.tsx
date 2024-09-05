//16, Building platform selector
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../entities/Platform";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";
// import { Platform } from "../hooks/useGames";

//17, Notify when platform is selected
// interface Props {
//   onSelectPlatform: (platform: Platform) => void;
//   selectedPlatformId: number | undefined;
// }

const PlatformSelector = () => {
  // 34, Zustand store
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatform = useGameQueryStore((s) => s.setPlatfromId);

  const { data, error } = usePlatforms();
  // const selectedPlatform = data?.results.find(p => p.id === selectedPlatformId)
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
