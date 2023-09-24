import { ActionIcon, Box, Flex, Title, createStyles } from "@mantine/core";
import { IconSquareRoundedXFilled } from "@tabler/icons-react";
import React from "react";

const ChangeTemplatesModalHeader = ({ close }) => {
  const { classes } = useChangeTemplateModalHeaderStyle()
  return (
    <Box h={"50px"} className={classes.container}>
      <Flex w={"100%"} h={"100%"} justify={"space-between"} align={"center"}>
        <Title order={2}>Change template</Title>
        <ActionIcon w={40} h={40} onClick={close} variant="subtle">
          <IconSquareRoundedXFilled  size={'2rem'}/>
        </ActionIcon>
      </Flex>
    </Box>
  );
};

export default ChangeTemplatesModalHeader;

const useChangeTemplateModalHeaderStyle = createStyles((theme) => ({
  container: {
    display: 'flex',
    position: 'fixed',
    width: '97rem',
    backgroundColor: 'white'
  }
}))
