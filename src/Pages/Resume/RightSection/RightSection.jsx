import { Box, Container, Flex, Grid } from "@mantine/core";
import React from "react";

const RightSection = () => {
  return (
    <>
      <Container p={"xl"} h={"95vh"} w={"100vw"}>
        <Grid gutter={"lg"}>
          <Flex justify={'center'} align={'center'} w={'100%'} h={'100%'}>
            <Box bg={"cyan"} h={"91.5vh"} w={"75%"}></Box>
          </Flex>
        </Grid>
      </Container>
    </>
  );
};

export default RightSection;
