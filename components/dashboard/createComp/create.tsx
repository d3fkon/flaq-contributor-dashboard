import React, { useState } from 'react';
import {
  Box,
  Divider,
  Flex,
  IconButton,
  Input,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';
import { useRouter } from 'next/router';
import ContentType from './ContentType';
import { useForm } from 'react-hook-form';
import UploadImageComp from './ContentType/UploadImageComp';
import { CreateContentFormData } from '../../../api/datatypes/CreateCampaigns';
import useAxios from '../../../hooks/useAxios';
import { uploadFile } from '../../../api/uploadImage';
import { createCampaign } from '../../../api/campaign';

const Create = () => {
  const router = useRouter();
  const toast = useToast();
  // const { response, loading, error, sendData } = useAxios({
  //   method: 'POST',
  //   url: `/creators/campaign/create`,
  // });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<CreateContentFormData>();

  const onSubmit = async (Formdata: any) => {
    console.log(Formdata);
    const respon = await createCampaign(Formdata);
    console.log(respon);
    if (respon.success) {
      toast({ title: `Campaign Created`, status: 'success' });
    } else {
      toast({
        title: `Campaign Creation Failed: Check Inputs`,
        status: 'error',
      });
    }
  };

  return (
    <Box flex="1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box py="8" px="4" bg="#ffffff" borderRadius={'15px'}>
          <Flex justifyContent={'space-between'}>
            <Text
              fontFamily={'Helvetica'}
              fontSize={'26px'}
              color={'#2D3748'}
              fontWeight={700}>
              Create Content
            </Text>
            <IconButton
              onClick={() => router.push('/dashboard')}
              borderRadius={'40%'}
              size="lg"
              aria-label="close create"
              icon={<IoMdClose size="30px" />}
            />
          </Flex>
          <Divider mt="30px" mb="30px" />
          <Box>
            <Box>
              <Text
                fontFamily={'Helvetica'}
                fontSize={'18px'}
                color={'#818BF5'}
                fontWeight={700}>
                Basic Information
              </Text>
            </Box>
            <Flex direction={'row'} p="3" mt="4">
              <UploadImageComp setValue={setValue} />
              <Box m="3" px="6">
                <Box>
                  <Text variant={'inputlabel'} w="350px">
                    Title
                  </Text>
                  <Input {...register('title')} variant={'primary'} />
                </Box>
                <Box>
                  <Text variant={'inputlabel'} w="350px">
                    Description
                  </Text>
                  <Textarea
                    _focus={{
                      border: '1px solid #0997FF',
                      backgroundColor: '#F7FAFF',
                    }}
                    {...register('description1')}
                    border="1px solid #E2E8F0"
                    borderRadius="15px"
                    h={'150px'}
                  />
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>

        <ContentType
          register={register}
          setValue={setValue}
          control={control}
        />
      </form>
    </Box>
  );
};

export default Create;
