import { Box, createStyles } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import FristTemplate from "../../../../Resume_Preview/Templates/First.Template/First.template";
import { Provider, useSelector } from "react-redux";
import { templateMaper } from "../../../../store/forms.reducer";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import { PDFViewer } from "@react-pdf/renderer";
import { store } from "../../../../redux/store";

const ChangeTemplateModalLeftSection = () => {
  
  const { classes } = useChangeTemplateModalLeftSectionStyle();
  const templateData = useSelector((state) => state.forms.previewTemplate);
  const ref = useRef(null)
  const [ready, setReady] = useState(false)

  const PreviewTemplate = templateMaper[templateData];
  useEffect(()=> {
    setReady(true)
  },[ref])
  return (
    
    <Box ref={ref}
      style={{ borderRight: "1px solid lightgrey" }}
      className={classes.container}
      w={"100%"}
      h={"46rem"}
    >
       
      <Box className={classes.page_container}>
        <PreviewTemplate />
      </Box>
    
    </Box>
     
  );
};

export default ChangeTemplateModalLeftSection;

const useChangeTemplateModalLeftSectionStyle = createStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    overflow: "auto",
  },

  page_container: {
    transform: "scale(0.80)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    paddingTop: "6.5rem",
    transformOrigin: 'top center',
    position: 'absolute',
    left: '4%',
    top: '-7%',
  },
}));
