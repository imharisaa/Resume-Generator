import { createStyles } from "@mantine/core";

export const useForthTemplateStyle = createStyles((theme) => ({
  Forth_Template__container: {
    display: "table",
    boxShadow: '0px 0px 6px 5px #7c797954'
  },
  Forth_Template__col_1: {
    display: "table-cell",
    backgroundColor: "#f4f4f4",
    width: "15rem",
    paddingLeft: 15,
    paddingRight: 15,
  },
  Forth_Template__col_2: {
    display: "table-cell",
    width: "calc( 100% - 10rem ) !important",
    padding: "0 15px 15px 15px",
  },

  //? Name & Profession Component Styling

  Name_And_Profession__container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyItems: "center",
    flexWrap: "wrap",
    padding: "16px",
  },

  //? Contact Component Styling

  Contact_Component__container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingBottom: "12px",
  },

  Contact_Component__contact_heading: {
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    padding: "12px",
    // backgroundColor: theme.colors.custom.dark,
  },

  Contact_Component__content_email__container: {
    width: "100%",
    height: "fit-content",
    padding: "12px 12px 5px 12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  Contact_Component__content_social_links__container: {
    width: "100%",
    height: "fit-content",
    padding: "0px 12px 5px 12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  //? Skill Component Style

  Skill_Component__container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingBottom: "12px",
  },

  Skill_Component__skills_heading: {
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    padding: "12px",
    // backgroundColor: theme.colors.custom.dark,
  },

  Skill_Component__skill_heading: {
    width: "100%",
    height: "25px",
    display: "flex",
    alignItems: "center",
  },

  Skill_Component__content_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "35px",
    width: "90%",
  },

  Contact_heading: {
    borderBottom: "1px solid #d5d6d6",
  },

  workHistory_header: {
    borderBottom: "1px solid #d5d6d6",
    paddingTop: "12px",
  },

  skillsheading: {
    paddingBottom: "15px",
    paddingTop: "24px",
  },
}));
