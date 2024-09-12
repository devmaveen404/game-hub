//19, Sorting games
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

// interface Props {
//     onSelectSortOrder: (sortOrder: string) => void
//     sortOrder: string
// }

const SortSelector = () => {
  const sortOrders = [
    { value: "updated", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  // 34, Zustand store
  const setSelectedSortOrder = useGameQueryStore(s => s.setSortOrder)
  const selectedSortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)
  const currentSortOrder = sortOrders.find(order => order.value === selectedSortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {currentSortOrder?.label || 'Relevance'} {/* can be null */}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={() => setSelectedSortOrder(order.value)} key={order.value}>{order.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
