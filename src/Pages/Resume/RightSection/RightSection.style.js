import { createStyles } from "@mantine/core";

const useRightSectionStyle = createStyles({
  right_section_container: {
    overflow: "auto",
    position: 'relative'
  },

  right_section_container_templates: {},

  right_section_container_templates_selector: {
    display: "flex",
    position: "absolute",
    flexDirection: 'column',
    
    top: 15,
    left: 25
  }
});

export default useRightSectionStyle;
