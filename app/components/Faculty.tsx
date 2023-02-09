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
          textAlign={"center"}
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
              w="170px"
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
                size={"xl"}
                src={
                  "https://scontent.fisb6-2.fna.fbcdn.net/v/t39.30808-6/263273711_10158351180047623_7045526683278197383_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGydZC0V3XDmOaR7b-Zt4226dXcOl3Y_4Dp1dw6Xdj_gNQzasCwq-RpiRW1x8y9Bek&_nc_ohc=sWnLX3hlNv4AX_djW-J&_nc_ht=scontent.fisb6-2.fna&oh=00_AfCxT5Uj-iGWmlw4QhIJtpk0ON-eYB2ogti4-Xc7Q9jjBA&oe=63E25B53"
                }
                mb={2}
                pos={"relative"}
              />
              <Heading fontSize={"md"} fontFamily={"body"}>
                Zia Khan
              </Heading>
            </Box>
          </Center>

          <Center py={6}>
            <Box
              maxW={"280px"}
              w="170px"
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
                size={"xl"}
                src={
                  "https://media.licdn.com/dms/image/C4D03AQE1Hzv61ccMVw/profile-displayphoto-shrink_800_800/0/1556048207367?e=1680739200&v=beta&t=Wi1q3Iy2rTnTI11ytdrHq8h7KEDx4TrAonNHlm92eUQ"
                }
                mb={2}
                pos={"relative"}
              />
              <Heading fontSize={"md"} fontFamily={"body"}>
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
              w="170px"
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
                size={"xl"}
                src={
                  "https://media.licdn.com/dms/image/C4D03AQFuhdYPmkC0sA/profile-displayphoto-shrink_800_800/0/1562700934047?e=1680739200&v=beta&t=tlU5jHuVIzQIWmOxCLgbybPp3njTwUc-IeXpR46WBPE"
                }
                mb={2}
                pos={"relative"}
              />
              <Heading fontSize={"md"} fontFamily={"body"}>
                Hira Khan
              </Heading>
            </Box>
          </Center>

          <Center py={6}>
            <Box
              maxW={"280px"}
              w="170px"
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
                size={"xl"}
                src={
                  "https://media.licdn.com/dms/image/C4D03AQGeWhSxfJnvlw/profile-displayphoto-shrink_800_800/0/1632680095611?e=1680739200&v=beta&t=5364ux4tBEUyKhOkxMIhM1ST1s2yffzZSu17xt2Ktzw"
                }
                mb={2}
                pos={"relative"}
              />
              <Heading fontSize={"md"} fontFamily={"body"}>
                Adil Altaf
              </Heading>
            </Box>
          </Center>
        </HStack>
      </Box>
    </Flex>
  );
}
