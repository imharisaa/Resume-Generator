import { Box, useMantineTheme } from "@mantine/core";
import React from "react";
import { useFirstTemplateStyle } from "./First.template.style";
import NameAndProfession from "../Components/Name&Profession/Name&Profession.component";
import ContactComponent from "../Components/Contact/Contact.component";

const FristTemplate = () => {
  const { classes: {
    First_Template__container,
    First_Template__col_1,
    First_Template__col_2,
    Name_And_Profession__container,
    Contact_Component__container
  } } = useFirstTemplateStyle()

  const theme = useMantineTheme()
  

  return (
    <Box className={First_Template__container} h={"297mm"} w={"210mm"}>
        <Box className={First_Template__col_1}>
            <NameAndProfession size={'20px'} alignment={'center'} maHeight={'fit-content'} miHeight={'100px'} nameAndProfessionContainer={Name_And_Profession__container} nameColor={theme.colors.custom.first.heading1.light} professionColor={'gray'}  width={'15rem'} />
            <ContactComponent contactContainerClass={Contact_Component__container} contactContainerMaxHeight={'fit-content'} contactContainerMinHeight={'100px'} contactContainerWidth={'15rem'} color={'whitesmoke'} contactHeadingAlignment={'start'} contactHeadingColor={theme.colors.custom.first.heading1.dark} contactHeadingWidth={'15rem'} contantAlignment={'start'} contantColor={'whitesmoke'} contantWidth={'15rem'} size={'15px'} />
        </Box>
        <Box className={First_Template__col_2}>

        </Box>
    </Box>
  );
};

export default FristTemplate;
