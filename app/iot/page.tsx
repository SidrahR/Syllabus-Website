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

      <Box py="50px" width="45%" margin="auto">
        <Heading textAlign="center">
          Ambient Computing and IoT - Specialized Tracks
        </Heading>
        <Text textAlign="center" pb="20px" fontSize="lg" pt="10px">
          The Ambient Computing and IoT Specialization focuses on building Smart
          Homes, Offices, Factories, and Cities using Voice computing, Matter
          Protocol, and Embedded Devices.
        </Text>
        <UnorderedList fontSize="lg" spacing="5">
          <ListItem>
            <Heading fontSize="xl">Quarter IV </Heading>
            AC-351: Ambient Computing with Voice Assistants and Matter Protocol
            Devices
          </ListItem>
          <ListItem>
            <Heading fontSize="xl">Quarter V </Heading>
            AC-361: Embedded Programming using C and Rust
          </ListItem>
        </UnorderedList>
      </Box>

      <Footer />
    </>
  );
}
