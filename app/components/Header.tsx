"use client";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Icon,
  IconProps,
  Box,
  Image,
  useColorModeValue,
  VStack,
  keyframes,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

const slideInAnimation = keyframes`
   from {
      transform: translateY(-100%);
      opacity:0;
    }
    to {
      transform: translateX(0%);
      opacity:1;
    }
  
`;

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

export default function Header() {
  const { ref: myRef, inView: ElementIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const slideAnimation = `${slideInAnimation} 1s`;
  const slideBtoTAnimation = `${slideBtoTInAnimation} 1s forwards`;
  const fadeAnimation = `${fadeInAnimation} 1s forwards`;
  const headingStyle = { animationDelay: "1s", opacity: 0 };
  return (
    <Box mt="10">
      <Container maxW={"6xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 15 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Box animation={slideAnimation}>
                <Text
                  as="span"
                  fontWeight={600}
                  fontSize={{ base: "xl", sm: "2xl", lg: "2xl" }}
                >
                  Transform Your Future with <br />
                </Text>
              </Box>
              <Box style={headingStyle} animation={fadeAnimation}>
                <Text
                  bgGradient="linear(to-r, red.600,red.500, red.600)"
                  bgClip="text"
                  as={"span"}
                  position={"relative"}
                  fontSize={"7xl"}
                >
                  Panaverse DAO
                </Text>
              </Box>
            </Heading>
            <Text color={"gray.800"} textAlign="justify" fontSize="15">
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              Panaverse DAO is a movement to spread these technolgies globally.
              It is community of Web 3 and Metaverse developers, designers,
              trainers, startup founders and service providers.
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Blob
              w={{ base: "0", md: "120%" }}
              h={{ base: "0", md: "140%" }}
              position={"absolute"}
              top={"-20%"}
              left={0}
              zIndex={0}
              color={useColorModeValue("red.100", "red.400")}
            />
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"Dao Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={"/dao.jpg"}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>

      <Flex
        mx="36"
        my="32"
        ref={myRef}
        animation={`${ElementIsVisible ? slideBtoTAnimation : ""} `}
        style={{ opacity: 0 }}
      >
        <Image
          alt={"Earning"}
          w={"40%"}
          h={"35%"}
          borderRadius="10%"
          src={"/earn3.png.png"}
          boxShadow="dark-lg"
          backgroundSize="cover"
        />
        <VStack mx="20">
          <Heading
            fontSize={"5xl"}
            bgGradient="linear(to-l, red.600, red.500, red.600)"
            bgClip="text"
          >
            Earn While You Learn
          </Heading>
          <Text pt="50" textAlign="justify" fontSize="15">
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program’s beginning. It resembles a
            cross between a corporate venture and an educational project.
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
