"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CoreCourses from "../../components/CoreCourses";
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

export default function page() {
  return (
    <Box bgGradient="linear(teal.50, teal.100, teal.200)">
      <Navbar />
      <CoreCourses />

      <Box py="50px" width={["80%", "80%", "45%"]} margin="auto">
        <Heading
          textAlign="center"
          bgGradient="linear(to-l, red.600, red.500, red.600)"
          bgClip="text"
        >
          Network Programmability and Automation Specialization - Specialized
          Tracks
        </Heading>
        <Text textAlign="center" pb="20px" fontSize="lg" pt="10px">
          More than ever, network engineers are finding it challenging to
          complete their duties entirely manually. Network automation is now
          crucial due to new protocols, technologies, delivery models, and the
          requirement for enterprises to become more adaptable and agile. This
          course teaches network engineers how to automate systems with code
          using a variety of technologies and tools, including Linux, Python,
          APIs, and Git.
        </Text>
        <UnorderedList fontSize="lg" spacing="5">
          <ListItem>
            <Heading fontSize="xl">Quarter IV </Heading>
            BNPA-351: CCNA 200-301 Certification
          </ListItem>
          <ListItem>
            <Heading fontSize="xl">Quarter V </Heading>
            NPA-361: Network Programmability and Automation
          </ListItem>
        </UnorderedList>
      </Box>

      <Footer />
    </Box>
  );
}
