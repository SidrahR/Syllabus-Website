"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CoreCourses from "../../components/CoreCourses";
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

export default function page() {
  return (
    <Box bgGradient="linear(to-br,teal.50, teal.100, teal.200)">
      <Navbar />
      <CoreCourses />

      <Box py="50px" width={["80%", "80%", "45%"]} margin="auto">
        <Heading
          textAlign="center"
          bgGradient="linear(to-l, red.600, red.500, red.600)"
          bgClip="text"
        >
          Genomics and Bioinformatics - Specialized Tracks
        </Heading>
        <Text textAlign="center" pb="20px" fontSize="lg" pt="10px">
          Genomics is the study of the total genetic makeup of individual
          organisms, and how this genetic information is structured, functions,
          and has evolved; bioinformatics encompasses a diverse range of
          analytical methods and tools applied to genomic data. This
          Specialization focuses on performing complex bioinformatics analysis
          using the most essential Python libraries and applications.
        </Text>
        <UnorderedList fontSize="lg" spacing="5">
          <ListItem>
            <Heading fontSize="xl">Quarter IV </Heading>
            Bio-351: Python for Biologists
          </ListItem>
          <ListItem>
            <Heading fontSize="xl">Quarter V </Heading>
            Bio-361: Bioinformatics with Python
          </ListItem>
        </UnorderedList>
      </Box>

      <Footer />
    </Box>
  );
}
