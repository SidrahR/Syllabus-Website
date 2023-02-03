import React from "react";
import {
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Flex,
  Box,
} from "@chakra-ui/react";

export default function CoreCourses() {
  return (
    <>
      <Box pt="10px" width="45%" margin="auto">
        <Heading textAlign="center">
          Core Courses (Common in All Specializations)
        </Heading>
        <Text pb="20px" fontSize="lg" pt="10px" textAlign="center">
          Every participant of the program will start by completing the
          following three core courses
        </Text>
        <UnorderedList fontSize="lg" spacing="5">
          <ListItem>
            <Heading fontSize="xl">Quarter I (Core) CS-101: </Heading>
            Object-Oriented Programming using TypeScript
          </ListItem>
          <ListItem>
            <Heading fontSize="xl">Quarter II (Core) W2-201: </Heading>
            Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs
            using Next.js 13 and Cloud Development Kit (CDK) for Terraform
          </ListItem>
          <ListItem>
            <Heading fontSize="xl">Quarter III (Core) $-101:</Heading> Dollar
            Making Bootcamp - Full-Stack Template and API Product Development
          </ListItem>
        </UnorderedList>
      </Box>
    </>
  );
}
