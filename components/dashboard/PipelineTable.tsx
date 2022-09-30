import {
  Box,
  Container,
  Icon,
  Table,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
  Tbody,
  Td,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Image,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import ICampaignsData, { ICampaigns } from '../../api/datatypes/Campaigns';
import useAuthenticationStore from '../../stores/authenticationStore';
import ApprovalModal from './ApprovalModal';

// utils to get the usefull data from the data fetched from the api
function getPipelineDataUtil(inputdata: Array<ICampaigns>) {
  const output: Array<IPipelineTableData> = [];
  inputdata.map((da) => {
    var st: ICampaignsData = {
      _id: '',
      username: '',
      email: '',
      discordId: '',
      campaigns: [],
      createdAt: '',
      updatedAt: '',
      __v: 0,
    };
    output.push(da);
  });
  return output;
}
interface IPipelineTable {
  data: Array<ICampaigns> | undefined;
}

interface IPipelineTableData {
  _id?: string;
  username?: string;
  title?: string;
  contentType?: string;
  status?: string;
  updatedAt?: string;
  image?: string;
}

const PipelineTable = ({ data }: IPipelineTable) => {
  const [approvalModalData, setApprovalModalData] = useState<
    ICampaigns | undefined
  >();
  const [isApprovedView, setIsApprovedView] = useState<boolean>(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModal = (_id: string | undefined, isApprovedView?: boolean) => {
    // setApprovalModalData(data[_id]);
    data &&
      setApprovalModalData(
        data[data.findIndex((x: ICampaigns) => x._id === _id)]
      );
    onOpen();
  };
  return (
    <Container my="2" maxW={{ base: 320, sm: 480, md: 720, lg: 1200 }}>
      <ApprovalModal
        data={approvalModalData}
        isApprovedView={isApprovedView}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
      <Box minW="100%" minH="100%" mb="3" mt="6">
        <Text
          fontSize="18px"
          fontFamily={'Helvetica'}
          fontWeight={'700'}
          color="#818BF5"
        >
          Your content pipeline
        </Text>
      </Box>
      <Tabs bg="white" p="5" borderRadius={'8'} variant="unstyled">
        <TabList>
          <Tab
            px="14"
            fontFamily={'Poppins'}
            fontWeight={'500'}
            fontSize="14px"
            lineHeight={'24px'}
            letterSpacing={'0.4px'}
            _selected={{
              color: '#2196F3',
              borderBottom: '2px',
              borderColor: '#2196F3',
            }}
          >
            APPROVED
          </Tab>
          <Tab
            px="14"
            fontFamily={'Poppins'}
            fontWeight={'500'}
            fontSize="14px"
            lineHeight={'24px'}
            letterSpacing={'0.4px'}
            _selected={{
              borderBottom: '2px',
              color: '#2196F3',
              borderColor: '#2196F3',
            }}
          >
            PIPELINE
          </Tab>
          <Tab
            px="14"
            fontFamily={'Poppins'}
            fontWeight={'500'}
            fontSize="14px"
            lineHeight={'24px'}
            letterSpacing={'0.4px'}
            _selected={{
              borderBottom: '2px',
              color: '#2196F3',
              borderColor: '#2196F3',
            }}
          >
            REJECTED
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th
                      fontSize="10px"
                      fontFamily={'Helvetica'}
                      fontWeight={'400'}
                      color="#A0AEC0"
                      textAlign={'left'}
                    >
                      Content
                    </Th>
                    <Th
                      fontSize="10px"
                      fontFamily={'Helvetica'}
                      fontWeight={'400'}
                      color="#A0AEC0"
                      textAlign={'center'}
                    >
                      Content Type
                    </Th>
                    <Th
                      fontSize="10px"
                      fontFamily={'Helvetica'}
                      fontWeight={'400'}
                      color="#A0AEC0"
                      textAlign={'center'}
                    >
                      Status
                    </Th>
                    <Th
                      fontSize="10px"
                      fontFamily={'Helvetica'}
                      fontWeight={'400'}
                      color="#A0AEC0"
                      textAlign={'center'}
                    >
                      Date
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data &&
                    getPipelineDataUtil(data)
                      .filter((data) => {
                        return data.status === 'Approved';
                      })
                      .map((data, idx) => {
                        return (
                          <Tr key={idx}>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="left"
                            >
                              {data.title}
                            </Td>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="center"
                            >
                              {data.contentType}
                            </Td>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="center"
                            >
                              {data.status}
                            </Td>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="center"
                            >
                              {new Date(`${data.updatedAt}`)
                                .toISOString()
                                .slice(0, 10)}
                            </Td>
                            {useAuthenticationStore.getState().authData.role ===
                              'Admin' && (
                              <Td
                                fontSize="14px"
                                fontFamily={'Helvetica'}
                                fontWeight={'700'}
                                color="#2D3748"
                                lineHeight={'20px'}
                                textAlign="center"
                              >
                                <Text
                                  cursor={'pointer'}
                                  fontWeight="500"
                                  color="#2196F3"
                                  fontFamily="Poppins"
                                  fontSize="13px"
                                  onClick={() => {
                                    setIsApprovedView(true);
                                    openModal(data?._id);
                                  }}
                                >
                                  View
                                </Text>
                              </Td>
                            )}
                          </Tr>
                        );
                      })}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th
                      fontSize="10px"
                      fontFamily={'Helvetica'}
                      fontWeight={'400'}
                      color="#A0AEC0"
                      textAlign={'left'}
                    >
                      Content
                    </Th>
                    <Th
                      fontSize="10px"
                      fontFamily={'Helvetica'}
                      fontWeight={'400'}
                      color="#A0AEC0"
                      textAlign={'center'}
                    >
                      Content Type
                    </Th>
                    <Th
                      fontSize="10px"
                      fontFamily={'Helvetica'}
                      fontWeight={'400'}
                      color="#A0AEC0"
                      textAlign={'center'}
                    >
                      Status
                    </Th>
                    <Th
                      fontSize="10px"
                      fontFamily={'Helvetica'}
                      fontWeight={'400'}
                      color="#A0AEC0"
                      textAlign={'center'}
                    >
                      Date
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data &&
                    getPipelineDataUtil(data)
                      .filter((data) => {
                        return data.status === 'Pipeline';
                      })
                      .map((data, idx) => {
                        return (
                          <Tr key={idx}>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="left"
                            >
                              {data.title}
                            </Td>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="center"
                            >
                              {data.contentType}
                            </Td>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="center"
                            >
                              {data.status}
                            </Td>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="center"
                            >
                              {new Date(`${data.updatedAt}`)
                                .toISOString()
                                .slice(0, 10)}
                            </Td>
                            {useAuthenticationStore.getState().authData.role ===
                              'Admin' && (
                              <Td
                                fontSize="14px"
                                fontFamily={'Helvetica'}
                                fontWeight={'700'}
                                color="#2D3748"
                                lineHeight={'20px'}
                                textAlign="center"
                              >
                                <Text
                                  cursor={'pointer'}
                                  fontWeight="500"
                                  color="#2196F3"
                                  fontFamily="Poppins"
                                  fontSize="13px"
                                  onClick={() => {
                                    setIsApprovedView(false);
                                    openModal(data?._id);
                                  }}
                                >
                                  View
                                </Text>
                              </Td>
                            )}
                          </Tr>
                        );
                      })}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th
                      fontSize="10px"
                      fontFamily={'Helvetica'}
                      fontWeight={'400'}
                      color="#A0AEC0"
                      textAlign={'left'}
                    >
                      Content
                    </Th>
                    <Th
                      fontSize="10px"
                      fontFamily={'Helvetica'}
                      fontWeight={'400'}
                      color="#A0AEC0"
                      textAlign={'center'}
                    >
                      Content Type
                    </Th>
                    <Th
                      fontSize="10px"
                      fontFamily={'Helvetica'}
                      fontWeight={'400'}
                      color="#A0AEC0"
                      textAlign={'center'}
                    >
                      Status
                    </Th>
                    <Th
                      fontSize="10px"
                      fontFamily={'Helvetica'}
                      fontWeight={'400'}
                      color="#A0AEC0"
                      textAlign={'center'}
                    >
                      Date
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data &&
                    getPipelineDataUtil(data)
                      .filter((data) => {
                        return data.status === 'Rejected';
                      })
                      .map((data, idx) => {
                        return (
                          <Tr key={idx}>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="left"
                            >
                              {data.title}
                            </Td>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="center"
                            >
                              {data.contentType}
                            </Td>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="center"
                            >
                              {data.status}
                            </Td>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="center"
                            >
                              {new Date(`${data.updatedAt}`)
                                .toISOString()
                                .slice(0, 10)}
                            </Td>
                          </Tr>
                        );
                      })}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default PipelineTable;
