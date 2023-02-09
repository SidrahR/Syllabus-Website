import {
  Heading,
  Stack,
  Image,
  Button,
  Link,
  Box,
  IconButton,
  useBreakpointValue,
  Center,
  Text,
  keyframes,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
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

const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export default function Cards() {
  const { ref: myRef, inView: ElementIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const slideBtoTAnimation = `${slideBtoTInAnimation} 1s forwards`;

  const [slider, setSlider] = React.useState<Slider | null>(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  return (
    <Flex
      direction="column"
      ref={myRef}
      animation={`${ElementIsVisible ? slideBtoTAnimation : ""} `}
      style={{ opacity: 0 }}
      mt="24"
    >
      <Heading
        textAlign="center"
        fontSize={"5xl"}
        bgGradient="linear(to-l, red.600, red.500, red.600)"
        bgClip="text"
      >
        Specialized Courses
      </Heading>
      <Text textAlign="center" pt="5" fontSize="15">
        After completing the core courses in first two quarters the participants
        will select one or more specializations consisting of two courses each
      </Text>
      <Box
        position={"relative"}
        height={"600px"}
        width={"100%"}
        overflow={"hidden"}
        paddingLeft="100px"
        paddingRight="100px"
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          <Center py={12}>
            <Box
              role={"group"}
              p={6}
              maxW={"335px"}
              w={"full"}
              backgroundColor={"#01b3bd"}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
            >
              <Box
                rounded={"lg"}
                mt={-8}
                pos={"relative"}
                height={"230px"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  backgroundColor: "gray.800",
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}
              >
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src="https://images.theconversation.com/files/414962/original/file-20210806-17-jibbct.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                  alt="Web 3.0 (Blockchain) and Metaverse"
                />
              </Box>
              <Stack pt={5} align={"center"}>
                <Heading
                  fontSize={"2xl"}
                  fontFamily={"body"}
                  fontWeight={600}
                  color={"white"}
                  textAlign="center"
                >
                  Web 3.0 (Blockchain) and Metaverse
                </Heading>
                <Stack direction={"row"} align={"center"} pt={1}>
                  <Link
                    href="/web3"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <Button
                      fontSize={"md"}
                      fontWeight={500}
                      color={"white"}
                      bg={"red.700"}
                      _hover={{
                        bg: "red.800",
                      }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>

          <Center py={12}>
            <Box
              role={"group"}
              p={6}
              maxW={"335px"}
              w={"full"}
              backgroundColor={"#01b3bd"}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
            >
              <Box
                rounded={"lg"}
                mt={-8}
                pos={"relative"}
                height={"230px"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  backgroundColor: "gray.800",
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}
              >
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src="https://emarsys.com/app/uploads/2020/03/real-ai.jpg"
                  alt="AI & deep learning"
                />
              </Box>
              <Stack pt={5} align={"center"}>
                <Heading
                  fontSize={"2xl"}
                  fontFamily={"body"}
                  fontWeight={600}
                  color={"white"}
                  textAlign="center"
                >
                  Artificial Intelligence (AI) and Deep Learning
                </Heading>
                <Stack direction={"row"} align={"center"} pt={1}>
                  <Link
                    href="/ai"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <Button
                      fontSize={"md"}
                      fontWeight={500}
                      color={"white"}
                      bg={"red.700"}
                      _hover={{
                        bg: "red.800",
                      }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>

          <Center py={12}>
            <Box
              role={"group"}
              p={6}
              maxW={"335px"}
              w={"full"}
              backgroundColor={"#01b3bd"}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
            >
              <Box
                rounded={"lg"}
                mt={-8}
                pos={"relative"}
                height={"230px"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  backgroundColor: "gray.800",
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}
              >
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src="https://images.techhive.com/images/article/2015/06/cloud-development-ts-100588283-large.jpg?auto=webp&quality=85,70"
                  alt="Cloud-Native Computing"
                />
              </Box>
              <Stack pt={5} align={"center"}>
                <Heading
                  fontSize={"2xl"}
                  fontFamily={"body"}
                  fontWeight={600}
                  color={"white"}
                  textAlign="center"
                >
                  Cloud-Native Computing{" "}
                  <Text color={"#01b3bd"}>Computing</Text>
                </Heading>
                <Stack direction={"row"} align={"center"} pt={1}>
                  <Link
                    href="/cloud_native"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <Button
                      fontSize={"md"}
                      fontWeight={500}
                      color={"white"}
                      bg={"red.700"}
                      _hover={{
                        bg: "red.800",
                      }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>

          <Center py={12}>
            <Box
              role={"group"}
              p={6}
              maxW={"335px"}
              w={"full"}
              backgroundColor={"#01b3bd"}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
            >
              <Box
                rounded={"lg"}
                mt={-8}
                pos={"relative"}
                height={"230px"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  backgroundColor: "gray.800",
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}
              >
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src="https://www.lifely.cc/wp-content/uploads/2022/07/IoT.jpeg"
                  alt="Ambient Computing and IoT"
                />
              </Box>
              <Stack pt={5} align={"center"}>
                <Heading
                  fontSize={"2xl"}
                  fontFamily={"body"}
                  fontWeight={600}
                  color={"white"}
                  textAlign="center"
                >
                  Ambient Computing and IoT
                </Heading>
                <Stack direction={"row"} align={"center"} pt={1}>
                  <Link
                    href="/iot"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <Button
                      fontSize={"md"}
                      fontWeight={500}
                      color={"white"}
                      bg={"red.700"}
                      _hover={{
                        bg: "red.800",
                      }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>

          <Center py={12}>
            <Box
              role={"group"}
              p={6}
              maxW={"335px"}
              w={"full"}
              backgroundColor={"#01b3bd"}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
            >
              <Box
                rounded={"lg"}
                mt={-8}
                pos={"relative"}
                height={"230px"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  backgroundColor: "gray.800",
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}
              >
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src="https://www.unr.edu/main/images/divisions/research-innovation/ncb/dna.jpg"
                  alt="Genomics and Bioinformatics"
                />
              </Box>
              <Stack pt={5} align={"center"}>
                <Heading
                  fontSize={"2xl"}
                  fontFamily={"body"}
                  fontWeight={600}
                  color={"white"}
                  textAlign="center"
                >
                  Genomics and Bioinformatics
                </Heading>
                <Stack direction={"row"} align={"center"} pt={1}>
                  <Link
                    href="/genomics"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <Button
                      fontSize={"md"}
                      fontWeight={500}
                      color={"white"}
                      bg={"red.700"}
                      _hover={{
                        bg: "red.800",
                      }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>

          <Center py={12}>
            <Box
              role={"group"}
              p={6}
              maxW={"335px"}
              w={"full"}
              backgroundColor={"#01b3bd"}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
            >
              <Box
                rounded={"lg"}
                mt={-8}
                pos={"relative"}
                height={"230px"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  backgroundColor: "gray.800",
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}
              >
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src="https://industrywired.com/wp-content/uploads/2019/08/How_to-Embrace-Automation-for-Business-Success.jpg"
                  alt={"Network Programmability and Automation"}
                />
              </Box>
              <Stack pt={5} align={"center"}>
                <Heading
                  fontSize={"2xl"}
                  fontFamily={"body"}
                  fontWeight={600}
                  color={"white"}
                  textAlign="center"
                >
                  Network Programmability and Automation
                </Heading>
                <Stack direction={"row"} align={"center"} pt={1}>
                  <Link
                    href="/automation"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <Button
                      fontSize={"md"}
                      fontWeight={500}
                      color={"white"}
                      bg={"red.700"}
                      _hover={{
                        bg: "red.800",
                      }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Center>
        </Slider>
      </Box>
    </Flex>
  );
}
