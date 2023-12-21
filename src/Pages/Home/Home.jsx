import { AppShell, Box, Flex, Title } from "@mantine/core";
import React from "react";
import Toolbar from "../../components/Header/Toolbar";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Permresume Home | Resume Builder | Resume Generator | Canadian Resume Generator | Canadian Resume Builder</title>
      <meta name="desc" content="Unlock your career potential with Permresume - access our diverse collection of professional CV templates, including Canadian formats. Craft your perfect resume for free with our intuitive builder"/>
    </Helmet>
      <Flex w={"100vw"} h={"100vh"} direction={"column"} align={"flex-start"}>
        <Box w={'100%'}>
          <Toolbar />
        </Box>
        <Title>Permresume Generator</Title>
        <Title order={6}>Unlock your career potential with Permresume - access our diverse collection of professional CV templates, including Canadian formats. Craft your perfect resume for free with our intuitive builder</Title>
      </Flex>
    </>
  );
};

export default Home;
