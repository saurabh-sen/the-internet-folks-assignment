import React from "react";
import { Box, Button, Flex, Hide, Image, Spacer } from "@chakra-ui/react";
import logo from "../../../public/logo.png";

const index = () => {
  return (
    <Flex
      pos="absolute"
      top={0}
      zIndex={1}
      w="100%"
      px={12}
      py={4}
      minWidth="max-content"
      alignItems="center"
      gap="2"
    >
      <Hide below="sm">
        <Box p="2">
          <Image src={logo.src} alt="naruto" objectFit="cover" />
        </Box>
      </Hide>
      <Spacer />
      <Button
        colorScheme="whiteAlpha"
        color="white"
        variant="outline"
        borderRadius={40}
        size={{base:"sm", md:"md"}}
      >
        Get in touch
      </Button>
    </Flex>
  );
};

export default index;
