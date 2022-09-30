import { Container } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import ContentContainer from '../../components/dashboard/ContentContainer';
import PipelineTable from '../../components/dashboard/PipelineTable';

import useAuthenticationStore from '../../stores/authenticationStore';
import useCampaignStore from '../../stores/campaign';
const CreatorDashboard = () => {
  const { campaign, fetchCreatorCampaign, fetchAdminCampaign } =
    useCampaignStore();
  useEffect(() => {
    fetchCreatorCampaign();
  }, []);
  return (
    <Container mt="18" border="2" mx="0" maxW="100%">
      <ContentContainer data={campaign} />
      <PipelineTable data={campaign} />
    </Container>
  );
};

const AdminDashboard = () => {
  const { campaign, fetchCreatorCampaign, fetchAdminCampaign } =
    useCampaignStore();
  useEffect(() => {
    fetchAdminCampaign();
  }, []);

  return (
    <Container mt="18" border="2" mx="0" maxW="100%">
      {/* <ContentContainer data={campaign} /> */}
      <PipelineTable data={campaign} />
    </Container>
  );
};
const Dashboard = () => {
  return (
    <>
      {useAuthenticationStore.getState().authData.role === 'Admin' && (
        <AdminDashboard />
      )}
      {useAuthenticationStore.getState().authData.role === 'Creator' && (
        <CreatorDashboard />
      )}
    </>
  );
};

Dashboard.PageLayout = DashboardLayout;

export default Dashboard;
