import { extendTheme, type ThemeConfig } from "@chakra-ui/react";


const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    body: "Inter, sans-serif",
    heading: `Inter, sans-serif`,
  },
};


const theme = extendTheme({ config });

export default theme;
