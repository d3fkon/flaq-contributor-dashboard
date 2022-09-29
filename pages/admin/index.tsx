import { Box, Container } from '@chakra-ui/react';
import { Console } from 'console';
import React from 'react';
import ContentContainer from '../../components/dashboard/ContentContainer';
import PipelineTable from '../../components/dashboard/PipelineTable';
import useAxios from '../../hooks/useAxios';
import DashboardLayout from '../../layouts/DashboardLayout';

type Props = {};

const Admin = (props: Props) => {
  const { response, loading, error, sendData } = useAxios({
    method: 'get',
    url: `admin/campaigns`,
  });
  console.log(JSON.stringify(response?.data));
  return (
    <Container mt="18" border="2" mx="0" maxW="100%">
      <ContentContainer data={response?.data} />
      <PipelineTable data={response?.data} />
    </Container>
  );
};
Admin.PageLayout = DashboardLayout;
export default Admin;
