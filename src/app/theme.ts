import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "green",
  fontFamily: "Inter, sans-serif",

  radius: {
    md: "12px",
  },

  components: {
    Button: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
  },
});
