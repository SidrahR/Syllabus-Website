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
          Cloud-Native Computing - Specialized Tracks
        </Heading>
        <Text textAlign="center" pb="20px" fontSize="lg" pt="10px">
          The Cloud-Native Computing Specialization focuses on Containers,
          Kubernetes, and CDK for Kubernetes.
        </Text>
        <UnorderedList fontSize="lg" spacing="5">
          <ListItem>
            <Heading fontSize="xl">Quarter IV </Heading>
            CN-351: Certified Kubernetes Application Developer (CKAD)
          </ListItem>
          <ListItem>
            <Heading fontSize="xl">Quarter V </Heading>
            CN-361: Developing Multi-Cloud APIs using CDK for Terraform
          </ListItem>
        </UnorderedList>
      </Box>

      <Footer />
    </Box>
  );
}
