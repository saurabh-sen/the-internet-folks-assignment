import { Box, Button, Flex, Hide, Image, Text } from "@chakra-ui/react";
import React from "react";
import about from ".././../../public/about.png";

const index = () => {
  return (
    <Flex bg="#f7f8fb" justifyContent="space-evenly" alignItems="center" >
      <Hide below="md">
        <Image src={about.src} alt="about" />
      </Hide>
      <Box my={{base: '8rem', md: 'auto'}} width={{ sm: "100%", md: "20rem" }} textAlign={{base: "center", md: 'inherit'}}>
        <Text fontWeight={600} fontSize={{base:"26px", md:"36px"}} color="#0E2368" my={{base:'2rem', md:0}}>
          About Us
        </Text>
        <Text my={{base:'2rem', md:0}} fontSize={{base:"11px", md:"15px"}} color="#444957">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </Text>
        <Button my={{base:'2rem', md:0}}
          size="md"
          px={10}
          margin={{ base: "auto", md: 0 }}
          width="max-content"
          colorScheme="red"
          color="white"
          borderRadius={40}
        >
          Read more
        </Button>
      </Box>
    </Flex>
  );
};

export default index;
