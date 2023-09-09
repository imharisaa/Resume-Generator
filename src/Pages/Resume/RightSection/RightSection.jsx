import { Box, Container, Flex, Grid } from "@mantine/core";
import React from "react";
import useRightSectionStyle from "./RightSection.style";
import FristTemplate from "../../../Resume_Preview/Templates/First.template";

const RightSection = () => {
  const { classes: {right_section_container} } = useRightSectionStyle()
  return (
    <>
      <Container className={right_section_container} p={"xl"} h={"95vh"} w={"100vw"}>
        <Grid gutter={"lg"}>
          <Flex justify={'center'} align={'center'} w={'100%'} h={'100%'}>
            <FristTemplate />
          </Flex>
        </Grid>
      </Container>
    </>
  );
};

export default RightSection;
