"use client";

import Navbar from "../Navbar";
import Footer from "../Footer";
import CoreCourses from "../CoreCourses";
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

export default function page() {
  return (
    <>
      <Navbar />
      <CoreCourses />

      <Box py="50px" width={["80%", "80%", "45%"]} margin="auto">
        <Heading textAlign="center">
          Web 3.0 and Metaverse - Specialized Tracks
        </Heading>
        <Text pb="20px" fontSize="lg" pt="10px" textAlign="center">
          This Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by specializing in building worlds that merge the best
          of cutting-edge decentralized distributed blockchains with 3D
          metaverse client experiences.
        </Text>
        <UnorderedList fontSize="lg" spacing="5">
          <ListItem>
            <Heading fontSize="xl">Quarter IV </Heading>
            W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
          </ListItem>
          <ListItem>
            <Heading fontSize="xl">Quarter V </Heading>
            MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse
            Experiences
          </ListItem>
        </UnorderedList>
      </Box>

      <Footer />
    </>
  );
}
