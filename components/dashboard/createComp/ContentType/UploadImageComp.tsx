import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FiUpload } from 'react-icons/fi';

type UploadImageCompProps = {
  setImageUpload: (imageUpload: any) => void;
};

const UploadImageComp = ({ setImageUpload }: UploadImageCompProps) => {
  const hiddenFileInput = React.useRef<HTMLInputElement | null>(null);

  const handleClick = (event: any) => {
    hiddenFileInput?.current?.click();
  };

  const handleChange = async (event: any) => {
    const fileUploaded = event.target.files[0];
    setImageUpload(event.target.files[0]);
    event.preventDefault();
  };

  return (
    <Box
      onClick={handleClick}
      m="3"
      borderRadius={'10'}
      bg="#F8F9FA"
      maxW="153"
      w="100%"
      height="118">
      <Box minW="100%" h="100%">
        <Flex
          direction={'column'}
          alignItems={'center'}
          width="153"
          height="118"
          pt="12">
          <Icon fontSize={'25px'} as={FiUpload} />
          <Text
            mt="5"
            fontFamily={'Helvetica'}
            color="#9999A5"
            fontSize={'12px'}
            fontWeight={'400'}>
            max file size 1mb
          </Text>
        </Flex>
      </Box>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </Box>
  );
};

export default UploadImageComp;
