import { Box, Button, Icon, Input, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';

type Props = {};

const Video = (props: Props) => {
  return (
    <Box>
      <Text variant={'inputlabel'}>YouTube Link</Text>
      <Input variant={'primary'} />
      <Button variant={'submitbtn'}>
        <Icon mx="2" as={BiCheckCircle} />
        Done
      </Button>
    </Box>
  );
};
export default Video;
