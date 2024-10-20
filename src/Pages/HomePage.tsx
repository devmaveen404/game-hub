//30, HOME PAGE LAYOUT  from app.tsx
import { Box, Flex, Text, Grid, GridItem, Show, useColorModeValue, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import GameHeading from '../components/GameHeading'
import SortSelector from '../components/SortSelector'
import Gamegrid from '../components/Gamegrid'
import PlatformList from '../components/ConsoleList'
import { useSidebarStore } from '../sideBarStore'


const HomePage = () => {

  // Use Chakra's color mode value to set light and dark mode colors
  const scrollbarThumbColor = useColorModeValue('gray.300', 'gray.700');
  const scrollbarTrackColor = useColorModeValue('gray.100', 'gray.900');

  // toggle sidebar
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen); // Zustand state
  const closeSidebar = useSidebarStore((state) => state.closeSidebar);   // Zustand state


  return (
    <>
      <Grid
        //  to define Grid, navbar is fixed
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`, // larger than 1024px
        }}
        width="100%"
        // to define width; ths grid has 2 columns
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >

        {" "}

        {/* Toggle Button for Small Screens */}
        <Show below="lg">
          {/* aside panel on small devices */}
          <Drawer isOpen={isSidebarOpen} placement="right" onClose={closeSidebar}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody
                sx={{
                  /* Custom Scrollbar */
                  '::-webkit-scrollbar': {
                    width: '8px', // Scrollbar width, hidden
                    transition: 'width 1s ease'
                  },
                  '::-webkit-scrollbar-thumb': {
                    background: scrollbarThumbColor, // Dynamic based on light or dark mode
                    borderRadius: '8px', // Scrollbar thumb rounded corners
                  },
                  '::-webkit-scrollbar-thumb:hover': {
                    background: scrollbarThumbColor, // Thumb color on hover
                  },
                  '::-webkit-scrollbar-track': {
                    background: scrollbarTrackColor, // Dynamic based on light or dark mode
                  },
                }}
              >
                <a href={'/'} onClick={closeSidebar}>
                  <Text fontSize={'2xl'} fontWeight={'bold'} marginBottom={'6'}>Home</Text>
                </a>
                <PlatformList />
                <GenreList />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Show>

        {/* aside panel on large devices */}
        <Show above="lg">
          {" "}
          {/* // renders on large screen and above */}
          <GridItem
            area="aside"
            paddingX={5}
            marginTop={10}
            position="sticky"
            top="2" // Adjust top value based on your layout
            left="0" // Adjust the left value to align the aside properly
            height="100vh" // Full viewport height for the aside
            overflowY="auto" // Allow scrolling if aside content is long
            sx={{
              /* Custom Scrollbar */
              '::-webkit-scrollbar': {
                width: '0px', // Scrollbar width, hidden
                transition: 'width 1s ease'
              },
              '::-webkit-scrollbar-thumb': {
                background: scrollbarThumbColor, // Dynamic based on light or dark mode
                borderRadius: '8px', // Scrollbar thumb rounded corners
              },
              '::-webkit-scrollbar-thumb:hover': {
                background: scrollbarThumbColor, // Thumb color on hover
              },
              '::-webkit-scrollbar-track': {
                background: scrollbarTrackColor, // Dynamic based on light or dark mode
              },
              '&:hover': {
                '::-webkit-scrollbar': {
                  width: '5px', // Show the scrollbar when hovering over the container
                },
              },
            }}
          >
            {" "}
            {/* 14c */}
            <a href={'/'}>
              <Text fontSize={'2xl'} fontWeight={'bold'} marginBottom={'6'}>Home</Text>
            </a>
            <PlatformList />
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box paddingLeft={2}> {/* to align gameheading & platformselector */}
            <GameHeading />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector />
              </Box>
              <SortSelector />
            </Flex>
          </Box>
          <Gamegrid
          // selectedPlatform={/*selectedPlatform*/ gameQuery.platform}
          // selectedGenre={/*selectedGenre*/ gameQuery.genre}
          // gameQuery={gameQuery}
          />
        </GridItem>

      </Grid>
    </>
  )
}

export default HomePage