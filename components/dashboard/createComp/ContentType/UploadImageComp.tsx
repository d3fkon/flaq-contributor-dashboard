import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { FiUpload } from 'react-icons/fi';
import { CreateContentFormData } from '../../../../api/datatypes/CreateCampaigns';
import { uploadFile } from '../../../../api/uploadImage';

type UploadImageCompProps = {
  setValue: UseFormSetValue<CreateContentFormData>;
};

const UploadImageComp = ({ setValue }: UploadImageCompProps) => {
  const hiddenFileInput = React.useRef<HTMLInputElement | null>(null);
  const [image, setImage] = React.useState<string>('');
  const handleClick = (event: any) => {
    hiddenFileInput?.current?.click();
  };

  const handleChange = async (event: any) => {
    const fileUploaded = event.target.files[0];
    const image_url = await uploadFile(fileUploaded);
    setValue('image', `${image_url}`);
    setImage(`${image_url}`);
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
        {image ? (
          <Image
            w="100%"
            h="100%"
            border={'1px solid #E2E8F0'}
            src={image}
            alt="preview image"
          />
        ) : (
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
        )}
      </Box>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
        accept="image/*"
      />
    </Box>
  );
};

export default UploadImageComp;
