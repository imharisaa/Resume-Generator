import { Box, createStyles } from "@mantine/core";
import React from "react";
import FristTemplate from "../../../../Resume_Preview/Templates/First.Template/First.template";

const ChangeTemplateModalRightSection = () => {
  const { classes } = useChangeTemplateModalRightSectionStyle();
  return (
    <Box className={classes.container} w={"100%"} bg={"blue"} h={"46rem"}>
      <Box className={classes.page_container}>
        <FristTemplate />
      </Box>
    </Box>
  );
};

export default ChangeTemplateModalRightSection;

const useChangeTemplateModalRightSectionStyle = createStyles((theme) => ({
  container: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
  },

  page_container: {
    transform: "scale(0.5, 0.5 )",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: '95%',
  },
}));
