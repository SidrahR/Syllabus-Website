"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  useColorModeValue,
  Flex,
  HStack,
} from "@chakra-ui/react";

export default function page() {
  return (
    <Box bgGradient="linear(to-br,teal.50, teal.100, teal.200)">
      <Navbar />

      <Flex flexDirection="column" alignItems="center" py="10">
        <Heading
          textAlign="center"
          fontSize={"5xl"}
          bgGradient="linear(to-l, red.600, red.500, red.600)"
          bgClip="text"
        >
          Faculty
        </Heading>
        <Text textAlign="justify" py="5" fontSize="15" maxW={"80%"}>
          Our faculty members are highly qualified and experienced professionals
          in their respective fields. They bring a wealth of knowledge and a
          passion for teaching to the classroom. With a commitment to student
          success, they provide a supportive and engaging learning environment.
          Their expertise, combined with the latest technology and teaching
          methods, ensures that our students receive a well-rounded education
          that prepares them for real-world success
        </Text>
        <HStack
          flexDirection={["column", "column", "row"]}
          spacing={["0", "0", "12"]}
        >
          <Center py={6}>
            <Box
              maxW={"280px"}
              h={"350px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"lg"}
              p={6}
              textAlign={"center"}
              backgroundColor={"#01b3bd"}
            >
              <Avatar
                size={"xl"}
                src={"/zia_khan.jpg"}
                mb={4}
                pos={"relative"}
              />
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                Zia Khan
              </Heading>
              <Text textAlign={"center"} color="white" px={3}>
                Web 3, DeFi, Cloud and Metaverse Architect | Tokenomist and
                Metanomist | CEO Panacloud | Volunteer COO Presidential
                Initiative for AI and Computing
              </Text>
            </Box>
          </Center>

          <Center py={6}>
            <Box
              maxW={"280px"}
              h={"350px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"lg"}
              p={6}
              textAlign={"center"}
              backgroundColor={"#01b3bd"}
            >
              <Avatar
                size={"xl"}
                src={"/daniyal.jpg"}
                mb={4}
                pos={"relative"}
              />
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                Daniyal Nagori
              </Heading>
              <Text textAlign={"center"} color="white" px={3}>
                Software Development Lead at Panacloud. Full-stack developer and
                DevOps Architect. Certified Kubernetes Application Developer AWS
                Certified Developer
              </Text>
            </Box>
          </Center>

          <Center py={6}>
            <Box
              maxW={"280px"}
              h={"350px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"lg"}
              p={6}
              textAlign={"center"}
              backgroundColor={"#01b3bd"}
            >
              <Avatar
                size={"xl"}
                src={"/hira_khan.jpg"}
                mb={4}
                pos={"relative"}
              />
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                Hira Khan
              </Heading>
              <Text textAlign={"center"} color="white" px={3}>
                Director at the Women Empowerment Div. of the Presidential
                Initiative for Artificial Intelligence & Computing (PIAIC)
              </Text>
            </Box>
          </Center>

          <Center py={6}>
            <Box
              maxW={"280px"}
              h={"350px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"lg"}
              p={6}
              textAlign={"center"}
              backgroundColor={"#01b3bd"}
            >
              <Avatar
                size={"xl"}
                src={"/adil_altaf.jpg"}
                mb={4}
                pos={"relative"}
              />
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                Adil Altaf
              </Heading>
              <Text textAlign={"center"} color="white" px={3}>
                Internet-Scale Multi-Cloud Global App Architect | Full Stack
                Cloud Developer | Continuous Innovation Leader
              </Text>
            </Box>
          </Center>
        </HStack>
      </Flex>
      <Footer />
    </Box>
  );
}
