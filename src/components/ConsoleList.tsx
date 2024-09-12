import { Box, Button, Heading, HStack, Text, List, ListItem, Image, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import useConsole from '../hooks/useConsoles';
import getCroppedImageUrl from '../services/image-url';
import { FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import useGameQueryStore from '../store';
import { useSidebarStore } from '../sideBarStore';


const ConsoleList = () => {

    // 34, Zustand store
    const selectedConsoleId = useGameQueryStore((c) => c.gameQuery.consoleId);
    const setSelectedConsoleId = useGameQueryStore((c) => c.setConsoleId);

    // state to close the modal 
    const closeSidebar = useSidebarStore((state) => state.closeSidebar);

    const { data } = useConsole()

    return (
        <Box>
            <Heading fontSize="2xl" marginBottom={3}>Platforms</Heading>
            <Accordion allowToggle p={0} marginY={'3'}>
                <AccordionItem mb={'2'} p={0} border={0}>
                    <AccordionButton mb={'2'} p={0}>
                        <Box display={'flex'} gap={2} alignItems={'center'} fontSize={'lg'} as='span' flex='1' textAlign='left'>
                            <FaWindows size={'30px'} /> <Text fontWeight={'semibold'}>PC</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel p={0}>
                        <List>
                            {/* {genres.map(genre => <li key={genre.id}>{genre.name}</li>)} */}
                            {data?.results[0].platforms.map((platform) => (
                                <ListItem key={platform.id} paddingY={"5px"}>
                                    <HStack>
                                        <Image
                                            boxSize={"40px"}
                                            borderRadius={5}
                                            src={getCroppedImageUrl(platform.image_background)}
                                            objectFit="cover"
                                        ></Image>
                                        <Button // To click on console platforms
                                            fontWeight={platform.id === selectedConsoleId ? "bold" : "normal"}
                                            onClick={() => {setSelectedConsoleId(platform.id), closeSidebar()}}
                                            fontSize={"lg"}
                                            variant="link"
                                            whiteSpace={"normal"}
                                            textAlign="left"
                                        >
                                            {platform.name}
                                        </Button>
                                    </HStack>
                                </ListItem>
                            ))}
                        </List>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem mb={'2'} p={0} border={0}>
                    <AccordionButton mb={'2'} p={0}>
                        <Box display={'flex'} gap={2} alignItems={'center'} fontSize={'lg'} as='span' flex='1' textAlign='left'>
                            <FaPlaystation size={'30px'} /> <Text fontWeight={'semibold'}>Playstation</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel p={0}>
                        <List>
                            {/* {genres.map(genre => <li key={genre.id}>{genre.name}</li>)} */}
                            {data?.results[1].platforms.map((platform) => (
                                <ListItem key={platform.id} paddingY={"5px"}>
                                    <HStack>
                                        <Image
                                            boxSize={"40px"}
                                            borderRadius={5}
                                            src={getCroppedImageUrl(platform.image_background)}
                                            objectFit="cover"
                                        ></Image>
                                        <Button // To click on gneres
                                            fontWeight={platform.id === selectedConsoleId ? "bold" : "normal"}
                                            onClick={() => {setSelectedConsoleId(platform.id), closeSidebar()}}
                                            fontSize={"lg"}
                                            variant="link"
                                            whiteSpace={"normal"}
                                            textAlign="left"
                                        >
                                            {platform.name}
                                        </Button>
                                    </HStack>
                                </ListItem>
                            ))}
                        </List>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem p={0} border={0}>
                    <AccordionButton mb={'2'} p={0}>
                        <Box display={'flex'} gap={2} alignItems={'center'} fontSize={'lg'} as='span' flex='1' textAlign='left'>
                            <FaXbox color='green' size={'30px'} /> <Text fontWeight={'semibold'}>Xbox</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel p={0}>
                        <List>
                            {/* {genres.map(genre => <li key={genre.id}>{genre.name}</li>)} */}
                            {data?.results[2].platforms.map((platform) => (
                                <ListItem key={platform.id} paddingY={"5px"}>
                                    <HStack>
                                        <Image
                                            boxSize={"40px"}
                                            borderRadius={5}
                                            src={getCroppedImageUrl(platform.image_background)}
                                            objectFit="cover"
                                        ></Image>
                                        <Button // To click on console platforms
                                            fontWeight={platform.id === selectedConsoleId ? "bold" : "normal"}
                                            onClick={() => {setSelectedConsoleId(platform.id), closeSidebar()}}
                                            fontSize={"lg"}
                                            variant="link"
                                            whiteSpace={"normal"}
                                            textAlign="left"
                                        >
                                            {platform.name}
                                        </Button>
                                    </HStack>
                                </ListItem>
                            ))}
                        </List>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem p={0} border={0}>
                    <AccordionButton mb={'2'} p={0}>
                        <Box display={'flex'} gap={2} alignItems={'center'} fontSize={'lg'} as='span' flex='1' textAlign='left'>
                            <SiNintendo size={'30px'} /> <Text fontWeight={'semibold'}>Nintendo</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel p={0}>
                        <List>
                            {/* {genres.map(genre => <li key={genre.id}>{genre.name}</li>)} */}
                            {data?.results[7].platforms.map((platform) => (
                                <ListItem key={platform.id} paddingY={"5px"}>
                                    <HStack>
                                        <Image
                                            boxSize={"40px"}
                                            borderRadius={5}
                                            src={getCroppedImageUrl(platform.image_background)}
                                            objectFit="cover"
                                        ></Image>
                                        <Button // To click on gneres
                                            fontWeight={platform.id === selectedConsoleId ? "bold" : "normal"}
                                            onClick={() => {setSelectedConsoleId(platform.id), closeSidebar()}}
                                            fontSize={"lg"}
                                            variant="link"
                                            whiteSpace={"normal"}
                                            textAlign="left"
                                        >
                                            {platform.name}
                                        </Button>
                                    </HStack>
                                </ListItem>
                            ))}
                        </List>
                    </AccordionPanel>
                </AccordionItem>

            </Accordion>
        </Box>
    )
}

export default ConsoleList