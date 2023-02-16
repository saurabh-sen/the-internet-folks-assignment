import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../Header"
import HomePage from "../HomePage"

const index = () => {
  return (
    <Box color='white' pos="relative">
        <Header />
        <HomePage />
    </Box>
  );
};

export default index;
