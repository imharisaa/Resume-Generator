import { Box, Flex, createStyles } from "@mantine/core";
import "./ChangeTemplateModal.css"
import React from "react";
import {
  bothTemplate,
  canadianTemplates,
  changePreviewTemplate,
  changeTemplate,
  templateMaper,
  templates,
} from "../../../../store/forms.reducer";
import { useDispatch, useSelector } from "react-redux";

const ChangeTemplateModalRightSection = () => {
  const currentTemplateName = useSelector((state) => state.forms);
  const dispatch = useDispatch();
  const { classes } = useChangeTemplateModalRightSectionStyle();

  let templateChackerResult;

  if (currentTemplateName.templateType === "NormalTemplate") {
    templateChackerResult = templates;
  } else if (currentTemplateName.templateType === "CanadianTemplate") {
    templateChackerResult = canadianTemplates;
  } else if (currentTemplateName.templateType === "BothTemplate") {
    templateChackerResult = bothTemplate;
  }

  return (
    <Box
      className="previewCard"
    >
      {templateChackerResult.map((template, i) => {
        const Template = templateMaper[template];
        return (
          <Box
            w={"48%"}
            h={"35rem"}
            style={{
              // border: "1px solid black",
              position: "relative",
              overflowY: "scroll",
              overflowX: "hidden",
              marginBottom: '20px'
            }}
            
          >
            <Box
              className={classes.template_container}
              onMouseOver={() => {
                dispatch(changePreviewTemplate(template));
              }}
              onClick={() => {
                dispatch(changeTemplate(template));
              }}
            >
              <Template key={i} />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default ChangeTemplateModalRightSection;

const useChangeTemplateModalRightSectionStyle = createStyles((theme) => ({
  template_container: {
    transformOrigin: "top left",
    transform: "scale(0.5)",
    position: "absolute",
    left: "3.5%",
    top: "3.25%",
    
  },

  flex_container: {
    overflow: "auto",
  },
}));

{
  /* <Flex w={'100%'} h={'100%'} justify={'center'} align={'center'}>
<Flex
  w={"100%"}
  h={"100%"}
  wrap={"wrap"}
  className={classes.flex_container}
>
  {templateChackerResult.map((template, i) => {
    const Template = templateMaper[template];
    return (
      // <Box >
      // // <Box className={classes.template_container} onMouseOver={() => {
      // //   dispatch(changePreviewTemplate(template))
      // // }} onClick={() => {
      // //   dispatch(changeTemplate(template))
      // // }}>
      // //   {/* <Template key={i} /> 
      //    </Box>
      // </Box>
      <></>
    );
  })}
</Flex>
</Flex> */
}
