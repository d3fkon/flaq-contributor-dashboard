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
} from '@chakra-ui/react';
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import ICampaignsData from '../../api/datatypes/Campaigns';

// utils to get the usefull data from the data fetched from the api
function getPipelineDataUtil(inputdata: Array<ICampaignsData>) {
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
    st.username = da.username;

    da.campaigns.map((campaign) => {
      const dt: IPipelineTableData = { ...st };
      dt.title = campaign.title;
      dt.contentType = campaign.contentType;
      dt.status = campaign.status;
      dt.updatedAt = campaign.updatedAt;
      dt.image = campaign.image;
      output.push(dt);
    });
  });
  return output;
}
interface IPipelineTable {
  data: Array<ICampaignsData> | undefined;
}

interface IPipelineTableData {
  username?: string;
  title?: string;
  contentType?: string;
  status?: string;
  updatedAt?: string;
  image?: string;
}

const PipelineTable = ({ data }: IPipelineTable) => {
  return (
    <Container my="2" maxW={{ base: 320, sm: 480, md: 720, lg: 1200 }}>
      <Box minW="100%" minH="100%" mb="6">
        <Text
          fontSize="18px"
          fontFamily={'Helvetica'}
          fontWeight={'700'}
          color="#818BF5">
          Pipeline
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
            }}>
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
            }}>
            PENDING
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
                      textAlign={'left'}>
                      Content
                    </Th>
                    <Th
                      fontSize="10px"
                      fontFamily={'Helvetica'}
                      fontWeight={'400'}
                      color="#A0AEC0"
                      textAlign={'center'}>
                      Content Type
                    </Th>
                    <Th
                      fontSize="10px"
                      fontFamily={'Helvetica'}
                      fontWeight={'400'}
                      color="#A0AEC0"
                      textAlign={'center'}>
                      Status
                    </Th>
                    <Th
                      fontSize="10px"
                      fontFamily={'Helvetica'}
                      fontWeight={'400'}
                      color="#A0AEC0"
                      textAlign={'center'}>
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
                              textAlign="left">
                              {data.title}
                            </Td>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="center">
                              {data.contentType}
                            </Td>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="center">
                              {data.status}
                            </Td>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="center">
                              {new Date(`${data.updatedAt}`)
                                .toISOString()
                                .slice(0, 10)}
                            </Td>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="center">
                              <Text
                                fontWeight="500"
                                color="#2196F3"
                                fontFamily="Poppins"
                                fontSize="13px">
                                View
                              </Text>
                            </Td>
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
                      textAlign={'left'}>
                      Content
                    </Th>
                    <Th
                      fontSize="10px"
                      fontFamily={'Helvetica'}
                      fontWeight={'400'}
                      color="#A0AEC0"
                      textAlign={'center'}>
                      Content Type
                    </Th>
                    <Th
                      fontSize="10px"
                      fontFamily={'Helvetica'}
                      fontWeight={'400'}
                      color="#A0AEC0"
                      textAlign={'center'}>
                      Status
                    </Th>
                    <Th
                      fontSize="10px"
                      fontFamily={'Helvetica'}
                      fontWeight={'400'}
                      color="#A0AEC0"
                      textAlign={'center'}>
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
                              textAlign="left">
                              {data.title}
                            </Td>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="center">
                              {data.contentType}
                            </Td>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="center">
                              {data.status}
                            </Td>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="center">
                              {new Date(`${data.updatedAt}`)
                                .toISOString()
                                .slice(0, 10)}
                            </Td>
                            <Td
                              fontSize="14px"
                              fontFamily={'Helvetica'}
                              fontWeight={'700'}
                              color="#2D3748"
                              lineHeight={'20px'}
                              textAlign="center">
                              <Text
                                fontWeight="500"
                                color="#2196F3"
                                fontFamily="Poppins"
                                fontSize="13px">
                                View
                              </Text>
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
