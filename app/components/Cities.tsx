"use client";
import {
  Flex,
  Heading,
  HStack,
  Text,
  Box,
  Image,
  keyframes,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

const slideBtoTInAnimation = keyframes`
   from {
      transform: translateY(100%);
      opacity:0;
    }
    to {
      transform: translateX(0%);
      opacity:1;
    }
  
`;

export default function Cities() {
  const { ref: myRef, inView: ElementIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const slideBtoTAnimation = `${slideBtoTInAnimation} 1s forwards`;
  return (
    <Flex
      mx={{ base: "5", lg: "36" }}
      mb={{ base: "5", lg: "16" }}
      mt={{ base: "8", lg: "24" }}
      ref={myRef}
      animation={`${ElementIsVisible ? slideBtoTAnimation : ""} `}
      style={{ opacity: 0 }}
      flexDirection="column"
      alignItems={"center"}
      position="relative"
    >
      <Heading
        bgGradient="linear(to-l, red.600, red.500, red.600)"
        bgClip="text"
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
      >
        Join our Community
      </Heading>
      <Text mt="5" fontSize={{ base: "15", md: "20", lg: "15" }}>
        Apply for admissions today
      </Text>
      <HStack
        spacing={{ base: "0", md: "5", lg: "10" }}
        mt={{ base: "8", lg: "10" }}
        textAlign="center"
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        <Box
          pb={{ base: "8" }}
          _hover={{
            transform: "scale(1.1)",
            transition: "0.2s",
          }}
        >
          <Image
            height="200px"
            width="300px"
            alt={"Karachi"}
            borderRadius="10%"
            src="/karachi.jpg"
            boxShadow="dark-lg"
          />
          <Text mt="5">Karachi</Text>
        </Box>

        <Box
          pb={{ base: "8" }}
          _hover={{
            transform: "scale(1.1)",
            transition: "0.2s",
          }}
        >
          <Image
            height="200px"
            width="300px"
            alt={"Lahore"}
            borderRadius="10%"
            src="/lahore.webp"
            boxShadow="dark-lg"
          />
          <Text mt="5">Lahore</Text>
        </Box>

        <Box
          pb={{ base: "8" }}
          _hover={{
            transform: "scale(1.1)",
            transition: "0.2s",
          }}
        >
          <Image
            height="200px"
            width="300px"
            alt={"Islamabad"}
            borderRadius="10%"
            src="/islamabad.png"
            boxShadow="dark-lg"
          />
          <Text mt="5" fontSize="lg">
            Islamabad
          </Text>
        </Box>

        <Box
          pb={{ base: "8" }}
          _hover={{
            transform: "scale(1.1)",
            transition: "0.2s",
          }}
        >
          <Image
            height="200px"
            width="300px"
            alt={"Peshawar"}
            borderRadius="10%"
            src="/peshawar.jpg"
            boxShadow="dark-lg"
          />
          <Text mt="5">Peshawar</Text>
        </Box>
      </HStack>
    </Flex>
  );
}
