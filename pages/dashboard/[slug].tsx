import React from 'react';
import { useRouter } from 'next/router';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Box, Container, Text } from '@chakra-ui/react';

const Demo = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Container
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center">
      <Box>
        <Text fontSize="24px" color="#818BF5" fontFamily={'Poppins'}>
          Coming Soon
        </Text>
      </Box>
    </Container>
  );
};

Demo.PageLayout = DashboardLayout;
export default Demo;
