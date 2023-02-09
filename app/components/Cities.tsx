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
      mx="36"
      mb="16"
      mt="32"
      ref={myRef}
      animation={`${ElementIsVisible ? slideBtoTAnimation : ""} `}
      style={{ opacity: 0 }}
      flexDirection="column"
      alignItems={"center"}
      position="relative"
    >
      <Heading
        fontSize={"5xl"}
        bgGradient="linear(to-l, red.600, red.500, red.600)"
        bgClip="text"
      >
        Join our Community
      </Heading>
      <Text mt="5" fontSize="15">
        Apply for admissions today
      </Text>
      <HStack spacing="10" mt="10" textAlign="center">
        <Box
          _hover={{
            transform: "scale(1.1)",
            transition: "0.2s",
          }}
        >
          <Image
            height="150px"
            width="300px"
            alt={"Karachi"}
            borderRadius="10%"
            src="https://blog.graana.com/wp-content/uploads/2022/03/0f62dd7db5572ff8e87d34d957464495.jpg"
            boxShadow="dark-lg"
          />
          <Text mt="5">Karachi</Text>
        </Box>

        <Box
          _hover={{
            transform: "scale(1.1)",
            transition: "0.2s",
          }}
        >
          <Image
            height="150px"
            width="300px"
            alt={"Lahore"}
            borderRadius="10%"
            src="https://aaaassociates.com/wp-content/uploads/2021/11/minare-pakistan-lahore.jpg"
            boxShadow="dark-lg"
          />
          <Text mt="5">Lahore</Text>
        </Box>

        <Box
          _hover={{
            transform: "scale(1.1)",
            transition: "0.2s",
          }}
        >
          <Image
            height="150px"
            width="300px"
            alt={"Islamabad"}
            borderRadius="10%"
            src="https://www.researchgate.net/publication/313765674/figure/fig3/AS:670020954775560@1536756852316/Dome-form-and-feature-of-the-Shah-Faisal-Mosque.jpg"
            boxShadow="dark-lg"
          />
          <Text mt="5" fontSize="lg">
            Islamabad
          </Text>
        </Box>

        <Box
          _hover={{
            transform: "scale(1.1)",
            transition: "0.2s",
          }}
        >
          <Image
            height="150px"
            width="300px"
            alt={"Peshawar"}
            borderRadius="10%"
            src="https://media-cdn.tripadvisor.com/media/photo-s/18/e1/a7/80/bab-e-khyber.jpg"
            boxShadow="dark-lg"
          />
          <Text mt="5">Peshawar</Text>
        </Box>
      </HStack>
    </Flex>
  );
}
