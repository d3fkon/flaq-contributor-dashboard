import React from 'react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import Create from './create';
import NewMembers from './newMembers';
import ContentType from './ContentType';

const ContentCreateScreenComponent = () => {
  return (
    <Container pt="10" maxW="100%">
      <Flex>
        <Create />
        <NewMembers />
      </Flex>
    </Container>
  );
};

export default ContentCreateScreenComponent;
