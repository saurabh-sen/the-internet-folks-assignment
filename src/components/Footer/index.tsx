import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../../public/logo.png"
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa"

const index = () => {
  return (
    <Flex p={16} py="5rem" fontSize={{base:10, md:15}} bg="#f8f8f8" color="#828B9C" justify={{base: "center", md: "space-around"}} flexDir={{base:"column", md: "row"}} gap={30}>
      <Image w={{ base: 75, md:161}} h={{base:58, md:125}} src={logo.src} alt="logo" my="auto" mx={{base: "auto", md: 0}}  />
      <Flex flexDir="column" gap={15} >
        <Text fontSize={{base:15, md:18}} color="#0E2368" fontWeight={600}>Contact Us</Text>
        <Text w={150}>Lorem lpsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</Text>
        <Text>sensaurabh@gmail.com</Text>
        <Text>(904)443-0343</Text>
      </Flex>
      <Flex flexDir="column" gap={15} >
        <Text fontSize={{base:15, md:18}} color="#0E2368" fontWeight={600}>More</Text>
        <Text>About Us</Text>
        <Text>Products</Text>
        <Text>Career</Text>
        <Text>Contact Us</Text>
      </Flex>
      <Flex flexDir="column" my="auto" gap={15}  m={{base: "auto", md: 0}} >
        <Text fontSize={{base:15, md:18}} color="#0E2368" fontWeight={600}>Social Links</Text>
        <Flex gap={10}>
          <AiOutlineInstagram fontSize={25} color="#0E2368" fontWeight={600} />
          <AiOutlineTwitter fontSize={25} color="#0E2368" fontWeight={600} />
          <FaFacebookF fontSize={25} color="#0E2368" fontWeight={600} />
        </Flex>
        <Text>© 2022 Food Truck Example</Text>
      </Flex>
    </Flex>
  );
};

export default index;
