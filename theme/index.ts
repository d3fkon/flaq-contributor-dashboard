<<<<<<< HEAD
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
=======
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
>>>>>>> d04b438 (prettier setup and formating with it)

const config = {
  fonts: {
    body: 'Inter, sans-serif',
    heading: `Inter, sans-serif`,
  },
};

const theme = extendTheme({ ...config });

export default theme;
