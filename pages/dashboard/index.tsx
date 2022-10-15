import { Button, Container } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import ContentContainer from '../../components/dashboard/ContentContainer';
import PipelineTable from '../../components/dashboard/PipelineTable';

import useAuthenticationStore from '../../stores/authenticationStore';
import useCampaignStore from '../../stores/campaign';

const Dashboard = () => {
  const { campaign, fetchCreatorCampaign, fetchAdminCampaign } =
    useCampaignStore();

  // fetch data based on role
  useEffect(() => {
    switch (useAuthenticationStore.getState().authData.role) {
      case 'Creator':
        fetchCreatorCampaign();
        break;
      case 'Admin':
        fetchAdminCampaign();
        break;
    }
  }, []);

  return (
    <>
      <Container mt="18" border="2" mx="0" maxW="100%">
        <ContentContainer data={campaign} />
        <PipelineTable data={campaign} />
      </Container>
    </>
  );
};

Dashboard.PageLayout = DashboardLayout;

export default Dashboard;
