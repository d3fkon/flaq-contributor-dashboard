import { Box } from '@chakra-ui/react';
import React from 'react';
interface IProps {
  children: React.ReactNode;
}
const CreateLayout = ({ children }: IProps) => {
  return (
    <Box>
      CreateLayout
      <Box>{children}</Box>
    </Box>
  );
};

export default CreateLayout;
