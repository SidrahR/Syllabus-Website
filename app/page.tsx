"use client";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Cities from "./components/Cities";
import Faculty from "./components/Faculty";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bgGradient="linear(teal.50, teal.100, teal.200)">
      <Navbar />
      <Header />
      <Cards />
      <Faculty />
      <Cities />
      <Footer />
    </Box>
  );
}
