import { Box, Flex, createStyles } from "@mantine/core";
import React from "react";
import { changePreviewTemplate, changeTemplate, templateMaper, templates } from "../../../../store/forms.reducer";
import { useDispatch, useSelector } from "react-redux";

const ChangeTemplateModalRightSection = () => {
  const currentTemplateName = useSelector(
    (state) => state.forms.previewTemplate
  );
  const dispatch = useDispatch()
  const { classes } = useChangeTemplateModalRightSectionStyle();
  return (
    <Box
      pt={"4rem"}
      style={{ borderLeft: "1px solid lightgrey" }}
      w={"100%"}
      h={"46rem"}
    >
      <Flex w={'100%'} h={'100%'} justify={'center'} align={'center'}>
        <Flex
          w={"100%"}
          h={"100%"}
          wrap={"wrap"}
          className={classes.flex_container}
        >
          {templates.map((template, i) => {
            const Template = templateMaper[template];
            return (
              <Box pt={'1.5rem'} pb={'1.5rem'} pr={'15px'} pl={'15px'} w={'45%'} h={'133.6mm'} >
              <Box className={classes.template_container} onMouseOver={() => {
                dispatch(changePreviewTemplate(template))
              }} onClick={() => {
                dispatch(changeTemplate(template))
              }}>
                <Template key={i} />
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default ChangeTemplateModalRightSection;

const useChangeTemplateModalRightSectionStyle = createStyles((theme) => ({
  template_container: {
    transformOrigin: 'top left',
    transform: 'scale(0.4)'
  },
  flex_container: {
    overflow: "auto",
  },
}));

