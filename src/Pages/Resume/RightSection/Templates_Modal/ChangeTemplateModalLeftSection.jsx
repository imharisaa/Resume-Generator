import { Box, createStyles } from "@mantine/core";
import React from "react";
import FristTemplate from "../../../../Resume_Preview/Templates/First.Template/First.template";

const ChangeTemplateModalLeftSection = () => {
  const { classes } = useChangeTemplateModalLeftSectionStyle();
  return (
    <Box style={{ borderRight: '1px solid lightgrey' }} className={classes.container} w={"100%"} h={"46rem"}>
      <Box className={classes.page_container}>
        <FristTemplate />
      </Box>
    </Box>
  );
};

export default ChangeTemplateModalLeftSection;

const useChangeTemplateModalLeftSectionStyle = createStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
  },

  page_container: {
    transform: "scale(0.60, 0.60 )",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: '95%',
    paddingTop: '6.5rem'
  },
}));
