import { createStyles } from "@mantine/core";

export const useResumeStyles = createStyles((theme) => ({
  resume_container: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
  },

  left_section: {
    width: "1px",
    height: "100%",
    transition: "width 0.5s ease",
    position: "relative",
  },

  left_section_open: {
    width: "45vw",
    overflowX: "hidden",
    padding: 12,
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
    width: "10px",
    right: "10px",
    top: "15px",
    height: "10px",
    backgroundColor: "lightsteelblue",
    color: "white",
    fontWeight: "bolder",
  },

  left_section_buttonClosed: {
    height: "100vh",
    backgroundColor: "lightsteelblue",
    boxShadow: `3px 0px 10px 0px ${theme.colors.custom.first.lightGreyishBlue}`,
    border: "none",
    position: "relative",
    ":active": {
      boxShadow: "inset -2px 8px 16px 1px lightgrey",
    },
  },

  openDrawerIcon: {
    left: 15,
    width: 42,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
}));
