import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Box,
  Image,
  Flex,
  Textarea,
  Select,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { approvalApi } from '../../api/ApprovalApi';
import { ICampaigns } from '../../api/datatypes/Campaigns';
import useAxios from '../../hooks/useAxios';
import useCampaignStore from '../../stores/campaign';
type Props = {
  data?: ICampaigns | undefined;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};
type Level2TitleDropDownProps = {
  level2: string;
  setLevel2: React.Dispatch<React.SetStateAction<string>>;
};
const Level2TitleDropDown = ({
  level2,
  setLevel2,
}: Level2TitleDropDownProps) => {
  const { response, loading, error, sendData } = useAxios({
    method: 'get',
    url: `/admin/level2`,
  });

  return (
    <Select
      value={level2}
      onChange={(e) => setLevel2(e.target.value)}
      my="5"
      placeholder="Select Level2 Title">
      {response?.data &&
        response.data.map((dt: any) => {
          return (
            <option key={dt._id} value={dt._id}>
              {dt.title}
            </option>
          );
        })}
    </Select>
  );
};
function ApprovalModal({ data, isOpen, onOpen, onClose }: Props) {
  const toast = useToast();
  const { campaign, fetchCreatorCampaign, fetchAdminCampaign } =
    useCampaignStore();
  const sendData = async (data: {
    campaignId: string | undefined;
    level2Id: string;
    status: string;
  }) => {
    if (data.level2Id === '') {
      toast({
        position: 'top-right',
        isClosable: true,
        title: `Select Level2 Title`,
        status: 'error',
      });
      return;
    }
    const res = await approvalApi({ ...data });
    if (res.success) {
      toast({
        position: 'top-right',
        isClosable: true,
        title: `Campaign ${data.status}`,
        status: 'success',
      });
      fetchAdminCampaign();
    } else {
      toast({
        position: 'top-right',
        isClosable: true,
        title: `Campaign ${data.status} Failed`,
        status: 'error',
      });
    }
    onClose();
  };
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [level2, setLevel2] = React.useState('');
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        size="2xl"
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize={'20px'}
            fontFamily={'Poppins'}
            fontWeight={500}>
            Approval Panel
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody borderColor={'#E5EAEF'} borderTop={'1px'} pb={6}>
            <Text
              fontSize={'16px'}
              fontWeight={600}
              fontFamily={'Poppins'}
              color="#818BF5">
              Basic Information
            </Text>

            <Flex direction={'row'} p="3" mt="4">
              <Box width="153px" height="118px">
                <Image src={data?.image} />
              </Box>
              <Box m="3" px="6">
                <Box>
                  <Text variant={'inputlabel'} w="350px">
                    Title
                  </Text>
                  <Input disabled value={data?.title} variant={'primary'} />
                </Box>

                <Box>
                  <Text variant={'inputlabel'} w="350px">
                    Description
                  </Text>
                  <Textarea
                    _disabled={{
                      opacity: 1,
                    }}
                    disabled
                    value={data?.description1}
                    _focus={{
                      border: '1px solid #0997FF',
                      backgroundColor: '#F7FAFF',
                    }}
                    border="1px solid #E2E8F0"
                    borderRadius="15px"
                    h={'150px'}
                  />
                </Box>
              </Box>
            </Flex>
            <Flex direction={'column'}>
              <Text
                fontSize={'16px'}
                fontFamily={'Montserrat'}
                fontWeight={500}
                color="#9999A5">
                Viewing:
                <Text color="#8033FF" fontWeight={600} as="span">
                  Video + Article
                </Text>
              </Text>

              {/* article Section */}

              {data && data.articles.length && (
                <Box>
                  <Text textAlign={'center'}> Article Section</Text>
                  {data && data.articles[0].url && (
                    <Box>
                      <Text
                        fontSize={'16px'}
                        fontWeight={600}
                        fontFamily={'Poppins'}
                        color="#818BF5"
                        my="2">
                        Article Link
                      </Text>
                      <Input
                        disabled
                        my="2"
                        value={data?.articles[0].url}
                        variant={'primary'}
                      />
                    </Box>
                  )}

                  {data && data.articles[0].title && (
                    <Box>
                      <Text
                        fontSize={'16px'}
                        fontWeight={600}
                        fontFamily={'Poppins'}
                        color="#818BF5"
                        my="2">
                        Article Title
                      </Text>
                      <Input
                        disabled
                        value={data?.articles[0].title}
                        my="2"
                        variant={'primary'}
                      />
                    </Box>
                  )}
                </Box>
              )}
              {data && data.videos?.length && (
                <Box>
                  <Divider my="4" />
                  <Text textAlign={'center'}> Video Section</Text>
                  {data && data.videos[0].url && (
                    <Box>
                      <Text
                        fontSize={'16px'}
                        fontWeight={600}
                        fontFamily={'Poppins'}
                        color="#818BF5"
                        my="2">
                        Video Link
                      </Text>
                      <Input
                        disabled
                        value={data?.videos[0].url}
                        my="2"
                        variant={'primary'}
                      />
                    </Box>
                  )}

                  {data && data.videos[0].title && (
                    <Box>
                      <Text
                        fontSize={'16px'}
                        fontWeight={600}
                        fontFamily={'Poppins'}
                        color="#818BF5"
                        my="2">
                        Video Title
                      </Text>
                      <Input
                        disabled
                        my="2"
                        value={data?.videos[0].title}
                        variant={'primary'}
                      />
                    </Box>
                  )}
                  {data && data.videos[0].desc && (
                    <Box>
                      <Text
                        fontSize={'16px'}
                        fontWeight={600}
                        fontFamily={'Poppins'}
                        color="#818BF5"
                        my="2">
                        Video Description
                      </Text>
                      <Textarea
                        _disabled={{
                          opacity: 1,
                        }}
                        disabled
                        value={data?.videos[0].desc}
                        _focus={{
                          border: '1px solid #0997FF',
                          backgroundColor: '#F7FAFF',
                        }}
                        border="1px solid #E2E8F0"
                        borderRadius="15px"
                        h={'150px'}
                      />
                    </Box>
                  )}
                </Box>
              )}
            </Flex>
            <Level2TitleDropDown level2={level2} setLevel2={setLevel2} />
          </ModalBody>

          <ModalFooter
            fontFamily={'Montserrat'}
            fontWeight={'600'}
            fontSize={'14px'}
            letterSpacing={'0.2px'}
            justifyContent={'flex-start'}>
            <Button
              width={'101px'}
              borderRadius={'8px'}
              onClick={() =>
                sendData({
                  campaignId: data?._id,
                  level2Id: level2,
                  status: 'Approved',
                })
              }
              _hover={{
                backgroundColor: '#00C48C',
              }}
              backgroundColor={'#66BB6A'}
              color={'#fff'}
              mr={3}>
              approve
            </Button>
            <Button
              width={'101px'}
              borderRadius={'8px'}
              backgroundColor={'#EF5350'}
              color={'#fff'}
              _hover={{
                backgroundColor: '#E53935',
              }}
              onClick={() =>
                sendData({
                  campaignId: data?._id,
                  level2Id: level2,
                  status: 'Rejected',
                })
              }>
              reject
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ApprovalModal;
