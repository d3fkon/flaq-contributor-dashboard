import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import Button from './button';
import Input from './inputs';
import Text from './text';
import TextArea from './textarea';

const config = {
  fonts: {
    body: 'Inter, sans-serif',
    heading: `Inter, sans-serif`,
  },
  components: {
    Input,
    Text,
    TextArea,
    Button,
  },
};

const theme = extendTheme({ ...config });

export default theme;
