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
          Artificial Intelligence (AI) and Deep Learning - Specialized Tracks
        </Heading>
        <Text pb="20px" fontSize="lg" pt="10px" textAlign="center">
          The AI and Deep Learning specialization focuses on building and
          deploying intelligent APIs using OpenAI models and building custom
          Deep Learning Tensorflow models.
        </Text>
        <UnorderedList fontSize="lg" spacing="5">
          <ListItem>
            <Heading fontSize="xl">Quarter IV </Heading>
            AI-351: Developing Planet-Scale Intelligent APIs and Python
            Programming
          </ListItem>
          <ListItem>
            <Heading fontSize="xl">Quarter V </Heading>
            AI-361: Deep Learning and MLOps
          </ListItem>
        </UnorderedList>
      </Box>

      <Footer />
    </>
  );
}
