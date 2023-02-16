import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { data } from "./data";
import image from "../../../public/about.png";

const Articles = () => {
  const maxScrollWidth = useRef<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <Box className="carousel" p={{ base: 5, md: 20 }}>
      <Text
        fontWeight={600}
        fontSize={{ base: 28, md: 45 }}
        color="#0E2368"
      >
        Latest Articles
      </Text>

      {/* CAROUSEL */}
        <Flex
        py={{ base: 4, md: 8 }}
          ref={carousel}
          gap={10}
          overflow="hidden"
          scrollSnapType="x mandatory"
          scrollBehavior='smooth'
          zIndex={0}
          className="carousel-container"
        >
          {data.map((resource, index, array) => {
            return (
              <Flex key={index} flexDir="column" textAlign="center" scrollSnapAlign="start" border="1px solid"
                borderColor="gray.200"
                borderRadius={5}
                gap={3}
                px={10}
                py={5}
                shadow="sm"
                alignItems="center"
                justifyContent="center"
                className="carousel-item"
              >
                <Image
                  borderRadius={10}
                  width={{ base: 200, md: 300 }}
                  className="rounded-full"
                  src={resource.imageUrl}
                  alt="carousel__image"
                />
                <Text
                  fontSize={{ base: "16px", md: "21px" }}
                  color="#0E2368"
                  fontWeight={700}
                  width={{ base: 180, md: 300 }}
                >
                  {resource.title}
                </Text>
                <Text fontSize={{ base: "12x", md: "15px" }} color="#444957">
                  {resource.desc}
                </Text>
                <Button
                variant="outline"
                  size="md"
                  px={10}
                  margin={{ base: "auto", md: 0 }}
                  width="max-content"
                  color="#424961"
                  borderRadius={40}
                  borderColor="#424961"
                  borderWidth={2}
                  fontSize={{ base: "12x", md: "15px" }}
                >
                  Read More
                </Button>
              </Flex>
            );
          })}
        </Flex>

        {/* BUTTONS */}
        <Flex
          mt={10}
          justifyContent="center"
          alignItems="center"
          gap={4}
          className="carousel__buttons"
        >
          {/* PREVIOUS BUTTON */}
          <Button
            variant="outline"
            onClick={movePrev}
            color="white"
            borderRadius={5}
            borderColor="#AFAFAF"
            opacity={0.4}
            _hover={{ opacity: 1 }}
            _disabled={{ opacity: 0, cursor: "not-allowed" }}
            transition="all ease-in-out duration-300"
            className="absolute text-white w-10 text-center opacity-70 hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed z-10 transition-all ease-in-out duration-300 bg-gray-400 rounded-full h-fit top-[42%] p-3"
            disabled={isDisabled("prev")}
          >
            <svg
              width="12px"
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </Button>
          {/* NEXT BUTTON */}
          <Text fontSize={{base: 12,md:22}}>1/2</Text>
          <Button
            variant="outline"
            onClick={moveNext}
            color="white"
            borderRadius={5}
            borderColor="#AFAFAF"
            opacity={0.6}
            _hover={{ opacity: 1 }}
            _disabled={{ opacity: 0, cursor: "not-allowed" }}
            transition="all ease-in-out duration-300"
            className=" text-white w-10 text-center hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed z-10 transition-all ease-in-out duration-300 absolute right-[35px] rounded-full h-fit p-3 top-[42%] bg-gray-400 opacity-70"
            disabled={isDisabled("next")}
          >
            <svg
              width="10px"
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </Button>
        </Flex>

    </Box>
  );
};

export default Articles;
