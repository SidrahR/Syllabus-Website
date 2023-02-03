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
    </>
  );
}
