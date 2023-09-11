import { Box, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import { Heading1 } from "../../../components/Typography/Headings";
import { useSelector } from "react-redux";

const NameAndProfession = ({size, width, miHeight, maHeight, nameAndProfessionContainer, alignment, nameColor, professionColor }) => {
const nameAndProdessionData = useSelector((state) => state.forms.personal_details)
  const theme = useMantineTheme();

  return (
    <Box w={width} mih={miHeight} mah={maHeight}  className={nameAndProfessionContainer}>
      <Heading1 width={width} alignment={alignment} color={nameColor}>
        {nameAndProdessionData.firstName ? nameAndProdessionData.firstName : 'Your Name' }
      </Heading1>
      <Heading1 width={width} alignment={alignment} color={nameColor}>
        {nameAndProdessionData.lastName}
      </Heading1>
      <Text color={professionColor} pt={'3px'} size={size}>
        {nameAndProdessionData.wantedJobTitle ? nameAndProdessionData.wantedJobTitle : 'Profession'}
      </Text>
    </Box>
  );
};

export default NameAndProfession;
