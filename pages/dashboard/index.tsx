import { Container } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import ContentContainer from '../../components/dashboard/ContentContainer';
import PipelineTable from '../../components/dashboard/PipelineTable';

import useAxios from '../../hooks/useAxios';

const Dashboard = () => {
  const { response, loading, error, sendData } = useAxios({
    method: 'get',
    url: `creators/campaigns`,
  });

  return (
    <Container mt="18" border="2" mx="0" maxW="100%">
      <ContentContainer data={response?.data[0].campaigns} />
      <PipelineTable data={response?.data[0].campaigns} />
    </Container>
  );
};

Dashboard.PageLayout = DashboardLayout;

export default Dashboard;
