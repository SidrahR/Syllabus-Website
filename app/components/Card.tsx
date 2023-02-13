import { Box, Button, Center, Heading, Image, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Card = ({
  props,
}: {
  props: {
    id: number;
    title: string;
    image: string;
    href: string;
  };
}) => {
  return (
    <div>
      {" "}
      <Center py={12}>
        <Box
          role={"group"}
          p={6}
          maxW={"335px"}
          w={"full"}
          backgroundColor={"#01b3bd"}
          boxShadow={"xl"}
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
              backgroundColor: "gray.600",
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
              src={props.image}
              alt={props.title}
            />
          </Box>
          <Stack pt={5} align={"center"}>
            <Heading
              fontSize={"2xl"}
              fontFamily={"body"}
              fontWeight={600}
              color={"white"}
              textAlign="center"
              minHeight="60px"
            >
              {props.title}
            </Heading>
            <Stack direction={"row"} align={"center"} pt={1}>
              <Link
                href={props.href}
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Button
                  fontSize={"md"}
                  fontWeight={500}
                  mt="2"
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
    </div>
  );
};

export default Card;
