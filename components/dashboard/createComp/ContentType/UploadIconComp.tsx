import { Box, Center, Icon, Image } from '@chakra-ui/react';
import React from 'react';
import { uploadFile } from '../../../../api/uploadImage';
import { HiOutlineUpload } from 'react-icons/hi';
import { UseFormSetValue } from 'react-hook-form';
import { CreateContentFormData } from '../../../../api/datatypes/CreateCampaigns';

type Props = {
  setValue: UseFormSetValue<CreateContentFormData>;
};

const UploadIconComp = ({ setValue }: Props) => {
  const hiddenFileInput = React.useRef<HTMLInputElement | null>(null);
  const [image, setImage] = React.useState<string>('');
  const handleClick = (event: any) => {
    hiddenFileInput?.current?.click();
  };

  const handleChange = async (event: any) => {
    const fileUploaded = event.target.files[0];
    const image_url = await uploadFile(fileUploaded);
    setValue('articles.0.iconUrl', `${image_url}`);
    setImage(`${image_url}`);
    event.preventDefault();
  };
  return (
    <Box
      onClick={handleClick}
      display="flex"
      alignItems="center"
      border={'1px solid #E2E8F0'}
      m="2"
      justifyContent="center"
      w="90px"
      height="90px">
      {image ? (
        <Image
          w="100%"
          h="100%"
          border={'1px solid #E2E8F0'}
          src={image}
          alt="preview image"
        />
      ) : (
        <Center>
          <Icon as={HiOutlineUpload} />
        </Center>
      )}

      {/* Hidden Component of Image Input */}
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

export default UploadIconComp;
