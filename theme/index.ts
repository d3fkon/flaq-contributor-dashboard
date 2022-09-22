import { extendTheme, type ThemeConfig } from "@chakra-ui/react";


const config = {
  fonts: {
    body: "Inter, sans-serif",
    heading: `Inter, sans-serif`,
  },
};


const theme = extendTheme({ ...config });

export default theme;
