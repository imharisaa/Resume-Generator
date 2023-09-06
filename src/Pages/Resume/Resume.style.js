import { createStyles } from "@mantine/core";

export const useResumeStyles = createStyles({
  resume_container: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
  },

  left_section: {
    width: "50px",
    height: "100%",
    overflowX: "hidden",
    transition: "width 0.5s ease",
    position: 'relative',
    padding: 12
  },

  left_section_open: {
    width: "45vw",
  },

  right_section: {
    flexGrow: 1,
    backgroundColor: "#ecf0f1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  left_section_buttonOpened: {
    position: "absolute",
    width: "50px",
    right: "10px",
    top: "5px",
    height: "50px",
  },

  left_section_buttonClosed: {
    position: "relative",
    width: "auto",
    right: "0px",
    top: "0px",
    height: "100vh",
  }

});
