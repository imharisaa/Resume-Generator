import { createStyles } from "@mantine/core";

export const useFirstTemplateStyle = createStyles((theme) => ({
  First_Template__container: {
    display: "table",
  },
  First_Template__col_1: {
    display: "table-cell",
    backgroundColor: theme.colors.custom.first.normal,
    width: "15rem",
  },
  First_Template__col_2: {
    display: "table-cell",
    width: "calc( 100% - 15rem )",
  },

  //? Name & Profession Component Styling

  Name_And_Profession__container: {
    marginBottom: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "cetner",
    padding: "12px",
  },

  //? Contact Component Styling

  Contact_Component__container: {
    display: "flex",
    flexDirection: "column",
  },
}));
