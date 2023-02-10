"use client";
import {
  Flex,
  Heading,
  HStack,
  Text,
  Box,
  keyframes,
  Center,
  Avatar,
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

const fadeInAnimation = keyframes`
   from {
      opacity:0;
    }
    to {
      opacity:1;
    }
  
`;

export default function Faculty() {
  const fadeAnimation = `${fadeInAnimation} 1s forwards`;
  const slideBtoTAnimation = `${slideBtoTInAnimation} 1s forwards`;

  const { ref: myRef, inView: ElementIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Flex
      mx={{ base: "5", lg: "36" }}
      ref={myRef}
      animation={`${ElementIsVisible ? slideBtoTAnimation : ""} `}
      style={{ opacity: 0 }}
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Box
        w={{ base: "95%", md: "95%", lg: "60%" }}
        pr={{ base: "0", md: "0", lg: "40" }}
      >
        <Heading
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          bgGradient="linear(to-l, red.600, red.500, red.600)"
          bgClip="text"
          textAlign={"left"}
        >
          Meet the Inspiring Minds Shaping the Future
        </Heading>
        <Text
          pt="5"
          fontSize={{ base: "15", md: "20", lg: "15" }}
          textAlign="justify"
        >
          Our faculty members are highly qualified and experienced professionals
          in their respective fields. They bring a wealth of knowledge and a
          passion for teaching to the classroom. With a commitment to student
          success, they provide a supportive and engaging learning environment.
          Their expertise, combined with the latest technology and teaching
          methods, ensures that our students receive a well-rounded education
          that prepares them for real-world success
        </Text>
      </Box>

      <Box flexDirection="column" alignSelf={{ base: "center" }}>
        <HStack
          flexDirection={["column", "column", "row"]}
          spacing={["0", "0", "12"]}
        >
          <Center py={6}>
            <Box
              maxW={"280px"}
              w={{ base: "300px", md: "300", lg: "170px" }}
              bg="gray.900"
              boxShadow={"2xl"}
              rounded={"lg"}
              p={2}
              textAlign={"center"}
              backgroundColor={"#01b3bd"}
              ref={myRef}
              animation={`${ElementIsVisible ? fadeAnimation : ""} `}
              style={{ animationDelay: "0.5s", opacity: 0 }}
            >
              <Avatar
                size={{ base: "3xl", md: "3xl", lg: "xl" }}
                src={"/zia_khan.jpg"}
                mb={2}
                pos={"relative"}
              />
              <Heading
                fontSize={{ base: "xl", md: "xl", lg: "md" }}
                fontFamily={"body"}
              >
                Zia Khan
              </Heading>
            </Box>
          </Center>

          <Center py={6}>
            <Box
              maxW={"280px"}
              w={{ base: "300px", md: "300", lg: "170px" }}
              bg={"gray.900"}
              boxShadow={"2xl"}
              rounded={"lg"}
              p={2}
              textAlign={"center"}
              backgroundColor={"#01b3bd"}
              ref={myRef}
              animation={`${ElementIsVisible ? fadeAnimation : ""} `}
              style={{ animationDelay: "1s", opacity: 0 }}
            >
              <Avatar
                size={{ base: "3xl", md: "3xl", lg: "xl" }}
                src={"/daniyal.jpg"}
                mb={2}
                pos={"relative"}
              />
              <Heading
                fontSize={{ base: "xl", md: "xl", lg: "md" }}
                fontFamily={"body"}
              >
                Daniyal Nagori
              </Heading>
            </Box>
          </Center>
        </HStack>

        <HStack
          flexDirection={["column", "column", "row"]}
          spacing={["0", "0", "12"]}
        >
          <Center py={6}>
            <Box
              maxW={"280px"}
              w={{ base: "300px", md: "300", lg: "170px" }}
              bg="gray.900"
              boxShadow={"2xl"}
              rounded={"lg"}
              p={2}
              textAlign={"center"}
              backgroundColor={"#01b3bd"}
              ref={myRef}
              animation={`${ElementIsVisible ? fadeAnimation : ""} `}
              style={{ animationDelay: "1.5s", opacity: 0 }}
            >
              <Avatar
                size={{ base: "3xl", md: "3xl", lg: "xl" }}
                src={"/hira_khan.jpg"}
                mb={2}
                pos={"relative"}
              />
              <Heading
                fontSize={{ base: "xl", md: "xl", lg: "md" }}
                fontFamily={"body"}
              >
                Hira Khan
              </Heading>
            </Box>
          </Center>

          <Center py={6}>
            <Box
              maxW={"280px"}
              w={{ base: "300px", md: "300", lg: "170px" }}
              bg={"gray.900"}
              boxShadow={"2xl"}
              rounded={"lg"}
              p={2}
              textAlign={"center"}
              backgroundColor={"#01b3bd"}
              ref={myRef}
              animation={`${ElementIsVisible ? fadeAnimation : ""} `}
              style={{ animationDelay: "2s", opacity: 0 }}
            >
              <Avatar
                size={{ base: "3xl", md: "3xl", lg: "xl" }}
                src={"/adil_altaf.jpg"}
                mb={2}
                pos={"relative"}
              />
              <Heading
                fontSize={{ base: "xl", md: "xl", lg: "md" }}
                fontFamily={"body"}
              >
                Adil Altaf
              </Heading>
            </Box>
          </Center>
        </HStack>
      </Box>
    </Flex>
  );
}
