import React from 'react';
import { useRouter } from 'next/router';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Container, Text } from '@chakra-ui/react';

const Demo = () => {
<<<<<<< HEAD
  const router = useRouter()
  const { slug } = router.query
=======
  const router = useRouter();
  const { slug } = router.query;
>>>>>>> d04b438 (prettier setup and formating with it)
  return (
    <Container>
      <Text fontSize="24px" fontFamily={'Inter'}>
        {slug} Page will go here
      </Text>
    </Container>
<<<<<<< HEAD
  )
}

Demo.PageLayout = DashboardLayout
export default Demo
=======
  );
};

Demo.PageLayout = DashboardLayout;
export default Demo;
>>>>>>> d04b438 (prettier setup and formating with it)
