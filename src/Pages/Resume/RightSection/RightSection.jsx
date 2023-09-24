import { Box, Container, Flex, Grid, MantineProvider, useMantineTheme } from "@mantine/core";
import React from "react";
import useRightSectionStyle from "./RightSection.style";
import FristTemplate from "../../../Resume_Preview/Templates/First.Template/First.template";
import { useSelector } from "react-redux";
import { colorPlates } from "../../../Theming/CustomColorPlates/Plates";
import SecondTemplate from "../../../Resume_Preview/Templates/Second.Template/Second.template";


const RightSection = () => {
  const themeData = useSelector((state) => state.theme.colorPlate)
  const { classes: {right_section_container} } = useRightSectionStyle()
  const theme = useMantineTheme();
  return (
    <>
      <Container className={right_section_container} p={"xl"} h={"95vh"} w={"100vw"}>
        <Grid gutter={"lg"}>
          <Flex justify={'center'} align={'center'} w={'100%'} h={'100%'}>
            <MantineProvider theme={{
                colors: {
                  custom: colorPlates.blue
                }
            }}>
              {/* <FristTemplate /> */}
              <SecondTemplate />
            </MantineProvider>
          </Flex>
        </Grid>
      </Container>
    </>
  );
};

export default RightSection;
