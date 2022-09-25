import {
  Box,
  Container,
  Icon,
  Table,
  TableCaption,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
  Tbody,
  Td,
} from '@chakra-ui/react';
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const PipelineTable = () => {
  const pipelineData = [
    {
      content: 'Neo Blockchain & Future',
      auther: 'Rushhy#9481',
      status: 'Published',
      date: '12-12-2021',
    },
    {
      content: 'What is the ETH merge all about',
      auther: 'Rushhy#9481',
      status: 'Published',
      date: '12-12-2021',
    },
    {
      content: 'Bitcorns price prediction',
      auther: 'Rushhy#9481',
      status: 'Published',
      date: '12-12-2021',
    },
    {
      content: 'What is a bear market?',
      auther: 'Rushhy#9481',
      status: 'Published',
      date: '12-12-2021',
    },
    {
      content: 'What is a bitscoin',
      auther: 'Rushhy#9481',
      status: 'Published',
      date: '12-12-2021',
    },
    {
      content: 'Neo Blockchain & Future',
      auther: 'Rushhy#9481',
      status: 'Published',
      date: '12-12-2021',
    },
  ];
  return (
    <Container
      bg="white"
      p="5"
      my="4"
      borderRadius={'8'}
      maxW={{ base: 320, sm: 480, md: 720, lg: 1200 }}>
      <Box minW="100%" minH="100%">
        <Text
          fontSize="18px"
          fontFamily={'Helvetica'}
          fontWeight={'700'}
          color="#818BF5">
          Pipeline
        </Text>
        <Text
          fontSize="14px"
          fontFamily={'Helvetica'}
          fontWeight={'400'}
          color="#A0AEC0">
          <Icon mx="1" color="#68D391" as={BsCheckCircleFill} /> 4 awaiting
          approval
        </Text>
      </Box>
      <Box>
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
                  Auther
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
              {pipelineData.map((data, idx) => {
                return (
                  <Tr key={idx}>
                    <Td
                      fontSize="14px"
                      fontFamily={'Helvetica'}
                      fontWeight={'700'}
                      color="#2D3748"
                      lineHeight={'20px'}
                      textAlign="left">
                      {data.content}
                    </Td>
                    <Td
                      fontSize="14px"
                      fontFamily={'Helvetica'}
                      fontWeight={'700'}
                      color="#2D3748"
                      lineHeight={'20px'}
                      textAlign="center">
                      {data.auther}
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
                      {data.date}
                    </Td>{' '}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default PipelineTable;
