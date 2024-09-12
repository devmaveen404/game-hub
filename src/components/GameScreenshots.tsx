//36, fetch screenshots
import { useState } from "react";
import useScreenshots from "../hooks/useScreenShots";
import { Box, IconButton, Show, useBreakpointValue, Image, Modal, ModalBody, ModalContent, ModalOverlay, SimpleGrid, Spinner, useDisclosure } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface Props {
  gameId: number;
}


const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  // show image on full screen when clicked
  const { isOpen, onOpen, onClose } = useDisclosure();
  // toggle images in modal
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Determine if the device is large (only enable modal on large screens)
  const isModalEnabled = useBreakpointValue({ base: false, lg: true, '2xl': false });

  if (isLoading) return <Spinner />;

  if (error) throw error;

  const handleImageClick = (index: number) => {
    if (isModalEnabled) {
      setSelectedIndex(index);
      onOpen(); // Open the modal when an image is clicked, only on larger devices
    }
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the modal from closing when the button is clicked
    if (selectedIndex !== null && data) {
      setSelectedIndex((prevIndex) => (prevIndex! + 1) % data.results.length); // Move to next image
    }
  };

  const showPreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the modal from closing when the button is clicked
    if (selectedIndex !== null && data) {
      setSelectedIndex((prevIndex) => (prevIndex! - 1 + data.results.length) % data.results.length); // Move to previous image
    }
  };

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
        {data?.results.map((file, index) => (
          <Image
            borderRadius={'2xl'}
            key={file.id}
            src={getCroppedImageUrl(file.image)}
            onClick={() => handleImageClick(index)} />
        ))}
      </SimpleGrid>

      {/* Full-screen image modal */}
        {isModalEnabled && selectedIndex !== null && data && (
          <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
            <ModalOverlay />
            <ModalContent bg="transparent" boxShadow="none" onClick={onClose}>
              <ModalBody p={0} display="flex" justifyContent="center" alignItems="center">
                {/* Display the selected image */}
                <Box w="60%" h="60%" onClick={(e) => e.stopPropagation()} _hover={{ ".image-controls": { opacity: 1 } }}> {/* // Show buttons on hover */}
                  <Image src={data.results[selectedIndex].image} w="100%" h="100%" objectFit="contain" borderRadius={10} />

                  {/* Previous button (left edge) */}
                  <IconButton
                    className="image-controls"
                    aria-label="Previous image"
                    icon={<FaChevronLeft />}
                    position="absolute"
                    left="300"
                    top="50%"
                    transform="translateY(-50%)"
                    bg="rgba(0, 0, 0, 0.5)"
                    color="white"
                    _hover={{ bg: "rgba(0, 0, 0, 0.7)" }}
                    opacity={0}
                    transition="opacity 0.3s ease"
                    onClick={showPreviousImage}
                  />

                  {/* Next button (right edge) */}
                  <IconButton
                    className="image-controls"
                    aria-label="Next image"
                    icon={<FaChevronRight />}
                    position="absolute"
                    right="300"
                    top="50%"
                    transform="translateY(-50%)"
                    bg="rgba(0, 0, 0, 0.5)"
                    color="white"
                    _hover={{ bg: "rgba(0, 0, 0, 0.7)" }}
                    opacity={0}
                    transition="opacity 0.3s ease"
                    onClick={showNextImage}
                  />
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
    </>
  );
};

export default GameScreenshots;
